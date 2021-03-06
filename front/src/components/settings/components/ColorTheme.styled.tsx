/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { COLORTHEMES } from '../../../utils/types';
import Row from '../../core/layout_parts/Row.styled';
import ColorDrop from './ColorDrop.styled';
import DoubleColorDrop from './DoubleColorDrop.styled';

/**
 * Builds a row with color themes drops and titles for colors settings section
 */
interface ColorThemeProps {
  theme: DefaultTheme;
  updateTheme: (_theme: DefaultTheme) => void;
}
const ColorTheme = ({ updateTheme, theme }: ColorThemeProps): JSX.Element => {
  // set default themes names

  interface ColorThemeType {
    title: string;
    color: string;
    description: string;
  }

  // Default themes
  const [defaultTheme, setDefaultTheme] = useState<
    Record<
      | COLORTHEMES.DARK
      | COLORTHEMES.GREYSCALE
      | COLORTHEMES.HIGH_CONTRAST
      | COLORTHEMES.LIGHT,
      ColorThemeType
    >
  >({
    [COLORTHEMES.DARK]: {
      color: '#292929',
      title: 'Primary',
      description: 'Text & background color',
    },
    [COLORTHEMES.LIGHT]: {
      color: '#68D0FC',
      title: 'Secondary',
      description: 'Main color to uplight higher level elements',
    },
    [COLORTHEMES.GREYSCALE]: {
      color: '#FE7F2D',
      title: 'Tertiary',
      description: 'Links, buttons, focus borders & labels, tags',
    },
    [COLORTHEMES.HIGH_CONTRAST]: {
      color: '#4E4E4E',
      title: 'Lighter Secondary',
      description: 'Secondary level background color (menus...)',
    },
  });

  // TODO: create collection of themes with default theme, predefined themes and text themes
  // add enum DEFAULT_THEMES dark = default DarkTheme, light, greyscale, high contrast
  // on click, set update theme with enum theme values.
  return (
    <Row gap="0">
      <ColorDrop color="#292929" title="Dark" focusable />
      <ColorDrop color="#ECEFF1" title="Light" focusable />
      <DoubleColorDrop lowerColor="#BDBDBD" upperColor="#E0E0E0" title="GreyScale" />
      <DoubleColorDrop lowerColor="#000" upperColor="#fff" title="High Contrast" />
    </Row>
  );
};

export default ColorTheme;
