import React from 'react';
import styled from 'styled-components';
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
    border: 1px solid #4E4E4E;
    position: relative;
    left: 28px;
    background-color: ${(props) => props.color};
`;

interface DoubleColorDropProps {
    lowerColor: string
    upperColor: string
    title?: string
}

const DoubleColorDrop = ({
    lowerColor,
    upperColor,
    title,
}: DoubleColorDropProps): JSX.Element => (
    <Row>
        <LowerDrop color={lowerColor} />
        <ColorDrop color={upperColor} />
        <text>{title}</text>
    </Row>
);

DoubleColorDrop.defaultProps = {
    title: ''
};

export default DoubleColorDrop;
