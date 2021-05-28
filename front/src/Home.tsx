import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styled, { ThemeProvider } from 'styled-components';
import CardCourses from './components/CardCourses';
import CardCoursesSecondary from './components/CardCoursesSecondary';
import darkTheme from './theme/darkTheme';

export type CourseType = {
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
};

export const GET_COURSES_QUERY = gql`
	query {
		getCourses {
			description
			technos
			courseName
			image_url
		}
	}
`;

const AppContent = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

const CardContainer = styled.div`
  display: flex;
  padding: 50px 0px;
`;

function Home(): JSX.Element {
  const { loading, error, data } = useQuery(GET_COURSES_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
  return (
  <ThemeProvider theme={darkTheme}>
    <AppContent>
      <CardContainer>
        {data.getCourses.map((course: CourseType) => (
          <CardCoursesSecondary title={course.courseName} image={course.image_url} imageDescription="image video" course={course.technos[0]} />
          ))}
          <CardCourses title="GraphQL API" image="assets/images/graphql.png" imageDescription="image video" course="front-end | GraphQL" />
          <CardCoursesSecondary title="Typescript" image="/assets/images/ts.png" imageDescription="image video" course="front-end | Typescript" />
      </CardContainer>
    </AppContent>
  </ThemeProvider>
  );
}

export default Home;
