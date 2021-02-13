import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Plant } from './index';

@ObjectType()
@Entity({ name: 'diseases' })
export class Disease extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  name: string;

  @Field()
  information: string;

  @OneToMany(() => Plant, (plant) => plant.diseases)
  plant: Plant;
}
