import { Resolver, Query, Arg, Mutation, InputType, Field } from 'type-graphql';
import { Plant, PlantType } from '../entities/plant.entity';
import { Disease, Plot } from '../entities';
import { getConnection, getRepository } from 'typeorm';

@InputType()
class PlantInput {
  @Field()
  name!: string;

  @Field()
  variety!: string;

  @Field(() => PlantType)
  type!: PlantType;

  @Field()
  plot!: string;

  @Field({ description: 'Format: YEAR/MONTH/DAY' })
  seedSprouted!: string;

  @Field({ description: 'Format: YEAR/MONTH/DAY' })
  plantedOn!: string;
}

@Resolver()
export class PlantResolver {
  @Query(() => [Plant])
  async plants(): Promise<Plant[]> {
    return Plant.find();
  }

  @Query(() => Plant)
  plant(@Arg('id') id: number): Promise<Plant | undefined> {
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

    // if (!plot) {
    //   console.log('Plot not found');
    // }
    // if (plot) {
    //   await getConnection()
    //     .createQueryBuilder()
    //     .relation(PlotEntity, 'plants')
    //     .of(plot.id)
    //     .add(plant.id);
    // }
    //@ts-ignore
    // await Plot.update({ plotId }, { plants: [...plant.plants, plant] });

    return plant;
  }

  @Mutation(() => Boolean)
  async deletePlant(@Arg('id') id: number): Promise<Boolean> {
    await Plant.delete(id);
    return true;
  }

  @Query(() => Boolean)
  async hasDisease(@Arg('id') id: number, @Arg('name') name: string) {
    const disease = await Disease.findOne({ where: { name } });
    if (!disease) {
      console.log('Could not found a disease with the given name!');
      return false;
    }
    const plant = await Plant.findOne(id);
    if (!plant) {
      console.log('Could not found a plant with the given id!');
      return false;
    }
    const plantRepo = getRepository(Plant);
    const diseases = await plantRepo.find({ relations: ['diseases'] });
    console.log(diseases);
  }
}
