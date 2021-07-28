import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Chrono } from 'react-chrono';
import styled from 'styled-components';
import convertDate from '../utils/convertDate';
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
};

export const GET_COURSES_QUERY = gql`
	query {
		getCourses {
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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<TimelineContent data-testid="timeline">
			<Chrono
				items={data.getCourses.map((course: CourseType) => ({
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
			/>
		</TimelineContent>
	);
}
