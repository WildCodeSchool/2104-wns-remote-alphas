import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext, Dispatch, SetStateAction } from 'react';

export interface User {
	_id: string;
	name: string;
	firstName: string;
	email: string;
	role: string;
	location?: string;
}
interface Context {
	client: ApolloClient<NormalizedCacheObject>;
	isLogin: boolean;
	setIsLogin: Dispatch<SetStateAction<boolean>>;
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
}
const AppContext = createContext({} as Context);
export default AppContext;
