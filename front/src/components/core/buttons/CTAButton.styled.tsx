/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import ColorLuminance from '../../../utils/colorLuminance';

const CTAButton = styled.button`
	background-color: ${(props) => props.theme.colors.secondary};
	cursor: pointer;
	width: 12rem;
	height: 3rem;
	border: 1px solid
		${(props) => props.theme.colors.secondary};
	border-radius: 5px;
    color: ${(props) => props.theme.colors.primary};
	font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
	padding: 10px;
    :hover {
        transform: scale(1.03, 1.03);
        background-color: ${(props) => ColorLuminance(props.theme.colors.secondary, -0.3)};
        border-color: ${(props) => ColorLuminance(props.theme.colors.secondary, -0.3)};
        color: white;
    }
`;

export default CTAButton;
