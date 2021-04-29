import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header.styled';
import CardCourses from './CardCourses';
import CardCoursesSecondary from './CardCoursesSecondary';
import darkTheme from './theme/darkTheme';

const AppContent = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

const CardContainer = styled.div`
  display: flex;
  padding: 50px 0px;
`;

function App(): JSX.Element {
	return (
		<ThemeProvider theme={darkTheme}>
			<AppContent className="App">
				<Header />
        <CardContainer>
          <CardCoursesSecondary />
          <CardCourses />
          <CardCoursesSecondary />
        </CardContainer>
			</AppContent>

		</ThemeProvider>

	);
}

export default App;
