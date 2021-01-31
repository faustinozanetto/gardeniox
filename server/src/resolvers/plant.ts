import { Resolver, Query, Arg, Mutation, InputType, Field } from 'type-graphql';
import { PlantEntity, PlantType } from '../entities/plant.entity';
import { PlotEntity } from '../entities/plot.entity';

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
  @Query(() => [PlantEntity])
  async plants(): Promise<PlantEntity[]> {
    return PlantEntity.find();
  }

  @Query(() => PlantEntity)
  plant(@Arg('id') id: number): Promise<PlantEntity | undefined> {
    return PlantEntity.findOne(id);
  }

  @Mutation(() => PlantEntity)
  async createPlant(@Arg('input') input: PlantInput): Promise<PlantEntity> {
    const plot = await PlotEntity.findOne(input.plot);
    const plant = await PlantEntity.create({
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
    await PlantEntity.delete(id);
    return true;
  }
}
