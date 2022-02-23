import React from 'react';
import styled, { css } from 'styled-components';
import Row from '../../core/layout_parts/Row.styled';
import ColorDrop from './ColorDrop.styled';

/**
 * Build a double color drop for themes
 * @param lowerColor - defines the first color drop background
 * @param upperColor - defines the second color drop background
 * @param title - the text coming with the color drop
 */

const LowerDrop = styled.div<{ color: string }>`
	border-radius: 50%;
	width: 35px;
	height: 35px;
	border: 1px solid #4e4e4e;
	position: relative;
	left: 28px;
	background-color: ${(props) => props.color};
`;

const FocusEffect = styled.div<{ rounded?: boolean }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1em;
    flex-wrap: wrap;
	width: fit-content;
	:focus {
		box-shadow: 0 0 10px 5px ${(props) => props.theme.colors.secondary};
		${(props) => props.rounded && css`
				border-radius: 50%;
			`};
	}
`;

interface DoubleColorDropProps {
	lowerColor: string;
	upperColor: string;
	title?: string;
}

const DoubleColorDrop = ({
	lowerColor,
	upperColor,
	title = '',
}: DoubleColorDropProps): JSX.Element => (
	<Row>
		<FocusEffect tabIndex={0} rounded>
			<LowerDrop color={lowerColor} />
			<ColorDrop color={upperColor} />
		</FocusEffect>
		<text>{title}</text>
	</Row>
);

export default DoubleColorDrop;
