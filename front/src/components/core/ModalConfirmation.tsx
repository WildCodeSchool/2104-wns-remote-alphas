import React from 'react';
import { CourseType } from '../timeline/Timeline.styled';

interface Iprops {
	question: string;

	deleteCourse(_id: string): void;
	id: string;
	closeModal(): void;
}

function ModalConfirmation({
	question,
	deleteCourse,
	id,
	closeModal,
}: Iprops): JSX.Element {
	return (
		<div
			style={{
				backgroundColor: '#292929',
				width: '30%',
				height: '40%',
				position: 'fixed',
				top: '0',
				bottom: '0',
				right: '0',
				left: '0',
				margin: 'auto',
				border: '1px solid white',
				borderRadius: '10px',
				padding: '2.4rem',
			}}>
			<h2 style={{ color: 'white' }}>Confirmation</h2>
			<h4
				style={{
					height: '50%',
					display: 'flex',
					alignItems: 'center',
					color: 'white',
				}}>
				{question}
			</h4>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					height: '30%',
				}}>
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
					onClick={() => {
						deleteCourse(id);
					}}
					type="button">
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
					onClick={() => {
						closeModal();
					}}
					type="button">
					Annuler
				</button>
			</div>
		</div>
	);
}

export default ModalConfirmation;
