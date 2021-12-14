import 'styled-components';

declare module 'styled-components' {
    export interface DarkTheme {
        colors: {
            primary: string,
            secondary: string,
        },
/*         font: {
            fontFamily: {
                Oxygen: string,
                OpenDyslexic: string
            },
            weight: {
                bold: string,
                normal: string
            }
        },
        fontSize: {
            xxs: string,
            xs: string,
            s: string,
            m: string,
            l: string,
            xl: string,
        }, */
    }
}
