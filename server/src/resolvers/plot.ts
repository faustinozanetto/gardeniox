import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';
import { PlantEntity } from '../entities/plant.entity';
import { PlotEntity } from '../entities/plot.entity';

@InputType()
class PlotInput {
  @Field()
  size: number;

  @Field()
  maxPlants: number;
}

@Resolver()
export class PlotResolver {
  @Query(() => [PlotEntity])
  async plots(): Promise<PlotEntity[]> {
    return await PlotEntity.find();
  }

  @Query(() => PlotEntity)
  async plot(@Arg('id') id: number): Promise<PlotEntity | undefined> {
    return await PlotEntity.findOne(id);
  }

  @Mutation(() => PlotEntity)
  async createPlot(@Arg('input') input: PlotInput): Promise<PlotEntity> {
    return await PlotEntity.create({
      ...input,
    }).save();
  }

  @Mutation(() => Boolean)
  async deletePlot(@Arg('id') id: number): Promise<Boolean> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(PlotEntity)
      .where('id = :id', { id: id })
      .execute();
    return true;
  }

  @Mutation(() => Number)
  async plantsAmount(@Arg('id') id: number): Promise<number | undefined> {
    const plot = await PlotEntity.findOne(id);
    if (!plot) {
      console.error('Plot not found');
      return;
    }
    const amount = plot?.plants.length;
    if (amount === 0) {
      console.log('No plants registered in this plot');
      return 0;
    }
    return amount;
  }

  @Query(() => PlantEntity)
  async getPlotPlants(@Arg('id') id: number): Promise<PlantEntity | undefined> {
    const plot = await PlotEntity.findOne(id);
    let plantIds;
    if (plot) {
      plantIds = plot?.plants;
      console.log('Undefined plants');
    }
    //@ts-ignore
    return await Plant.findOne(plantIds[0]);
  }
}
