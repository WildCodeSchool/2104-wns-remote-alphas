import React from 'react';
import styled from 'styled-components';
// import SrOnly from '../../core/accessibility/SrOnly.styled';

const Input = styled.input`
	margin: auto;
	width: 85%;
	height: 2.5rem;
	border-radius: 8px;
	font-size: 1rem;
	background-color: ${(props) => props.theme.colors.opposite}
`;

const Label = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;
	color: ${(props) => props.theme.colors.opposite}
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
	name: string;
	label: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: string;
	placeholder: string;
}
const AuthField = ({
	type = 'text',
	name = 'input name',
	label = 'input label',
	onChange,
	value,
	placeholder,
}: FieldProps): JSX.Element => (
	<Label htmlFor={label}>
		{/* <SrOnly><text>test sr</text></SrOnly> */}
		<LabelSpan>{label}</LabelSpan>
		<Input
			aria-label={label}
			type={type}
			name={name}
			id={label}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
	</Label>
);

export default AuthField;
