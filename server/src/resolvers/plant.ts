import { Resolver, Query, Arg, Mutation, InputType, Field } from 'type-graphql';
import { Plant, PlantType } from '../entities/Plant';
import { Plot } from '../entities/Plot';

@InputType()
class PlantInput {
  @Field()
  name: string;

  @Field()
  variety: string;

  @Field(() => PlantType)
  type!: PlantType;

  @Field()
  plot!: string;

  @Field({ description: 'Format: YEAR/MONTH/DAY' })
  seedSprouted: string;

  @Field({ description: 'Format: YEAR/MONTH/DAY' })
  plantedOn: string;
}

@Resolver()
export class PlantResolver {
  @Query(() => [Plant])
  async plants(): Promise<Plant[]> {
    return Plant.find();
  }

  @Query(() => Plant, { nullable: true })
  plant(@Arg('id') id: string): Promise<Plant | undefined> {
    return Plant.findOne(id);
  }

  @Mutation(() => Plant)
  async createPlant(@Arg('input') input: PlantInput): Promise<Plant> {
    return Plant.create({
      ...input,
      plot: await Plot.findOne(input.plot),
      seedSprouted: new Date(input.seedSprouted),
      plantedOn: new Date(input.plantedOn),
    }).save();
  }

  @Mutation(() => Boolean)
  async deletePlant(@Arg('id') id: string): Promise<Boolean> {
    await Plant.delete(id);
    return true;
  }
}
