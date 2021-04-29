import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Chrono } from 'react-chrono';
import styled from 'styled-components';
import fakeData from '../fakeData';

const TimelineContent = styled.div`
	width: 100%;
	height: 70vh;
	background-color: #292929;
`;
// APPEL API GRAPHQL

function Timeline(): JSX.Element {
	const { loading, error, data } = useQuery(gql`
		query {
			getCourses {
				description
				technos
				courseName
				image_url
			}
		}
	`);
	if (data) console.log(data);

	return (
		<TimelineContent>
			<Chrono
				items={fakeData}
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

export default Timeline;
