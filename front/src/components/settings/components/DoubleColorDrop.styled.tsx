import React from 'react';
import styled from 'styled-components';
import Row from '../../core/layout_parts/Row.styled';
import ColorDrop from './ColorDrop.styled';

const LowerDrop = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid #4E4E4E;
    position: relative;
    left: 28px;
`;

interface DoubleColorDropProps {
    lowerColor: string
    upperColor: string
    title: string
}

const DoubleColorDrop = ({
    lowerColor,
    upperColor,
    title,
}: DoubleColorDropProps): JSX.Element => (
    <Row>
        <LowerDrop style={{ backgroundColor: lowerColor }} />
        <ColorDrop style={{ backgroundColor: upperColor }} />
        <text>{title}</text>
    </Row>
);

export default DoubleColorDrop;
