import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  plants: Array<PlantEntity>;
  plant: PlantEntity;
  plots: Array<PlotEntity>;
  plot: PlotEntity;
  getPlotPlants: PlantEntity;
};


export type QueryPlantArgs = {
  id: Scalars['Float'];
};


export type QueryPlotArgs = {
  id: Scalars['Float'];
};


export type QueryGetPlotPlantsArgs = {
  id: Scalars['Float'];
};

export type PlantEntity = {
  __typename?: 'PlantEntity';
  id: Scalars['Float'];
  name: Scalars['String'];
  variety: Scalars['String'];
  type: PlantType;
  seedSprouted: Scalars['String'];
  plantedOn: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

/** Plant type */
export enum PlantType {
  Default = 'DEFAULT',
  Tomato = 'TOMATO',
  Lettuce = 'LETTUCE',
  /** Carrot */
  Carrot = 'CARROT',
  Potato = 'POTATO',
  Pepper = 'PEPPER'
}

export type PlotEntity = {
  __typename?: 'PlotEntity';
  id: Scalars['Float'];
  size: Scalars['Float'];
  maxPlants: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlant: PlantEntity;
  deletePlant: Scalars['Boolean'];
  createPlot: PlotEntity;
  deletePlot: Scalars['Boolean'];
  plantsAmount: Scalars['Float'];
};


export type MutationCreatePlantArgs = {
  input: PlantInput;
};


export type MutationDeletePlantArgs = {
  id: Scalars['Float'];
};


export type MutationCreatePlotArgs = {
  input: PlotInput;
};


export type MutationDeletePlotArgs = {
  id: Scalars['Float'];
};


export type MutationPlantsAmountArgs = {
  id: Scalars['Float'];
};

export type PlantInput = {
  name: Scalars['String'];
  variety: Scalars['String'];
  type: PlantType;
  plot: Scalars['String'];
  /** Format: YEAR/MONTH/DAY */
  seedSprouted: Scalars['String'];
  /** Format: YEAR/MONTH/DAY */
  plantedOn: Scalars['String'];
};

export type PlotInput = {
  size: Scalars['Float'];
  maxPlants: Scalars['Float'];
};

export type CreatePlantMutationVariables = Exact<{
  input: PlantInput;
}>;


export type CreatePlantMutation = (
  { __typename?: 'Mutation' }
  & { createPlant: (
    { __typename?: 'PlantEntity' }
    & Pick<PlantEntity, 'name' | 'variety' | 'type' | 'seedSprouted' | 'plantedOn'>
  ) }
);

export type CreatePlotMutationVariables = Exact<{
  input: PlotInput;
}>;


export type CreatePlotMutation = (
  { __typename?: 'Mutation' }
  & { createPlot: (
    { __typename?: 'PlotEntity' }
    & Pick<PlotEntity, 'size' | 'maxPlants'>
  ) }
);


export const CreatePlantDocument = gql`
    mutation CreatePlant($input: PlantInput!) {
  createPlant(input: $input) {
    name
    variety
    type
    seedSprouted
    plantedOn
  }
}
    `;

export function useCreatePlantMutation() {
  return Urql.useMutation<CreatePlantMutation, CreatePlantMutationVariables>(CreatePlantDocument);
};
export const CreatePlotDocument = gql`
    mutation CreatePlot($input: PlotInput!) {
  createPlot(input: $input) {
    size
    maxPlants
  }
}
    `;

export function useCreatePlotMutation() {
  return Urql.useMutation<CreatePlotMutation, CreatePlotMutationVariables>(CreatePlotDocument);
};