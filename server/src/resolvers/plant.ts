import { Resolver, Query, Arg, Mutation, InputType, Field } from 'type-graphql';
import { getConnection, getRepository } from 'typeorm';
import { Plant, PlantType } from '../entities/plant.entity';
import { Plot } from '../entities/plot.entity';

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
    const plot = await Plot.findOne(input.plot);
    const plant = await Plant.create({
      ...input,
      plot: plot,
      seedSprouted: new Date(input.seedSprouted),
      plantedOn: new Date(input.plantedOn),
    }).save();

    if (!plot) {
      console.log('Plot not found');
    }
    if (plot) {
      await getConnection()
        .createQueryBuilder()
        .relation(Plot, 'plants')
        .of(plot.id)
        .add(plant.id);
    }
    //@ts-ignore
    // await Plot.update({ plotId }, { plants: [...plant.plants, plant] });

    return plant;
  }

  @Mutation(() => Boolean)
  async deletePlant(@Arg('id') id: string): Promise<Boolean> {
    await Plant.delete(id);
    return true;
  }
}
