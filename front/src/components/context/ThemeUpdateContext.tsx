/* eslint-disable no-console */
import { createContext, useContext } from 'react';
import { DarkTheme } from 'styled-components';

const ThemeUpdateContext = createContext(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_theme: DarkTheme) => console.error('attempted to set theme outside of a ThemeUpdateContext.Provider')
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUpdateTheme = () => useContext(ThemeUpdateContext);
export default ThemeUpdateContext;
