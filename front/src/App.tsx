import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header.styled';
import CardCourses from './CardCourses';
import CardCoursesSecondary from './CardCoursesSecondary';
import darkTheme from './theme/darkTheme';
import graphql from './graphql.png';

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
          <CardCoursesSecondary title="GraphQL API" image={graphql} imageDescription="image video" course="front-end | GraphQL" />
          <CardCourses title="GraphQL API" image={graphql} imageDescription="image video" course="front-end | GraphQL" />
          <CardCoursesSecondary title="GraphQL API" image={graphql} imageDescription="image video" course="front-end | GraphQL" />
        </CardContainer>
			</AppContent>

		</ThemeProvider>

	);
}

export default App;
