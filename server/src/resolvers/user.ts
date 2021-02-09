import { GardenioxContext } from '../types';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { UserResponse } from '../responses';
import { UserCredentialsInput } from '../inputs';
import { validateUserRegister } from '../utils';
import { UserEntity } from '../entities/index';
import argon2 from 'argon2';
import { getConnection } from 'typeorm';

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UserCredentialsInput,
    @Ctx() { req }: GardenioxContext
  ): Promise<UserResponse> {
    const errors = validateUserRegister(options);
    if (errors) {
      return { errors };
    }

    const hashedPassword = await argon2.hash(options.password);
    let user;
    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values({
          username: options.username,
          email: options.email,
          password: hashedPassword,
        })
        .returning('*')
        .execute();
      user = result.raw[0];
    } catch (error) {
      if (error.code === '23505') {
        return {
          errors: [
            {
              field: 'username',
              message: 'Username already taken',
            },
          ],
        };
      }
    }

    // store user id session
    // this will set a cookie on the user
    // keep them logged in
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() { req }: GardenioxContext
  ): Promise<UserResponse> {
    const user = await UserEntity.findOne({ where: { username } });

    if (!user) {
      return {
        errors: [
          {
            field: 'username',
            message: "That username doesn't exist",
          },
        ],
      };
    }

    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Incorrect password',
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }

  @Query(() => UserEntity, { nullable: true })
  me(@Ctx() { req }: GardenioxContext) {
    const userId = req.session.userId;
    if (!userId) {
      return null;
    }
    return UserEntity.findOne(userId);
  }
}
