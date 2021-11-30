import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

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
			description
			technos
			courseName
			image_url
			postedAt
			_id
		}
	}
`;

function ListCoursesback(): JSX.Element {
	const { loading, error, data } = useQuery(GET_COURSES_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log(data.getCourses);

	return (
		<table>
			<thead>
				<tr>
					<th colSpan={2}>Ma Liste</th>
				</tr>
			</thead>

			{data.getCourses.map((item: CourseType) => (
				<tbody
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						width: '100%',
					}}>
					<tr>
						<h2>{item.courseName}</h2>
					</tr>
					<tr>
						<h4>{item.technos}</h4>
					</tr>
					<tr>Delete</tr>
				</tbody>
			))}
		</table>

		// <div
		// 	style={{
		// 		display: 'flex',
		// 		flexDirection: 'column',
		// 		// justifyContent: 'space-evenly',
		// 	}}>
		// 	{data.getCourses.map((item: CourseType) => (
		// 		// eslint-disable-next-line no-underscore-dangle
		// 		<div
		// 			style={{
		// 				backgroundColor: 'transparent',
		// 				display: 'flex',
		// 				justifyContent: 'space-evenly',
		// 			}}
		// 			// eslint-disable-next-line no-underscore-dangle
		// 			key={item._id}>
		// 			<h2>{item.courseName}</h2>
		// 			<div
		// 				style={{
		// 					display: 'flex',
		// 					justifyContent: 'center',
		// 					alignItems: 'center',
		// 					gap: '1rem',
		// 				}}>
		// 				{item.technos.map((elem: string, index) => (
		// 					// eslint-disable-next-line react/no-array-index-key
		// 					<h4 key={index}>{elem}</h4>
		// 				))}
		// 			</div>
		// 		</div>
		// 	))}
		// </div>
	);
}

export default ListCoursesback;
