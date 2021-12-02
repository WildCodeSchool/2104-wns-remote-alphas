import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import CardCoursesSecondary from './timeline/CardCoursesSecondary';
import { GET_COURSES } from '../utils/apollo';
import Loader from './core/Loader.styled';
import Error from './core/Error.styled';

export type CourseType = {
	_id: string;
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
};

const AppContent = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
`;

const CardContainer = styled.div`
	width: 100%;
	padding: 50px 0px;
	display: flex;
	flex-wrap: wrap;
	margin: 2em;
	gap: 2em;
`;

function Home(): JSX.Element {
	const { loading, error, data } = useQuery(GET_COURSES);

	return (
		<AppContent>
			{loading && <Loader />}
			{error && <Error />}
			{!loading && (
				<CardContainer>
					{data.getCourses.slice(-3).map((course: CourseType) => (
						<CardCoursesSecondary
							key={course._id}
							id={course._id}
							title={course.courseName}
							image={course.image_url}
							imageDescription="image video"
							course={course.technos[0]}
						/>
					))}
				</CardContainer>
			)}
		</AppContent>
	);
}

export default Home;
