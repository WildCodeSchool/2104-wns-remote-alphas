import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import styled from 'styled-components';

/**
 * Build a generic text field to use in forms
 * @param type - set optionnal input type
 * @param label - set optionnal label for the field
 * @param focused - changes style on focus state
 * @param onChange - handle onChange input property, in order to listen to the content changes
 * @param onFocus - handles onFocus input property
 * @param onBlur - handles onBlur input property (= lost focus)
 * @param value - the optionnal value of the input field
 */
/// Define props type
interface FormFieldProps {
	type?: string;
	label?: string;
	focused: boolean;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler;
	onBlur?: FocusEventHandler;
	value?: string;
}

/// Build styled field with custom props
const Field = ({
	type = 'text',
	label = 'input label',
	focused,
	onChange,
	onFocus = () => {},
	onBlur = () => {},
	value = 'default value',
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
			color: #fe7f2d;
			font-weight: bold;
		}
	`;

	return (
		<label
			htmlFor={label}
			style={{
				color: focused ? '#FE7F2D' : '',
				fontWeight: focused ? 'bold' : 500,
			}}>
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

export default Field;
