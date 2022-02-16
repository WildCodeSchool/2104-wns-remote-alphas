/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
import { createContext, useContext } from 'react';
import { DefaultTheme } from 'styled-components';

const ThemeUpdateContext = createContext(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(_theme: DefaultTheme) =>
		console.error(
			'attempted to set theme outside of a ThemeUpdateContext.Provider'
		)
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUpdateTheme = () => useContext(ThemeUpdateContext);
export default ThemeUpdateContext;
