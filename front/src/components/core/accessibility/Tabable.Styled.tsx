/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React from 'react';
import styled, { ThemeContext } from 'styled-components';

/**
 * Tabbable div for keyboard navigation
 */
const HoverEffect = styled.div`
	:focus {
		box-shadow: 0 0 10px 5px #08F;
	}
`;

interface TabableProps {
	children: React.ReactNode;
	onClick: any;
	pressedKey: string;
	onKeyPress: any;

}

const Tabable = ({ children, onClick, onKeyPress, pressedKey } : TabableProps): JSX.Element => <HoverEffect
aria-label="open tips"
	onClick={onClick}
	onKeyPress={(e) => e.key === pressedKey && onKeyPress()}
	role="button"
	tabIndex={0}>
	{children}
</HoverEffect>;

export default Tabable;
