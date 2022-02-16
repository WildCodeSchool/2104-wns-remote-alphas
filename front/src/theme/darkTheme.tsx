/**
 *
 * Define dark theme data.
 *
 *  **WARNING**
 *
 * This file is duplicated in lightTheme.
 * If anything is modified here, be sure to do the same modification in the
 * lightTheme or you will break theme switching.
 *
 * */
const darkTheme: import('styled-components').DefaultTheme = {
	// Theme specific values
	colors: {
		// Background Color
		primary: '#292929',
		// Highlight Color
		secondary: '#68D0FC',
		// Second highlight Color
		tertiary: '#FE7F2D',
		// Complementary Colors
		quaterny: '#FFFFFF',
		primaryLighter: '#D1DCE5',
		secondaryLighter: '#4E4E4E',
		// Text light for dark backgrounds
		textColor: '#E5E5E5',
		// Text dark for light backgrounds
		altTextColor: '#292929',
		// opposite to primary color
		opposite: '#ECEFF1',
	},
	neumorphism: {
		boxShadow: 'inset 8px 8px 8px #212121, inset -8px -8px 8px #313131',
	},
	// shared values between themes
	font: {
		fontName: 'Oxygen',
		fontWeight: 'normal',
	},
	fontSize: {
		xxs: '12px',
		xs: '18px',
		s: '20px',
		m: '30px',
		l: '46px',
		xl: '52px',
	},
	padding: {
		xs: '12px 15px 12px 15px',
		s: '35px 39px 40px 39px',
		m: '28px 42px 10px 42px',
		l: '61px 124px 87px 124px',
	},
	margin: {
		navItems: '0px 48px',
		mainTitle: '0px 0px 150px 94px',
		mainCard: '0px 32px',
		imageCard: '16px 0px 21px 0px',
		nameOfInput: '0px 0px 5px 0px',
		textMenuSettings: '0px 0px 0px 75px',
		cardSettings: 'auto',
		imageCourse: '31px 0px',
		generic: {
			small: '1em',
			medium: '2em',
			large: '3em',
			extraLarge: '5em',
		},
	},
	width: {
		xs: '139px',
		s: '370px',
		m: '1124px',
		l: '1300px',
		xl: '1440px',
	},
	height: {
		xs: '48px',
		s: '111px',
		m: '253px',
		l: '472px',
		xl: '1140px',
	},
	fixedSize: {
		logoProject: {
			width: '311px',
			height: '51px',
		},
		icon: {
			small: '10px',
			medium: '25px',
			large: '48px',
			extraLarge: '64px',
		},
		avatar: '110px',
		toggleButton: '64px',
		boxShadow: '19px 20px 11px 13px rgba(0,0,0,0.36)',
		borderRadius: '12px',
		button: {
			small: {
				height: '3em',
				width: '8em',
			},
		},
		field: {
			height: '2.5em',
		},
		footer: {
			height: '90px',
			width: 'calc(100% - 10rem)',
			padding: '5rem',
		},
	},
	breakpoints: {
		xs: '350px',
		sm: '600px',
		md: '960px',
		lg: '1280px',
		xl: '1920px',
	},
};

export default darkTheme;
