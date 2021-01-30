import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Plot } from '../entities/Plot';

@InputType()
class PlotInput {
  @Field()
  maxPlants: number;
  @Field()
  size: number;
}

@Resolver()
export class PlotResolver {
  @Query(() => [Plot])
  async plots(): Promise<Plot[]> {
    return Plot.find();
  }

  @Query(() => Plot, { nullable: true })
  plot(@Arg('id') id: number): Promise<Plot | undefined> {
    return Plot.findOne(id);
  }

  @Mutation(() => Plot)
  async createPlot(@Arg('input') input: PlotInput): Promise<Plot> {
    return Plot.create({
      ...input,
    }).save();
  }

  @Mutation(() => Boolean)
  async deletePlot(@Arg('id') id: number): Promise<Boolean> {
    await Plot.delete(id);
    return true;
  }
}
