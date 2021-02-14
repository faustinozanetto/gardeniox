import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
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
  getUsers: Users;
  me?: Maybe<User>;
  plants: Array<Plant>;
  plant: Plant;
  plantDiseases: Array<Disease>;
  hasDisease: Scalars['Boolean'];
  plots: Array<Plot>;
  plot: Plot;
  getPlotPlants: Plant;
  diseases: Array<Disease>;
  disease: Disease;
};

export type QueryPlantArgs = {
  id: Scalars['Int'];
};

export type QueryPlantDiseasesArgs = {
  id: Scalars['Int'];
};

export type QueryHasDiseaseArgs = {
  name: Scalars['String'];
  id: Scalars['Float'];
};

export type QueryPlotArgs = {
  id: Scalars['Float'];
};

export type QueryGetPlotPlantsArgs = {
  id: Scalars['Float'];
};

export type QueryDiseaseArgs = {
  id: Scalars['Int'];
};

export type Users = {
  __typename?: 'Users';
  foundUsers: Array<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Plant = {
  __typename?: 'Plant';
  id: Scalars['Float'];
  name: Scalars['String'];
  scientificName: Scalars['String'];
  variety: Scalars['String'];
  type: PlantType;
  image: Scalars['String'];
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
  Pepper = 'PEPPER',
}

export type Disease = {
  __typename?: 'Disease';
  id: Scalars['Float'];
  name: Scalars['String'];
  information: Scalars['String'];
  image: Scalars['String'];
};

export type Plot = {
  __typename?: 'Plot';
  id: Scalars['Float'];
  size: Scalars['Float'];
  maxPlants: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createPlant: Plant;
  deletePlant: Scalars['Boolean'];
  addDisease: Disease;
  createPlot: Plot;
  deletePlot: Scalars['Boolean'];
  plantsAmount: Scalars['Float'];
  createDisease: Disease;
};

export type MutationRegisterArgs = {
  options: UserCredentialsInput;
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationCreatePlantArgs = {
  input: PlantInput;
};

export type MutationDeletePlantArgs = {
  id: Scalars['Float'];
};

export type MutationAddDiseaseArgs = {
  diseaseId: Scalars['Float'];
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

export type MutationCreateDiseaseArgs = {
  input: DiseaseInput;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
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

export type PlantInput = {
  name: Scalars['String'];
  scientificName: Scalars['String'];
  variety: Scalars['String'];
  type: PlantType;
  image: Scalars['String'];
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

export type DiseaseInput = {
  name: Scalars['String'];
  information: Scalars['String'];
  image: Scalars['String'];
};

export type NormalUserFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'username' | 'email'
>;

export type NormalUserResponseFragment = { __typename?: 'UserResponse' } & {
  errors?: Maybe<Array<{ __typename?: 'FieldError' } & NormalErrorFragment>>;
  user?: Maybe<{ __typename?: 'User' } & NormalUserFragment>;
};

export type NormalErrorFragment = { __typename?: 'FieldError' } & Pick<
  FieldError,
  'field' | 'message'
>;

export type CreatePlantMutationVariables = Exact<{
  input: PlantInput;
}>;

export type CreatePlantMutation = { __typename?: 'Mutation' } & {
  createPlant: { __typename?: 'Plant' } & Pick<
    Plant,
    'name' | 'variety' | 'type' | 'seedSprouted' | 'plantedOn'
  >;
};

export type CreatePlotMutationVariables = Exact<{
  input: PlotInput;
}>;

export type CreatePlotMutation = { __typename?: 'Mutation' } & {
  createPlot: { __typename?: 'Plot' } & Pick<Plot, 'size' | 'maxPlants'>;
};

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginUserMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'UserResponse' } & NormalUserResponseFragment;
};

export type UserLogoutMutationVariables = Exact<{ [key: string]: never }>;

export type UserLogoutMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'logout'
>;

export type RegisterUserMutationVariables = Exact<{
  options: UserCredentialsInput;
}>;

export type RegisterUserMutation = { __typename?: 'Mutation' } & {
  register: { __typename?: 'UserResponse' } & NormalUserResponseFragment;
};

export type DiseaseQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DiseaseQuery = { __typename?: 'Query' } & {
  disease: { __typename?: 'Disease' } & Pick<
    Disease,
    'id' | 'name' | 'information' | 'image'
  >;
};

export type PlantQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type PlantQuery = { __typename?: 'Query' } & {
  plant: { __typename?: 'Plant' } & Pick<
    Plant,
    | 'id'
    | 'name'
    | 'scientificName'
    | 'variety'
    | 'type'
    | 'image'
    | 'seedSprouted'
    | 'plantedOn'
  >;
};

export type PlantDiseasesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type PlantDiseasesQuery = { __typename?: 'Query' } & {
  plantDiseases: Array<
    { __typename?: 'Disease' } & Pick<
      Disease,
      'id' | 'name' | 'information' | 'image'
    >
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'User' } & NormalUserFragment>;
};

export const NormalErrorFragmentDoc = gql`
  fragment NormalError on FieldError {
    field
    message
  }
`;
export const NormalUserFragmentDoc = gql`
  fragment NormalUser on User {
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
  ${NormalUserFragmentDoc}
`;
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
  return Urql.useMutation<CreatePlantMutation, CreatePlantMutationVariables>(
    CreatePlantDocument
  );
}
export const CreatePlotDocument = gql`
  mutation CreatePlot($input: PlotInput!) {
    createPlot(input: $input) {
      size
      maxPlants
    }
  }
`;

export function useCreatePlotMutation() {
  return Urql.useMutation<CreatePlotMutation, CreatePlotMutationVariables>(
    CreatePlotDocument
  );
}
export const LoginUserDocument = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ...NormalUserResponse
    }
  }
  ${NormalUserResponseFragmentDoc}
`;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument
  );
}
export const UserLogoutDocument = gql`
  mutation UserLogout {
    logout
  }
`;

export function useUserLogoutMutation() {
  return Urql.useMutation<UserLogoutMutation, UserLogoutMutationVariables>(
    UserLogoutDocument
  );
}
export const RegisterUserDocument = gql`
  mutation RegisterUser($options: UserCredentialsInput!) {
    register(options: $options) {
      ...NormalUserResponse
    }
  }
  ${NormalUserResponseFragmentDoc}
`;

export function useRegisterUserMutation() {
  return Urql.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(
    RegisterUserDocument
  );
}
export const DiseaseDocument = gql`
  query Disease($id: Int!) {
    disease(id: $id) {
      id
      name
      information
      image
    }
  }
`;

export function useDiseaseQuery(
  options: Omit<Urql.UseQueryArgs<DiseaseQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<DiseaseQuery>({ query: DiseaseDocument, ...options });
}
export const PlantDocument = gql`
  query Plant($id: Int!) {
    plant(id: $id) {
      id
      name
      scientificName
      variety
      type
      image
      seedSprouted
      plantedOn
    }
  }
`;

export function usePlantQuery(
  options: Omit<Urql.UseQueryArgs<PlantQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<PlantQuery>({ query: PlantDocument, ...options });
}
export const PlantDiseasesDocument = gql`
  query plantDiseases($id: Int!) {
    plantDiseases(id: $id) {
      id
      name
      information
      image
    }
  }
`;

export function usePlantDiseasesQuery(
  options: Omit<Urql.UseQueryArgs<PlantDiseasesQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<PlantDiseasesQuery>({
    query: PlantDiseasesDocument,
    ...options,
  });
}
export const MeDocument = gql`
  query Me {
    me {
      ...NormalUser
    }
  }
  ${NormalUserFragmentDoc}
`;

export function useMeQuery(
  options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
