import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext } from 'react';

type ContextProps = { client?: ApolloClient<NormalizedCacheObject> };
// const Context = createContext<{ client: ApolloClient<NormalizedCacheObject> }>({ client });

const Context = createContext<{ client?: ApolloClient<NormalizedCacheObject> }>({});
export default Context;
