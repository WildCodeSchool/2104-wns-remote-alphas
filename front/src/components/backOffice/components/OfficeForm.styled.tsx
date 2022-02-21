/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import styled from 'styled-components';
import { CourseType } from '../../../utils/types';
import Button from '../../core/buttons/Button.styled';
import ErrorMessage from '../../core/ErrorMessage';

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
	padding-top: 1em;
`;

const Input = styled.input`
	margin: auto;
	width: 100%;
	height: 2.5rem;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 1rem;
	margin-top: 10px;
`;

const Label = styled.label`
	color: white;
	width: 85%;
	margin-bottom: 2em;
`;

const Textarea = styled.textarea`
	max-width: 85%;
	min-width: 100%;
	width: 100%;
	min-height: 25rem;
	max-height: 50%;
	margin: auto;
	height: 50%;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 1rem;
	margin-top: 10px;
`;

type Course = Omit<CourseType, 'technos' | 'id' | 'postedAt'>;
interface CourseInput extends Course {
	technos: string;
}

interface Iprops {
	onChange(value: string, name: string): void;
	courseInput: CourseInput;
	onSubmit(e: React.SyntheticEvent): void;
	buttonType: 'post' | 'update';
	onCancel(): void;
	errorState: { status: boolean; message: string };
}
function OfficeForm({
	onChange,
	courseInput,
	onSubmit,
	buttonType,
	onCancel,
	errorState,
}: Iprops): JSX.Element {
	return (
		<Container>
			<Form
				onSubmit={(e) => {
					onSubmit(e);
				}}>
				<Label>
					Enter course name
					<Input
						type="text"
						name="courseName"
						placeholder="Handle bloc pattern in Flutter"
						onChange={(e) => {
							onChange(e.target.value, e.target.name);
						}}
						value={courseInput.courseName}
					/>
				</Label>
				<Label>
					Define the related technologies
					<Input
						type="text"
						name="technos"
						placeholder="Dart, Flutter, Bloc"
						onChange={(e) => {
							onChange(e.target.value, e.target.name);
						}}
						value={courseInput.technos}
					/>
				</Label>
				<Label>
					Write your content
				<Textarea
					name="description"
					placeholder="Fill out the very interesting course content here"
					onChange={(e) => {
						onChange(e.target.value, e.target.name);
					}}
					value={courseInput.description}
				/>
				</Label>
				{errorState.status &&
					<ErrorMessage>
						<span>
							🚨
							&nbsp;
							🚨
							&nbsp;
							🚨
							&nbsp;
							{errorState.message}
						</span>
					</ErrorMessage>}
				<Button
					type="submit"
					style={{
						width: '85%',
						marginBottom: '2em'
					}}>
					{buttonType === 'post' ? 'Post a new course' : 'Edit a course'}
				</Button>
				{buttonType === 'update' && (
					<Button
						style={{
							width: '85%',
							marginBottom: '2em'
						}}
						type="button"
						alert
						onClick={(e) => {
							e.preventDefault();
							onCancel();
						}}>
						Cancel edition
					</Button>
				)}
			</Form>
		</Container>
	);
}

export default OfficeForm;
