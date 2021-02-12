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
  me?: Maybe<UserEntity>;
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

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
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
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
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


export type MutationRegisterArgs = {
  options: UserCredentialsInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
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

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<UserEntity>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserCredentialsInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type NormalUserFragment = (
  { __typename?: 'UserEntity' }
  & Pick<UserEntity, 'id' | 'username' | 'email'>
);

export type NormalUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & NormalErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'UserEntity' }
    & NormalUserFragment
  )> }
);

export type NormalErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

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

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & NormalUserResponseFragment
  ) }
);

export type UserLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type UserLogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterUserMutationVariables = Exact<{
  options: UserCredentialsInput;
}>;


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & NormalUserResponseFragment
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserEntity' }
    & NormalUserFragment
  )> }
);

export const NormalErrorFragmentDoc = gql`
    fragment NormalError on FieldError {
  field
  message
}
    `;
export const NormalUserFragmentDoc = gql`
    fragment NormalUser on UserEntity {
  id
  username
  email
}
    `;
export const NormalUserResponseFragmentDoc = gql`
    fragment NormalUserResponse on UserResponse {
  errors {
    ...NormalError
  }
  user {
    ...NormalUser
  }
}
    ${NormalErrorFragmentDoc}
${NormalUserFragmentDoc}`;
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
export const LoginUserDocument = gql`
    mutation LoginUser($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...NormalUserResponse
  }
}
    ${NormalUserResponseFragmentDoc}`;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
};
export const UserLogoutDocument = gql`
    mutation UserLogout {
  logout
}
    `;

export function useUserLogoutMutation() {
  return Urql.useMutation<UserLogoutMutation, UserLogoutMutationVariables>(UserLogoutDocument);
};
export const RegisterUserDocument = gql`
    mutation RegisterUser($options: UserCredentialsInput!) {
  register(options: $options) {
    ...NormalUserResponse
  }
}
    ${NormalUserResponseFragmentDoc}`;

export function useRegisterUserMutation() {
  return Urql.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...NormalUser
  }
}
    ${NormalUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};