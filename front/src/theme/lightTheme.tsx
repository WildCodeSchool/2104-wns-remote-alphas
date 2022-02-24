import defaultTheme from './darkTheme';
/**
 *
 * Define light theme data.
 *
 * */
const lightTheme: import('styled-components').DefaultTheme = {
  ...defaultTheme,
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
};

export default lightTheme;
