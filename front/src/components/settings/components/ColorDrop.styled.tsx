/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import React from 'react';
import styled, { css } from 'styled-components';
import Row from '../../core/layout_parts/Row.styled';
import Bold from '../../core/Bold.styled';
import Tabable from '../../core/accessibility/Tabable.Styled';

/**
 * Build a circular color drop for displaying selected colors or themes
 * @param color - the background color of the drop
 * @param title - the optionnal title coming on the right
 * @param description - the optionnal description of the element
 * @param border - defines if the colordrop has a border or not
 * @param onClick - set the optionnal callback on click event
 */

const Drop = styled.div<{ hasBorder?: boolean; background: string }>`
	background-color: ${(props) => props.background};
	border-radius: 50%;
	width: 35px;
	height: 35px;
	z-index: 10;
	${(props) =>
		props.hasBorder &&
		css`
			border: 1px solid #4e4e4e;
		`};
`;

interface ColorDropProps {
	color: string;
	title?: string;
	description?: string;
	border?: boolean;
	onClick?(): void;
}

const ColorDrop = ({
	color,
	title = '',
	description = '',
	onClick = () => { },
	border = true,
}: ColorDropProps): JSX.Element => (
	<Row>
		<Row>
			<Tabable
				rounded
				onClick={() => {
					if (onClick) {
						onClick();
					}
				}}
				pressedKey="Enter"
				onKeyPress={() => {
					if (onClick) {
						onClick();
					}
				}}
			>
				<Drop
					key={title}
					hasBorder={border}
					background={color}
					onClick={() => {
						if (onClick) {
							onClick();
						}
					}}
				/>
			</Tabable>
			<Bold>{title}</Bold>
		</Row>
		<p>{description}</p>
	</Row>
);

export default ColorDrop;
