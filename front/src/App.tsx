import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header.styled';
import CardCourses from './CardCourses';
import CardCoursesSecondary from './CardCoursesSecondary';
import darkTheme from './theme/darkTheme';
import graphql from './graphql.png';
import mongo from './mongo.png';
import ts from './ts.png';

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
          <CardCoursesSecondary title="MongoDB" image={mongo} imageDescription="image video" course="back-end | MongoDB" />
          <CardCourses title="GraphQL API" image={graphql} imageDescription="image video" course="front-end | GraphQL" />
          <CardCoursesSecondary title="Typescript" image={ts} imageDescription="image video" course="front-end | Typescript" />
        </CardContainer>
			</AppContent>

		</ThemeProvider>

	);
}

export default App;
