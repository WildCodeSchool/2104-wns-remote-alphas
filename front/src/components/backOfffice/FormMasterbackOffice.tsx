import React, { useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';

const Container = styled.div`
	display: 'flex';
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: 1px solid white;
	border-radius: 10px;
	width: 80%;
	height: 80%;
	margin: auto;
`;

const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`;

const Input = styled.input`
	margin: auto;
	width: 85%;
	height: 2.5rem;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 1rem;
`;

const Textarea = styled.textarea`
	max-width: 85%;
	min-width: 85%;
	width: 85%;
	min-height: 2.5rem;
	max-height: 50%;
	margin: auto;
	height: 2.5rem;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 1rem;
`;

const Button = styled.button`
	margin: auto;
	width: 50%;
	height: 2.5rem;
	cursor: pointer;
	border-radius: 5px;
	color: white;
	border: 1px solid #68d0fc;
	background-color: #68d0fc;
	font-size: 1rem;
	:hover {
		background-color: #2bb7f3;
		border-color: #2bb7f3;
	}
`;

// MUTATION POUR POSTER UN COURS
export const ADD_COURSE = gql`
	mutation addCourse(
		$courseName: String!
		$image_url: String!
		$description: String!
		$technos: [String!]
	) {
		addCourse(
			course: {
				courseName: $courseName
				description: $description
				technos: $technos
				image_url: $image_url
			}
		) {
			courseName
			description
			technos
			image_url
		}
	}
`;

function FormMasterBackOffice(): JSX.Element {
	const initialState = {
		courseName: '',
		image_url: '',
		description: '',
		technos: '',
	};
	const [postCoursesState, setPostCoursesState] = useState(initialState);
	const [addCourseMutation, { error }] = useMutation(ADD_COURSE);

	async function handleSubmitCourse() {
		const {
			data: { addCourse },
		} = await addCourseMutation({
			variables: {
				courseName: postCoursesState.courseName,
				image_url: 'http://reactjs/image.fr',
				description: postCoursesState.description,
				technos: postCoursesState.technos.split(' '),
			},
		});
	}
	return (
		<Container>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmitCourse();
				}}>
				<Input
					type="text"
					name="courseName"
					placeholder="Titre du cours"
					onChange={(e) => {
						setPostCoursesState({
							...postCoursesState,
							[e.target.name]: e.target.value,
						});
					}}
					value={postCoursesState.courseName}
				/>
				<Input
					type="text"
					name="technos"
					placeholder="Technos abordées du cours"
					onChange={(e) => {
						setPostCoursesState({
							...postCoursesState,
							[e.target.name]: e.target.value,
						});
					}}
					value={postCoursesState.technos}
				/>
				<Textarea
					name="description"
					placeholder="Contenu du cours"
					onChange={(e) => {
						setPostCoursesState({
							...postCoursesState,
							[e.target.name]: e.target.value,
						});
					}}
					value={postCoursesState.description}
				/>
				{/* <Input
					type="file"
					name="image_url"
					accept="image/png, image/jpeg"
					placeholder="Titre du cours"
					onChange={(e) => {
						setPostCoursesState({
							...postCoursesState,
							[e.target.name]: e.target.value,
						});
					}}
				/> */}
				<Button type="submit">Poster un cours</Button>
			</Form>
			{error && <p>Erreur</p>}
		</Container>
	);
}

export default FormMasterBackOffice;
