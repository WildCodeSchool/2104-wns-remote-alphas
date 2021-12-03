import React from 'react';
import styled from 'styled-components';
import Row from '../../core/layout_parts/Row.styled';
import Title from '../../core/Title.styled';

const Drop = styled.div`
    background-color: #000;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    z-index: 10;
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
            <Drop style={{ backgroundColor: color, border: !border ? 'none' : '1px solid #4E4E4E' }} onClick={onClick} />
            <Title>{title}</Title>
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
