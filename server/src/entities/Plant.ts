import { Field, ObjectType, registerEnumType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Plot } from './Plot';

export enum PlantType {
  DEFAULT = 'default',
  TOMATO = 'tomato',
  LETTUCE = 'lettuce',
  CARROT = 'carrot',
  POTATO = 'potato',
}

registerEnumType(PlantType, {
  name: 'PlantType',
  description: 'Plant type',
  valuesConfig: {
    CARROT: {
      description: 'Carrot',
    },
  },
});

@ObjectType()
@Entity()
export class Plant extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column({ nullable: true })
  name!: string;

  @Field()
  @Column({ nullable: true })
  variety!: string;

  @Field(() => PlantType)
  @Column()
  type: PlantType;

  @ManyToOne(() => Plot, (plot) => plot.plants)
  plot: Plot;

  @Field(() => String)
  @Column()
  seedSprouted!: Date;

  @Field(() => String)
  @Column()
  plantedOn!: Date;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
