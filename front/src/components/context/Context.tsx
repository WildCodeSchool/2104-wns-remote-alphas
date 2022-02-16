import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from '../../utils/types';

interface Context {
	client: ApolloClient<NormalizedCacheObject>;
	isLogin: boolean;
	setIsLogin: Dispatch<SetStateAction<boolean>>;
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
}
const AppContext = createContext({} as Context);
export default AppContext;
