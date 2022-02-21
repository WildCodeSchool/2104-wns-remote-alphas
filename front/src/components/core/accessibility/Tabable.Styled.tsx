/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React from 'react';
import styled, { css, ThemeContext } from 'styled-components';

/**
 * Tabbable div for keyboard navigation
 */
const FocusEffect = styled.div<{ rounded?: boolean }>`
	:focus {
		box-shadow: 0 0 10px 5px ${(props) => props.theme.colors.secondary};
		${(props) => props.rounded && css`
				border-radius: 50%;
			`};
	}
`;

interface TabableProps {
	children: React.ReactNode;
	onClick?: any;
	pressedKey: string;
	onKeyPress: any;
	rounded?: boolean;
}

const Tabable = ({ children, onClick, onKeyPress, pressedKey, rounded }: TabableProps): JSX.Element => <FocusEffect
	rounded
	aria-label="tabable element"
	onClick={onClick}
	onKeyPress={(e) => e.key === pressedKey && onKeyPress()}
	role="button"
	tabIndex={0}>
	{children}
</FocusEffect>;

export default Tabable;
