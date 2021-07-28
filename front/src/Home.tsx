/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styled, { ThemeProvider } from 'styled-components';
import CardCourses from './components/CardCourses';
import TestCarousel from './Glide';
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
    {' '}
    <AppContent>
       <CardContainer>
{/*         {data.getCourses.map((course: CourseType) => (
          <CardCoursesSecondary
          title={course.courseName}
          image={course.image_url}
          imageDescription="image video"
          course={course.technos[0]}
          />
          ))} */}
       </CardContainer>
         {/*  <CardCourses title="GraphQL API" image="assets/images/graphql.png"
          imageDescription="image video" course="front-end | GraphQL" />
          <CardCoursesSecondary title="Typescript" image="/assets/images/ts.png"
           imageDescription="image video" course="front-end | Typescript" /> */}

      <TestCarousel />
    </AppContent>
  </ThemeProvider>
  );
}

export default Home;
