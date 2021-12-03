/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import convertDate from '../../utils/convertDate';
import ModalConfirmation from '../core/ModalConfirmation';

// APPEL API GRAPHQL
export type CourseType = {
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
	postedAt: string;
	_id: string;
};

export type CourseId = {
	_id: string;
};

interface Iprops {
	courses: CourseType[];
	// deleteCourse(_id: string): void;
	fetchById(_id: string): void;
	displayModal(item: CourseType): void;
}

function ListCoursesback({
	courses,
	fetchById,
	displayModal,
}: Iprops): JSX.Element {
	return (
		<table style={{ width: '100%' }}>
			<thead>
				<tr>
					<th colSpan={4}> </th>
				</tr>
			</thead>

			{courses
				.sort((a, b) => (b.postedAt > a.postedAt ? 1 : -1))
				.map((item) => (
					<tbody
						key={item._id}
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
						<tr
							style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
							<button
								style={{
									backgroundColor: '#FF2960',
									cursor: 'pointer',
									width: '8rem',
									height: '1.5rem',
									border: '1px solid red',
									borderRadius: '5px',
									color: 'white',
									fontWeight: 'bold',
								}}
								type="button"
								onClick={(e) => {
									e.preventDefault();
									// deleteCourse(item._id);
									// displayModalToConfirm();
									displayModal(item);
								}}>
								Supprimer
							</button>
							<button
								style={{
									backgroundColor: '#68d0fc',
									cursor: 'pointer',
									width: '8rem',
									height: '1.5rem',
									border: '1px solid #68d0fc',
									borderRadius: '5px',
									color: 'white',
									fontWeight: 'bold',
								}}
								type="button"
								onClick={(e) => {
									e.preventDefault();
									fetchById(item._id);
								}}>
								Modifier
							</button>
						</tr>
					</tbody>
				))}
		</table>
		// {showModal && (
		// 	<ModalConfirmation
		// 		question="Es-tu sûr de vouloir supprimer ce cours ?"
		// 		displayModal={displayModalToConfirm}
		// 		deleteCourse={deleteCourse}
		// 		id={item._id}
		// 		courses={courses}
		// 	/>
		// )}
	);
}

export default ListCoursesback;
