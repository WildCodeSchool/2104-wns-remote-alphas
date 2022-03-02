import { ChangeEventHandler, FocusEventHandler } from 'react';
import styled, { css } from 'styled-components';

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

const Input = styled.input<{ focused?: boolean }>`
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.secondaryLighter};
  color: ${(props) => props.theme.colors.primaryLighter};
  height: ${(props) => props.theme.fixedSize.field.height};
  width: 90%;
  ${(props) =>
    props.focused &&
    css`
      outline: 3px solid #fe7f2d;
      outline-offset: -3px;
    `};
  margin-top: 0.3em;
  font-size: 1rem;
  padding-left: 1rem;
`;

const Label = styled.label<{ focused?: boolean }>`
  ${(props) =>
    props.focused &&
    css`
      color: #fe7f2d;
      font-weight: bold;
    `};
  /* fontweight: 500; */
  margin-top: 0.3em;
`;

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
  onFocus = () => undefined,
  onBlur = () => undefined,
  value = 'default value',
}: FormFieldProps): JSX.Element => (
  <Label htmlFor={label} focused={focused}>
    {label}
    <Input
      id={label}
      type={type}
      name={label}
      onChange={onChange}
      key={label}
      value={value}
      focused={focused}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </Label>
);

export default Field;
