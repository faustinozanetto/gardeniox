import { Field, ObjectType, registerEnumType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PlotEntity } from './plot.entity';

export enum PlantType {
  DEFAULT = 'default',
  TOMATO = 'tomato',
  LETTUCE = 'lettuce',
  CARROT = 'carrot',
  POTATO = 'potato',
  PEPPER = 'pepper',
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
@Entity({ name: 'plants' })
export class PlantEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ nullable: true })
  name!: string;

  @Field()
  @Column({ nullable: true })
  variety!: string;

  @Field(() => PlantType)
  @Column({ nullable: true })
  type: PlantType;

  @ManyToOne(() => PlotEntity, (plot: PlotEntity) => plot.plants)
  @JoinColumn({ name: 'plot_id' })
  plot: PlotEntity;

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
