// eslint-disable-next-line object-curly-newline
import React, { useState } from 'react';
import Row from '../../core/layout_parts/Row.styled';
import ColorDrop from './ColorDrop.styled';
import DoubleColorDrop from './DoubleColorDrop.styled';

/**
 * Builds a row with color themes drops and titles for colors settings section
 */
const ColorTheme = (): JSX.Element => {
    const [theme, setTheme] = useState();

    return (
        <Row>
            <ColorDrop color="#292929" title="Dark" />
            <ColorDrop color="#ECEFF1" title="Light" />
            <DoubleColorDrop lowerColor="#BDBDBD" upperColor="#E0E0E0" title="GreyScale" />
            <DoubleColorDrop lowerColor="#000" upperColor="#fff" title="High Contrast" />
        </Row>
    );
};

export default ColorTheme;
