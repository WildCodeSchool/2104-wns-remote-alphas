import React from 'react';
import styled from 'styled-components';
import ErrorMessage from '../ErrorMessage';

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

interface Iprops {
	onChange(value: string, name: string): void;
	courseInput: {
		courseName: string;
		image_url: string;
		description: string;
		technos: string;
	};
	onSubmit(e: React.SyntheticEvent): void;
	errorState: { status: boolean; message: string };
}
function FormMasterBackOffice({
	onChange,
	courseInput,
	onSubmit,
	errorState,
}: Iprops): JSX.Element {
	return (
		<Container>
			<Form
				onSubmit={(e) => {
					onSubmit(e);
				}}>
				<Input
					type="text"
					name="courseName"
					placeholder="Titre du cours"
					onChange={(e) => {
						onChange(e.target.value, e.target.name);
					}}
					value={courseInput.courseName}
				/>
				<Input
					type="text"
					name="technos"
					placeholder="Technos abordées du cours"
					onChange={(e) => {
						onChange(e.target.value, e.target.name);
					}}
					value={courseInput.technos}
				/>
				<Textarea
					name="description"
					placeholder="Contenu du cours"
					onChange={(e) => {
						onChange(e.target.value, e.target.name);
					}}
					value={courseInput.description}
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
				{errorState.status && <ErrorMessage>{errorState.message}</ErrorMessage>}
				<Button type="submit">Poster un cours</Button>
			</Form>
		</Container>
	);
}

export default FormMasterBackOffice;
