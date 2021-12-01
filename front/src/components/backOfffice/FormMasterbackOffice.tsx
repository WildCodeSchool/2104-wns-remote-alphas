import React from 'react';
import styled from 'styled-components';

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
	height: 50%;
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
	buttonType: 'post' | 'update';
	onCancel(): void;
}
function FormMasterBackOffice({
	onChange,
	courseInput,
	onSubmit,
	buttonType,
	onCancel,
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
				<Button type="submit">
					{buttonType === 'post' ? 'Poster un cours' : 'Mettre à jour'}
				</Button>
				{buttonType === 'update' && (
					<Button
						style={{
							backgroundColor: 'transparent',
							border: '1px solid white',
						}}
						type="button"
						onClick={(e) => {
							e.preventDefault();
							onCancel();
						}}>
						Annuler modification
					</Button>
				)}
			</Form>
		</Container>
	);
}

export default FormMasterBackOffice;
