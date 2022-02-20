/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import styled from 'styled-components';
import convertDate from '../../../utils/convertDate';
import { CourseType } from '../../../utils/types';
import Button from '../../core/buttons/Button.styled';

export type CourseId = {
	_id: string;
};

interface Iprops {
	courses: CourseType[];
	fetchById(_id: string): void;
	displayModal(item: CourseType): void;
}

const ContentColumn = styled.tr`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	align-items: flex-start;
`;

const Label = styled.text`
	text-align: start;
`;

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
						<ContentColumn>
							<th>
								<Label style={{ color: 'white' }}>
									Name :
								</Label>
								<h2 style={{ color: 'white' }}>{item.courseName}</h2>
							</th>
							<td>
								<h3 style={{ color: 'white' }}>
									{item.technos[0]}
									{item.technos.length > 1 &&
									<span>
										&nbsp;
										|
										&nbsp;
										{item.technos[1]}
									</span>}

								</h3>
							</td>
							<br />
							<td style={{ color: 'white' }}>
								{item.postedAt ? convertDate(item.postedAt, 'fr') : undefined}
							</td>
						</ContentColumn>

						<tr
							style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
							<td>
								<Button
									type="button"
									alert
									onClick={(e) => {
										e.preventDefault();
										displayModal(item);
									}}>
									Delete
								</Button>
							</td>
							<td>
								<Button
									type="button"
									onClick={(e) => {
										e.preventDefault();
										fetchById(item._id);
									}}>
									Edit
								</Button>
							</td>
						</tr>
					</tbody>
				))}
		</table>
	);
}

export default OfficeCoursesList;
