export interface CourseType {
	_id: string;
	postedAt: string;
	courseName: string;
	image_url: string;
	description: string;
	technos: string[];
}

export interface ColorsType {
	theme: COLORTHEMES;
	customColors: string[];
}

export interface TextsType {
	font: string;
	fontWeight: number;
	fontTheme: number;
}

export interface DistractionType {
	distractionTheme: string;
	textNotifications: boolean;
	soundNotifications: boolean;
	animations: boolean;
	readingMode: boolean;
	showTimelineCards: boolean;
	allowDialogs: boolean;
}

export interface GlobalType {
	shortcuts: string[];
}

export interface Settings {
	instantChat: boolean;
	pandaTips: boolean;
	colors: ColorsType;
	texts: TextsType;
	distraction: DistractionType;
	global: GlobalType;
}

export enum ROLES {
	STUDENT = 'student',
	ADMIN = 'admin',
	TEACHER = 'teacher',
}

export enum SECTIONS {
	PROFILE = 'profile',
	COLORS = 'colors',
	TEXTS = 'texts',
	DISTRACTIONS = 'distractions',
	SETTINGS = 'settings',
}

export enum COLORS {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	TERTIARY = 'tertiary',
	LIGHTER_SECONDARY = 'lighterSecondary',
	LIGHT_BACKGROUND = 'lightBackground',
	LIGHT_TEXT = 'lightText',
}

export enum COLORTHEMES {
	DARK = 'dark',
	LIGHT = 'light',
	GREYSCALE = 'greyscale',
	HIGH_CONTRAST = 'high contrast',
}

export interface User {
	_id: string;
	name: string;
	firstName: string;
	email: string;
	role: ROLES;
	location?: string;
	settings?: Settings;
}

export interface MessageType {
	_id: string;
	text: string;
	author: User;
	sentAt: Date;
}
