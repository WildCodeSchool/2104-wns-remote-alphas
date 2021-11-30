/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';

// APPEL API GRAPHQL
export type CourseType = {
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
	postedAt?: string;
	_id: string;
};

interface Iprops {
	courses: CourseType[];
}
function ListCoursesback({ courses }: Iprops): JSX.Element {
	return (
		<table style={{ width: '100%' }}>
			<thead>
				<tr>
					<th colSpan={3}>Ma Liste</th>
				</tr>
			</thead>

			{courses.map((item) => (
				<tbody
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}>
					<tr>
						<h2 style={{ color: 'white' }}>{item.courseName}</h2>
					</tr>
					<tr>
						<h4 style={{ color: 'white' }}>{item.technos}</h4>
					</tr>
					<tr>
						<button style={{ backgroundColor: 'grey', cursor: 'pointer' }}>
							Delete
						</button>
					</tr>
				</tbody>
			))}
		</table>
	);
}

export default ListCoursesback;
