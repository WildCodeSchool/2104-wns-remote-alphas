/* eslint-disable operator-linebreak */
import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import CardCoursesSecondary from './timeline/CardCoursesSecondary';
import { GET_COURSES } from '../utils/apollo';
import { CourseType } from '../utils/types';
import Loader from './core/Loader.styled';
import Error from './core/Error.styled';
// import CourseIcon from './assets/icons/CourseIcon';

/**
 * Homepage view, displayed when a user is connected
 */

const AppContent = styled.main`
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	@media screen and (max-width: 780px) {
		padding: 4%;
	}
`;

const CardContainer = styled.section`
	width: 100%;
	height: calc(100vh - 113px - 105px);
	display: flex;
	flex-wrap: wrap;
	gap: 2em;
	@media screen and (max-width: 780px) {
		height: inherit;
	}
	article:nth-child(2) {
		div {
			width: 350px;
		}
		img {
			width: 100%;
		}
	}
`;

function Home(): JSX.Element {
	const { loading, error, data } =
		useQuery<{ getCourses: CourseType[] }>(GET_COURSES);

	return (
		<AppContent id="main-content">
			{loading && <Loader />}
			{error && <Error />}
			{data?.getCourses && (
				<CardContainer>
					{data.getCourses.slice(-3).map((course) => (
						<CardCoursesSecondary
							key={course._id}
							id={course._id}
							title={course.courseName}
							image={course.image_url}
							imageDescription="image video"
							techno1={course.technos[0]}
							techno2={course.technos[1]}
						/>
					))}
				</CardContainer>
			)}
		</AppContent>
	);
}

export default Home;
