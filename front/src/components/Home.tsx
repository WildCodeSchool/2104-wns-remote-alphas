import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import CardCoursesSecondary from './timeline/CardCoursesSecondary';
import { GET_COURSES } from '../utils/apollo';

export type CourseType = {
	_id: string;
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
};

const AppContent = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
`;

const CardContainer = styled.div`
	display: flex;
	padding: 50px 0px;
`;

function Home(): JSX.Element {
	const { loading, error, data } = useQuery(GET_COURSES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	return (
		<AppContent>
			<CardContainer>
				{data.getCourses.slice(-3).map((course: CourseType) => (
					<CardCoursesSecondary
						key={course._id}
						title={course.courseName}
						image={course.image_url}
						imageDescription="image video"
						course={course.technos[0]}
					/>
				))}
			</CardContainer>
		</AppContent>
	);
}

export default Home;
