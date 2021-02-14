import { dedupExchange, fetchExchange } from 'urql';
import { isServer } from './index';

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = '';
  if (isServer()) {
    cookie = ctx?.req?.headers?.cookie;
  }

  return {
    url:
      process.env.NODE_ENV === 'production'
        ? 'https://gardeniox-server.herokuapp.com'
        : 'http://localhost:4000/graphql',
    fetchOptions: {
      credentials: 'include' as const,
      headers: cookie ? { cookie } : undefined,
    },
    exchanges: [dedupExchange, ssrExchange, fetchExchange],
  };
};
