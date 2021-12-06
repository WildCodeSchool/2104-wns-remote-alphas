/**
 *
 * Define light theme data.
 *
 *  **WARNING**
 *
 * This file is duplicated in darkTheme.
 * If anything is modified here, be sure to do the same modification in the
 * darkTheme or you will break theme switching.
 *
 * */
const lightTheme: import('styled-components').DefaultTheme = {
    // Theme specific values
    colors: {
        // Background Color
        primary: '#ECEFF1',
        // Highlight Color
        secondary: '#68D0FC',
        // Second highlight Color
        tertiary: '#FE7F2D',
        // Complementary Colors
        quaterny: '#FFFFFF',
        primaryLighter: '#D1DCE5',
        secondaryLighter: '#B3E7FD',
        // Text dark for light backgrounds
        textColor: '#292929',
        // Text light for dark backgrounds
        altTextColor: '#E5E5E5',
        // opposite to primary color
        opposite: '#292929',
    },
    neumorphism: {
        boxShadow: 'inset 8px 8px 8px #bfc2c3, inset -8px -8px 8px #ffffff',
    },
    // shared values between themes
    font: {
        fontSource: 'https://fonts.googleapis.com/css2?family=Oxygen&display=swap',
        fontName: "'Oxygen'",
        fontSize: '12px',
    },
    fontSize: {
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
        }
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
            extraLarge: '64px'
        },
        avatar: '110px',
        toggleButton: '64px',
        boxShadow: '19px 20px 11px 13px rgba(0,0,0,0.36)',
        borderRadius: '12px',
        button: {
            small: {
                height: '3em',
                width: '8em'
            }
        },
        field: {
            height: '2.5em',
        },
        footer: {
            height: '90px',
            width: 'calc(100% - 10rem)',
            padding: '5rem'
        }
    },
};

export default lightTheme;
