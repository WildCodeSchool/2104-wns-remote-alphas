/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import styled from 'styled-components';

/// Define props type
interface FormFieldProps {
	type?: string;
	label?: string;
	focused: boolean;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onFocus: FocusEventHandler;
	onBlur: FocusEventHandler;
	value?: string
}

/// Build styled field with custom props
const Field = ({
	type,
	label,
	focused,
	onChange,
	onFocus,
	onBlur,
	value
}: FormFieldProps): JSX.Element => {
	/// style the input component
	// TODO: change for theme props
	const Input = styled.input`
		border-radius: 10px;
		background-color: #4e4e4e;
		color: #d1dce5;
		height: 2.5em;
		width: 90%;
		:focus + label {
			color: #FE7F2D;
			font-weight: bold;
		}
	`;

	return (
		<label
			htmlFor={label}
			style={{
				color: focused ? '#FE7F2D' : '',
				fontWeight: focused ? 'bold' : 500
			}}
		>
			{label}
			<Input
				id={label}
				type={type}
				name={label}
				onChange={onChange}
				key={label}
				value={value}
				onFocus={onFocus}
				onBlur={onBlur}
				/>
		</label>
	);
};

// Set default props types
Field.defaultProps = {
	type: null,
	label: null,
	value: null
};

export default Field;
