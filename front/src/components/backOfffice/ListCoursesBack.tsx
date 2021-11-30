/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import convertDate from '../../utils/convertDate';

// APPEL API GRAPHQL
export type CourseType = {
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
	postedAt?: any;
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
					<th colSpan={3}> </th>
				</tr>
			</thead>

			{courses
				.sort((a, b) => +new Date(b.postedAt) - +new Date(a.postedAt))
				.map((item) => (
					<tbody
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '90%',
							backgroundColor: 'black',
							margin: 'auto',
							border: '1px solid white',
							padding: '1rem',
						}}>
						<tr>
							<h2 style={{ color: 'white' }}>{item.courseName}</h2>
						</tr>
						<tr>
							<h4 style={{ color: 'white' }}>{item.technos}</h4>
						</tr>
						<tr style={{ color: 'white' }}>
							{item.postedAt ? convertDate(item.postedAt, 'fr') : undefined}
						</tr>
						<tr>
							<button
								style={{
									backgroundColor: '#FF2960',
									cursor: 'pointer',
									width: '10rem',
									height: '1.5rem',
									border: '1px solid red',
									borderRadius: '5px',
									color: 'white',
									fontWeight: 'bold',
								}}>
								Supprimer
							</button>
						</tr>
					</tbody>
				))}
		</table>
	);
}

export default ListCoursesback;
