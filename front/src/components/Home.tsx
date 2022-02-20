/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CardCoursesSecondary from './timeline/CardCoursesSecondary';
import { GET_COURSES } from '../utils/apollo';
import { CourseType } from '../utils/types';
import Loader from './core/Loader.styled';
import Error from './core/Error.styled';
import Row from './core/layout_parts/Row.styled';
import TextButton from './core/buttons/TextButton.styled';
// import CourseIcon from './assets/icons/CourseIcon';

/**
 * Homepage view, displayed when a user is connected
 */

const Title = styled.h1`
	color: ${(props) => props.theme.colors.opposite};
	font-size: ${(props) => props.theme.fontSize.l};
	margin-top: .5em;
	margin-bottom: 1em;
	margin-left: 1em;
	width: 80%;
	display: none;
	@media screen and (min-width: 780px) {
		display: block;
	}
`;

const Content = styled.main`
	background-color: ${(props) => props.theme.colors.primary};
	width: 100vw;
	display: flex;
	flex-wrap: wrap;
	gap: 2em;
	@media screen and (max-width: 780px) {
		height: inherit;
	}
	article:nth-child(2) {
		width: 30%;
		height: 100%;
		img {
			width: 72%;
		}
		h2 {
			font-size: 40px;
		}
	}
`;

const Column = styled.div<{ alignItems?: string, gap?: number }>`
    display: flex;
    flex-direction: column;
	width: 100%;
	height: calc(100vh - 113px - 105px);
    margin: 0;
    gap: ${(props) => props.gap} ? ${(props) => props.gap} : ${({ theme }) => theme.margin.generic.small};
    align-items: ${(props) => props.alignItems} ? ${(props) => props.alignItems} : '';
`;

function Home(): JSX.Element {
	const { loading, error, data } =
		useQuery<{ getCourses: CourseType[] }>(GET_COURSES);

	const history = useHistory();

	return (
		<Column id="main-content">
			{loading && <Loader />}
			{error && <Error />}
			{data?.getCourses && (
				<>
					<Row>
						<Title>Last Courses...</Title>
						<TextButton
						accent
						onClick={() => history.push('/courses')}
						>
							View timeline
							&nbsp;
							{'=>'}
						</TextButton>
					</Row>
					<Content>
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
					</Content>
				</>)}
		</Column>
	);
}

export default Home;
