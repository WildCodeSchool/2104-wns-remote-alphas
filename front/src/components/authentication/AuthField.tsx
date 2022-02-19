import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	margin: auto;
	width: 85%;
	height: 2.5rem;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 1rem;
`;

const Label = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const LabelSpan = styled.span`
	width: 85%;
	margin: auto;
	margin-bottom: 5px;
	font-size: 12px;
	font-style: italic;
	font-weight: bold;
`;

interface FieldProps {
	type: string;
	label: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: string;
	placeholder: string;
}
const AuthField = ({
	type = 'text',
	label = 'input label',
	onChange,
	value,
	placeholder,
}: FieldProps): JSX.Element => (
	<Label htmlFor={label}>
		<LabelSpan>{label}</LabelSpan>
		<Input
			type={type}
			name={label}
			id={label}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
	</Label>
);

export default AuthField;
