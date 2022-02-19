/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import ColorLuminance from '../../../../utils/colorLuminance';

/**
 * Text link with hover effect
 */
const TextLink = styled.p<{ accent?: boolean }>`
	cursor: pointer;
	:hover {
		text-decoration: underline;
        color: ${(props) => ColorLuminance(props.theme.colors.quaterny, +0.5)};
	}
    color: ${(props) => props.accent ? props.theme.colors.quaterny : props.theme.colors.primary};
    font-weight: ${(props) => props.accent ? 'bold' : 'regular'};
`;

export default TextLink;
