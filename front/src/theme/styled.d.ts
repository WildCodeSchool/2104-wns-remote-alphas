import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaterny: string;
      primaryLighter: string;
      secondaryLighter: string;
      textColor: string;
      altTextColor: string;
      opposite: string;
    };
    neumorphism: {
      boxShadow: string;
    };
    font: {
      fontSource: string;
      fontName: string;
      fontSize: string;
    };
    fontSize: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    padding: {
      xs: string;
      s: string;
      m: string;
      l: string;
    };
    margin: {
      navItems: string;
      mainTitle: string;
      mainCard: string;
      imageCard: string;
      nameOfInput: string;
      textMenuSettings: string;
      cardSettings: string;
      imageCourse: string;
      generic: {
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
      };
    };
    width: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    height: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    fixedSize: {
      logoProject: {
        width: string;
        height: string;
      };
      icon: {
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
      };
      avatar: string;
      toggleButton: string;
      boxShadow: string;
      borderRadius: string;
      button: {
        small: {
          height: string;
          width: string;
        };
      };
      field: {
        height: string;
      };
      footer: {
        height: string;
        width: string;
        padding: string;
      };
    };
    breakpoints: {
      xs: '350px';
      sm: '600px';
      md: '960px';
      lg: '1280px';
      xl: '1920px';
    };
  }
}
