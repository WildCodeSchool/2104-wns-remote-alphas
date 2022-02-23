/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

const Button = styled.button<{ alert?: boolean }>`
	background-color: ${(props) => props.alert ? '#CD2C41' : props.theme.colors.secondary};
	cursor: pointer;
	width: 12rem;
	height: 3rem;
	border: 1px solid
		${(props) => (props.alert ? '#CD2C41' : props.theme.colors.secondary)};
	border-radius: 5px;
    color: ${(props) => (props.alert ? 'white' : props.theme.colors.primary)};
	font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
	padding: 10px;
    :hover {
        transform: scale(1.03, 1.03);
    }
`;

export default Button;
