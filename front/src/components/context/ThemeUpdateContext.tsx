/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext } from 'react';
import { DefaultTheme } from 'styled-components';

const ThemeUpdateContext = createContext((_theme: DefaultTheme) =>
  console.error('attempted to set theme outside of a ThemeUpdateContext.Provider'),
);

export const useUpdateTheme = (): ((_theme: DefaultTheme) => void) =>
  useContext(ThemeUpdateContext);
export default ThemeUpdateContext;
