import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Plot } from '../entities/Plot';

@InputType()
class PlotInput {
  @Field()
  size: number;

  @Field()
  maxPlants: number;
}

@Resolver()
export class PlotResolver {
  @Query(() => [Plot])
  async plots(): Promise<Plot[]> {
    return Plot.find();
  }

  @Query(() => Plot, { nullable: true })
  plot(@Arg('id') id: string): Promise<Plot | undefined> {
    return Plot.findOne(id);
  }

  @Mutation(() => Plot)
  async createPlot(@Arg('input') input: PlotInput): Promise<Plot> {
    return Plot.create({
      ...input,
    }).save();
  }

  @Mutation(() => Boolean)
  async deletePlot(@Arg('id') id: string): Promise<Boolean> {
    await Plot.delete(id);
    return true;
  }

  @Mutation(() => Number)
  async plantsAmount(@Arg('id') id: string): Promise<number | undefined> {
    const plot = await Plot.findOne(id);
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
}
