import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Chrono } from 'react-chrono';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import convertDate from '../utils/convertDate';
import ErrorMessage from './ErrorMessage';
// import fakeData from '../fakeData';

const TimelineContent = styled.div`
	width: 100%;
	height: 70vh;
	background-color: #292929;
`;
// APPEL API GRAPHQL
export type CourseType = {
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
	postedAt?: string;
	_id: string;
};

export const GET_COURSES_QUERY = gql`
	query {
		getCourses {
			_id
			description
			technos
			courseName
			image_url
			postedAt
		}
	}
`;

export function Timeline(): JSX.Element {
	const { loading, error, data } = useQuery(GET_COURSES_QUERY);
	const history = useHistory();
	console.log(data);

	if (loading) return <p>Loading...</p>;
	if (error) {
		return <ErrorMessage>Error while trying to fetch courses</ErrorMessage>;
	}
	return (
		<TimelineContent data-testid="timeline">
			<Chrono
				items={data.getCourses.map((course: CourseType, index: number) => ({
					key: index,
					title: course.postedAt
						? convertDate(course.postedAt, 'fr')
						: 'No date available',
					cardTitle: course.courseName,
					cardDetailedText: course.description,
					media: {
						source: {
							url: course.image_url,
						},
						type: 'IMAGE',
						name: 'test image',
					},
				}))}
				mode="HORIZONTAL"
				slideShow
				itemWidth={500}
				theme={{
					primary: '#68d0fc',
					secondary: 'white',
					cardBgColor: 'grey',
					cardForeColor: 'white',
				}}
			>
			{data.getCourses.map((course: CourseType, index: number) => (
				<button
					type="button"
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					// eslint-disable-next-line no-underscore-dangle
					onClick={() => { history.push(`/courses/${course._id}`); }}>
						See course
						<span role="img" aria-label="Books">📚</span>
    </button>
				))}
   </Chrono>
		</TimelineContent>
	);
}
