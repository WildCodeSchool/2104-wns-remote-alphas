import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext, Dispatch, SetStateAction } from 'react';

export interface Colors {
	theme: 'dark' | 'light' | 'greyscale' | 'highcontrast';
	customColors: string[];
}

export interface Texts {
	font: string;
	fontWeight: number;
	fontTheme: number;
}

export interface Distraction {
	distractionTheme: string;
	textNotifications: boolean;
	soundNotifications: boolean;
	animations: boolean;
	readingMode: boolean;
	showTimelineCards: boolean;
	allowDialogs: boolean;
}

export interface Global {
	shortcuts: string[];
}

export interface Settings {
	instantChat: boolean;
	pandaTips: boolean;
	colors: Colors;
	texts: Texts;
	distraction: Distraction;
	global: Global;
}

export interface User {
	_id: string;
	name: string;
	firstName: string;
	email: string;
	role: string;
	location?: string;
	settings?: Settings;
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
