import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import CardCourses from './components/CardCourses';
import CardCoursesSecondary from './components/CardCoursesSecondary';
import darkTheme from './theme/darkTheme';

const AppContent = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

const CardContainer = styled.div`
  display: flex;
  padding: 50px 0px;
`;

function Home(): JSX.Element {
  return (
  <ThemeProvider theme={darkTheme}>
    <AppContent>
      <CardContainer>
        <CardCoursesSecondary title="MongoDB" image="assets/images/mongo.png" imageDescription="image video" course="back-end | MongoDB" />
        <CardCourses title="GraphQL API" image="assets/images/graphql.png" imageDescription="image video" course="front-end | GraphQL" />
        <CardCoursesSecondary title="Typescript" image="/assets/images/ts.png" imageDescription="image video" course="front-end | Typescript" />
      </CardContainer>
    </AppContent>
  </ThemeProvider>
  );
}

export default Home;
