import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header.styled';
import CardCourses from './CardCourses';
import darkTheme from './theme/darkTheme';

const AppContent = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

function App(): JSX.Element {
	return (
		<ThemeProvider theme={darkTheme}>
			<AppContent className="App">
				<Header />
				<CardCourses />
			</AppContent>

		</ThemeProvider>

	);
}

export default App;
