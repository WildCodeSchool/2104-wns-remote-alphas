import React from 'react';
import convertDate from '../../../utils/convertDate';
import { CourseType } from '../../../utils/types';

export type CourseId = {
	_id: string;
};

interface Iprops {
	courses: CourseType[];
	fetchById(_id: string): void;
	displayModal(item: CourseType): void;
}

function OfficeCoursesList({
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
						<tr><th><h2 style={{ color: 'white' }}>{item.courseName}</h2></th></tr>
						<tr><td><h3 style={{ color: 'white' }}>{item.technos}</h3></td></tr>
						<tr style={{ color: 'white' }}>
							<td>{item.postedAt ? convertDate(item.postedAt, 'fr') : undefined}</td>
						</tr>
						<tr
							style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
							<td>
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
										displayModal(item);
									}}>
									Supprimer
								</button>
							</td>
							<td>
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
							</td>
						</tr>
					</tbody>
				))}
		</table>
	);
}

export default OfficeCoursesList;
