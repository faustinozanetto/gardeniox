import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  plants: PaginatedPlants;
  plant: Plant;
  plantDiseases: Array<Disease>;
  hasDisease: Scalars['Boolean'];
  plots: Array<Plot>;
  plot: Plot;
  getPlotPlants: Plant;
  diseases: Array<Disease>;
  disease: Disease;
};


export type QueryPlantsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryPlantArgs = {
  id: Scalars['Int'];
};


export type QueryPlantDiseasesArgs = {
  id: Scalars['Int'];
};


export type QueryHasDiseaseArgs = {
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type QueryPlotArgs = {
  id: Scalars['Int'];
};


export type QueryGetPlotPlantsArgs = {
  id: Scalars['Int'];
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

export type PaginatedPlants = {
  __typename?: 'PaginatedPlants';
  plants: Array<Plant>;
  hasMore: Scalars['Boolean'];
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
  Carrot = 'CARROT',
  Potato = 'POTATO',
  Pepper = 'PEPPER'
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
  id: Scalars['Int'];
};


export type MutationAddDiseaseArgs = {
  diseaseId: Scalars['Int'];
  id: Scalars['Int'];
};


export type MutationCreatePlotArgs = {
  input: PlotInput;
};


export type MutationDeletePlotArgs = {
  id: Scalars['Int'];
};


export type MutationPlantsAmountArgs = {
  id: Scalars['Int'];
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
  size: Scalars['Int'];
  maxPlants: Scalars['Int'];
};

export type DiseaseInput = {
  name: Scalars['String'];
  information: Scalars['String'];
  image: Scalars['String'];
};

export type PlantSnippetFragment = (
  { __typename?: 'Plant' }
  & Pick<Plant, 'id' | 'name' | 'scientificName' | 'variety' | 'type' | 'image' | 'seedSprouted' | 'plantedOn' | 'createdAt' | 'updatedAt'>
);

export type NormalUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email'>
);

export type NormalUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & NormalErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
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
    { __typename?: 'Plant' }
    & Pick<Plant, 'name' | 'variety' | 'type' | 'seedSprouted' | 'plantedOn'>
  ) }
);

export type CreatePlotMutationVariables = Exact<{
  input: PlotInput;
}>;


export type CreatePlotMutation = (
  { __typename?: 'Mutation' }
  & { createPlot: (
    { __typename?: 'Plot' }
    & Pick<Plot, 'size' | 'maxPlants'>
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & NormalUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UserCredentialsInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & NormalUserResponseFragment
  ) }
);

export type DiseaseQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DiseaseQuery = (
  { __typename?: 'Query' }
  & { disease: (
    { __typename?: 'Disease' }
    & Pick<Disease, 'id' | 'name' | 'information' | 'image'>
  ) }
);

export type PlantQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PlantQuery = (
  { __typename?: 'Query' }
  & { plant: (
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name' | 'scientificName' | 'variety' | 'type' | 'image' | 'seedSprouted' | 'plantedOn' | 'createdAt' | 'updatedAt'>
  ) }
);

export type PlantDiseasesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PlantDiseasesQuery = (
  { __typename?: 'Query' }
  & { plantDiseases: Array<(
    { __typename?: 'Disease' }
    & Pick<Disease, 'id' | 'name' | 'information' | 'image'>
  )> }
);

export type PlantsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type PlantsQuery = (
  { __typename?: 'Query' }
  & { plants: (
    { __typename?: 'PaginatedPlants' }
    & Pick<PaginatedPlants, 'hasMore'>
    & { plants: Array<(
      { __typename?: 'Plant' }
      & PlantSnippetFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & NormalUserFragment
  )> }
);

export const PlantSnippetFragmentDoc = gql`
    fragment PlantSnippet on Plant {
  id
  name
  scientificName
  variety
  type
  image
  seedSprouted
  plantedOn
  createdAt
  updatedAt
}
    `;
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
export type CreatePlantMutationFn = Apollo.MutationFunction<CreatePlantMutation, CreatePlantMutationVariables>;

/**
 * __useCreatePlantMutation__
 *
 * To run a mutation, you first call `useCreatePlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlantMutation, { data, loading, error }] = useCreatePlantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlantMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlantMutation, CreatePlantMutationVariables>) {
        return Apollo.useMutation<CreatePlantMutation, CreatePlantMutationVariables>(CreatePlantDocument, baseOptions);
      }
export type CreatePlantMutationHookResult = ReturnType<typeof useCreatePlantMutation>;
export type CreatePlantMutationResult = Apollo.MutationResult<CreatePlantMutation>;
export type CreatePlantMutationOptions = Apollo.BaseMutationOptions<CreatePlantMutation, CreatePlantMutationVariables>;
export const CreatePlotDocument = gql`
    mutation CreatePlot($input: PlotInput!) {
  createPlot(input: $input) {
    size
    maxPlants
  }
}
    `;
export type CreatePlotMutationFn = Apollo.MutationFunction<CreatePlotMutation, CreatePlotMutationVariables>;

/**
 * __useCreatePlotMutation__
 *
 * To run a mutation, you first call `useCreatePlotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlotMutation, { data, loading, error }] = useCreatePlotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlotMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlotMutation, CreatePlotMutationVariables>) {
        return Apollo.useMutation<CreatePlotMutation, CreatePlotMutationVariables>(CreatePlotDocument, baseOptions);
      }
export type CreatePlotMutationHookResult = ReturnType<typeof useCreatePlotMutation>;
export type CreatePlotMutationResult = Apollo.MutationResult<CreatePlotMutation>;
export type CreatePlotMutationOptions = Apollo.BaseMutationOptions<CreatePlotMutation, CreatePlotMutationVariables>;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...NormalUserResponse
  }
}
    ${NormalUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($options: UserCredentialsInput!) {
  register(options: $options) {
    ...NormalUserResponse
  }
}
    ${NormalUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
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

/**
 * __useDiseaseQuery__
 *
 * To run a query within a React component, call `useDiseaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiseaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiseaseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDiseaseQuery(baseOptions: Apollo.QueryHookOptions<DiseaseQuery, DiseaseQueryVariables>) {
        return Apollo.useQuery<DiseaseQuery, DiseaseQueryVariables>(DiseaseDocument, baseOptions);
      }
export function useDiseaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiseaseQuery, DiseaseQueryVariables>) {
          return Apollo.useLazyQuery<DiseaseQuery, DiseaseQueryVariables>(DiseaseDocument, baseOptions);
        }
export type DiseaseQueryHookResult = ReturnType<typeof useDiseaseQuery>;
export type DiseaseLazyQueryHookResult = ReturnType<typeof useDiseaseLazyQuery>;
export type DiseaseQueryResult = Apollo.QueryResult<DiseaseQuery, DiseaseQueryVariables>;
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
    createdAt
    updatedAt
  }
}
    `;

/**
 * __usePlantQuery__
 *
 * To run a query within a React component, call `usePlantQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlantQuery(baseOptions: Apollo.QueryHookOptions<PlantQuery, PlantQueryVariables>) {
        return Apollo.useQuery<PlantQuery, PlantQueryVariables>(PlantDocument, baseOptions);
      }
export function usePlantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlantQuery, PlantQueryVariables>) {
          return Apollo.useLazyQuery<PlantQuery, PlantQueryVariables>(PlantDocument, baseOptions);
        }
export type PlantQueryHookResult = ReturnType<typeof usePlantQuery>;
export type PlantLazyQueryHookResult = ReturnType<typeof usePlantLazyQuery>;
export type PlantQueryResult = Apollo.QueryResult<PlantQuery, PlantQueryVariables>;
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

/**
 * __usePlantDiseasesQuery__
 *
 * To run a query within a React component, call `usePlantDiseasesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlantDiseasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlantDiseasesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlantDiseasesQuery(baseOptions: Apollo.QueryHookOptions<PlantDiseasesQuery, PlantDiseasesQueryVariables>) {
        return Apollo.useQuery<PlantDiseasesQuery, PlantDiseasesQueryVariables>(PlantDiseasesDocument, baseOptions);
      }
export function usePlantDiseasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlantDiseasesQuery, PlantDiseasesQueryVariables>) {
          return Apollo.useLazyQuery<PlantDiseasesQuery, PlantDiseasesQueryVariables>(PlantDiseasesDocument, baseOptions);
        }
export type PlantDiseasesQueryHookResult = ReturnType<typeof usePlantDiseasesQuery>;
export type PlantDiseasesLazyQueryHookResult = ReturnType<typeof usePlantDiseasesLazyQuery>;
export type PlantDiseasesQueryResult = Apollo.QueryResult<PlantDiseasesQuery, PlantDiseasesQueryVariables>;
export const PlantsDocument = gql`
    query Plants($limit: Int!, $cursor: String) {
  plants(limit: $limit, cursor: $cursor) {
    hasMore
    plants {
      ...PlantSnippet
    }
  }
}
    ${PlantSnippetFragmentDoc}`;

/**
 * __usePlantsQuery__
 *
 * To run a query within a React component, call `usePlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlantsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function usePlantsQuery(baseOptions: Apollo.QueryHookOptions<PlantsQuery, PlantsQueryVariables>) {
        return Apollo.useQuery<PlantsQuery, PlantsQueryVariables>(PlantsDocument, baseOptions);
      }
export function usePlantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlantsQuery, PlantsQueryVariables>) {
          return Apollo.useLazyQuery<PlantsQuery, PlantsQueryVariables>(PlantsDocument, baseOptions);
        }
export type PlantsQueryHookResult = ReturnType<typeof usePlantsQuery>;
export type PlantsLazyQueryHookResult = ReturnType<typeof usePlantsLazyQuery>;
export type PlantsQueryResult = Apollo.QueryResult<PlantsQuery, PlantsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...NormalUser
  }
}
    ${NormalUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;