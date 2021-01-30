import { Resolver, Query, Arg, Mutation, InputType, Field } from 'type-graphql';
import { Plant } from '../entities/Plant';

@InputType()
class PlantInput {
  @Field()
  name: string;

  @Field()
  variety: string;

  @Field()
  seedSprouted: String;

  @Field()
  plantedOn: String;
}

@Resolver()
export class PlantResolver {
  @Query(() => [Plant])
  async plants(): Promise<Plant[]> {
    return Plant.find();
  }

  @Query(() => Plant, { nullable: true })
  plant(@Arg('id') id: number): Promise<Plant | undefined> {
    return Plant.findOne(id);
  }

  @Mutation(() => Plant)
  async createPlant(@Arg('input') input: PlantInput): Promise<Plant> {
    return Plant.create({
      ...input,
    }).save();
  }

  @Mutation(() => Boolean)
  async deletePlant(@Arg('id') id: number): Promise<Boolean> {
    await Plant.delete(id);
    return true;
  }
}
