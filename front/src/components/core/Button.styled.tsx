/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

const Button = styled.button<{ alert?: boolean }>`
	background-color: ${(props) => props.alert ? '#FF2960' : props.theme.colors.secondary};
	cursor: pointer;
	width: 12rem;
	height: 3rem;
	border: 1px solid
		${(props) => (props.alert ? '#FF2960' : props.theme.colors.secondary)};
	border-radius: 5px;
	color: white;
	font-weight: bold;
	padding: 10px;
    :hover {
        transform: scale(1.1, 1.1);
    }
`;

export default Button;
