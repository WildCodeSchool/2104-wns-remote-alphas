import React from 'react';
import styled, { css } from 'styled-components';
import Row from '../../core/layout_parts/Row.styled';
import Bold from '../../core/Bold.styled';

/**
 * Build a circular color drop for displaying selected colors or themes
 * @param color - the background color of the drop
 * @param title - the optionnal title coming on the right
 * @param description - the optionnal description of the element
 * @param border - defines if the colordrop has a border or not
 * @param onClick - set the optionnal callback on click event
 */

const Drop = styled.div<{ hasBorder?: boolean, background: string }>`
    background-color: ${(props) => props.background};
    border-radius: 50%;
    width: 35px;
    height: 35px;
    z-index: 10;
    ${(props) => (props.hasBorder && css`
        border: 1px solid #4E4E4E`
    )};
`;

interface ColorDropProps {
    color: string
    title?: string
    description?: string
    border?: boolean
    onClick?: (e:unknown) => void
}

const ColorDrop = ({
    color,
    title,
    description,
    onClick,
    border
}: ColorDropProps): JSX.Element => (
    <Row>
        <Row>
            <Drop hasBorder={border} background={color} onClick={onClick} />
            <Bold>{title}</Bold>
        </Row>
        <p>{description}</p>
    </Row>
);

// Set default props types
ColorDrop.defaultProps = {
	title: '',
    description: '',
    onClick: null,
    border: true
};

export default ColorDrop;
