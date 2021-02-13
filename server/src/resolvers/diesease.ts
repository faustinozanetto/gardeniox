import { Disease } from '../entities';
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';

@InputType()
class DiseaseInput {
  @Field()
  name!: string;

  @Field()
  information!: string;
}

@Resolver()
export class DiseaseResolver {
  @Query(() => [Disease])
  async diseases(): Promise<Disease[]> {
    return Disease.find();
  }

  @Mutation(() => Disease)
  async createDisease(@Arg('input') input: DiseaseInput) {}
}
