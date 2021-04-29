const darkTheme: import('styled-components').DefaultTheme = {
   colors: {
    primary: '#292929',
    secondary: '#68D0FC',
    tertiary: '#FE7F2D',
    quaterny: '#FFFFFF',
    primaryLighter: '#D1DCE5',
    secondaryLighter: '#4E4E4E',
    bgLight: '#ECEFF1',
   },
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
   },
   width: {
    xs: '139px',
    s: '370px',
    m: '1124px',
    l: 'px',
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
     icon: '10px',
     settingsIcons: '64px',
     avatar: '110px',
     toggleButton: '64px',
     boxShadow: '19px 20px 11px 13px rgba(0,0,0,0.36)',
     borderRadius: '12px',
   },
};

export default darkTheme;
