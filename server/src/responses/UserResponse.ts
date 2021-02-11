import { Field, ObjectType } from 'type-graphql';
import { FieldError } from './FieldError';
import { UserEntity } from '../entities/index';

@ObjectType()
export class UserResponse {
  /**
   * Error
   */
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  /**
   * User
   */
  @Field(() => UserEntity, { nullable: true })
  user?: UserEntity;
}
