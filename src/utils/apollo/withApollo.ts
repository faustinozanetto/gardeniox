import { createWithApollo } from './createWithApollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import { PaginatedPlants } from '../../generated/graphql';

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://gardeniox-server.herokuapp.com/graphql'
        : 'http://localhost:4000/graphql',
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            plants: {
              keyArgs: [],
              merge(
                existing: PaginatedPlants | undefined,
                incoming: PaginatedPlants
              ): PaginatedPlants {
                return {
                  ...incoming,
                  plants: [...(existing?.plants || []), ...incoming.plants],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(createClient);
