import { Field, ObjectType } from 'type-graphql';
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

  @Field()
  @Column({
    type: 'enum',
    enum: PlantType,
    default: PlantType.DEFAULT,
    nullable: true,
  })
  type: PlantType;

  @ManyToOne(() => Plot, (plot) => plot.plants)
  plot: Plot;

  @Field(() => String)
  @Column({ nullable: true })
  seedSprouted!: Date;

  @Field(() => String)
  @Column({ nullable: true })
  plantedOn!: Date;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
