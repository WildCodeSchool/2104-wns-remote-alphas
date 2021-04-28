import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header.styled';
import CardCourses from './CardCourses';
import darkTheme from './theme/darkTheme';

function App(): JSX.Element {
	return (
		<ThemeProvider theme={darkTheme}>
			<div className="App">
				<Header />
				<CardCourses />
			</div>

		</ThemeProvider>

	);
}

export default App;
