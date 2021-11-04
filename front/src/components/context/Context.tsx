import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext, Dispatch, SetStateAction } from 'react';

const Context = createContext<{
	client?: ApolloClient<NormalizedCacheObject>;
	isLogin?: boolean;
	setIsLogin?: Dispatch<SetStateAction<boolean>>;
}>({});
export default Context;
