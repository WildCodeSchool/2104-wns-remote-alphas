/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React from 'react';
import styled, { ThemeContext } from 'styled-components';

/**
 * Tabbable div for keyboard navigation
 */
const FocusEffect = styled.div`
	:focus {
		box-shadow: 0 0 10px 5px ${(props) => props.theme.colors.secondary};
	}
`;

interface TabableProps {
	children: React.ReactNode;
	onClick: any;
	pressedKey: string;
	onKeyPress: any;

}

const Tabable = ({ children, onClick, onKeyPress, pressedKey } : TabableProps): JSX.Element => <FocusEffect
aria-label="open tips"
	onClick={onClick}
	onKeyPress={(e) => e.key === pressedKey && onKeyPress()}
	role="button"
	tabIndex={0}>
	{children}
</FocusEffect>;

export default Tabable;
