/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import ColorLuminance from '../../../utils/colorLuminance';

/**
 * Accessible Text link with hover effect and keyboard navigation
 */
const TextButton = styled.button<{ accent?: boolean }>`
	cursor: pointer;
    background-color: unset;
    border: unset;
    padding: .5em;
    margin: .8em;
	:hover {
		text-decoration: underline;
        color: ${(props) => ColorLuminance(props.theme.colors.secondary, +0.3)};
	}
    color: ${(props) => props.accent ? props.theme.colors.secondary : props.theme.colors.opposite};
    font-weight: ${(props) => props.accent ? 'bold' : 'regular'};
`;

export default TextButton;
