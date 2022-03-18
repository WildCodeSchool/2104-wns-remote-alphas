import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { getKeyboardFocusableElements, removeTabIndex } from '../../../utils/trapFocus';
import { COLORS } from '../../../utils/types';
import { useUpdateTheme } from '../../context/ThemeUpdateContext';
import Bold from '../../core/Bold.styled';
import Column from '../../core/layout_parts/Column.styled';
import Colorpicker from '../Colorpicker.styled';
import ColorDrop from '../components/ColorDrop.styled';
import ColorTheme from '../components/ColorTheme.styled';
import Container from '../components/SettingsContainer.styled';

/**
 * Build the colors settings section
 */

interface ColorType {
  title: string;
  color: string;
  description: string;
}

const Colors = (): JSX.Element => {
  // Fetch the current theme in theme context
  const theme = useContext(ThemeContext);
  const updateTheme = useUpdateTheme();

  // Get all the focusable elements for modal focus trap
  const focusableElements = getKeyboardFocusableElements();

  // Primary color is used as initial colordrop color
  const primaryColor = theme.colors.primary;

  // Toggle the colorpicker modal
  const [visibleColorPicker, toggleColorPicker] = useState(false);

  // Set the "setter" to define which colordrop needs to be updated (primary, secondary...)
  const [setter, setSetter] = useState<COLORS>(COLORS.PRIMARY);

  // define the current color of the colorpicker
  const [color, setColor] = useState(primaryColor);

  // Default color theme and its setter to define custom theme
  const [customColors, setCustomColors] = useState<Record<COLORS, ColorType>>({
    [COLORS.PRIMARY]: {
      color: theme.colors.primary,
      title: 'Primary',
      description: 'Text & background color',
    },
    [COLORS.SECONDARY]: {
      color: theme.colors.secondary,
      title: 'Secondary',
      description: 'Main color to uplight higher level elements',
    },
    [COLORS.TERTIARY]: {
      color: theme.colors.tertiary,
      title: 'Tertiary',
      description: 'Links, buttons, focus borders & labels, tags',
    },
    [COLORS.QUATERNY]: {
      color: theme.colors.quaterny,
      title: 'Lighter Secondary',
      description: 'Secondary level background color (menus...)',
    },
    [COLORS.LIGHT_BACKGROUND]: {
      color: theme.colors.lightBackground,
      title: 'Light Background',
      description: 'Clear light background, used on cards and lessons',
    },
    [COLORS.TEXT_COLOR]: {
      color: theme.colors.textColor,
      title: 'Light Text',
      description: 'Links, menu elements & text on a dark background',
    },
  });

  /**
   * Set the current colordrop to the new value on color picker changes
   * and update theme data in context.
   * */
  useEffect(() => {
    if (setter && Object.keys(customColors).includes(setter)) {
      setCustomColors({
        ...customColors,
        [setter]: { ...customColors[setter], color },
      });

      updateTheme({
        ...theme,
        colors: {
          ...theme.colors,
          [setter]: color,
        },
      });
    }
  }, [color, setter]);

  // Convert the colors object entries to an array
  function convertToEntries(obj: Record<COLORS, ColorType>): [COLORS, ColorType][] {
    return Object.entries(obj) as [COLORS, ColorType][];
  }

  const ColorEntries = convertToEntries(customColors);

  return (
    <Container>
      <Column>
        <Bold>Select a theme</Bold>
        <ColorTheme theme={theme} updateTheme={updateTheme} />
        <Bold>Or set up your own colors :</Bold>
        {ColorEntries.map(([key, value]) => (
          <ColorDrop
            focusable
            key={key}
            color={value.color}
            title={value.title}
            description={value.description}
            onClick={() => {
              toggleColorPicker(!visibleColorPicker);
              removeTabIndex(focusableElements);
              setSetter(key);
              setColor(value.color);
            }}
          />
        ))}
      </Column>
      {visibleColorPicker && (
        <Colorpicker
          setter={setter}
          color={color}
          setColor={setColor}
          toggleColorPicker={toggleColorPicker}
          visibleColorPicker={visibleColorPicker}
        />
      )}
    </Container>
  );
};

export default Colors;
