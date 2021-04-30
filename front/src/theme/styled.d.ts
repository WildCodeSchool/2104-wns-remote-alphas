import 'styled-components';

declare module 'styled-components' {
    export interface DarkTheme {
        colors: {
            primary: string,
            secondary: string,
        },
    }
}
