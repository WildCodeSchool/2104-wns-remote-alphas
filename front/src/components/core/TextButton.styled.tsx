/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import ColorLuminance from '../../utils/colorLuminance';

/**
 * Text link with hover effect
 */
const TextButton = styled.button<{ accent?: boolean }>`
	cursor: pointer;
    background-color: unset;
    border: unset;
	:hover {
		text-decoration: underline;
        color: ${(props) => ColorLuminance(props.theme.colors.secondary, +0.3)};
	}
    color: ${(props) => props.accent ? props.theme.colors.secondary : props.theme.colors.opposite};
    font-weight: ${(props) => props.accent ? 'bold' : 'regular'};
`;

export default TextButton;
