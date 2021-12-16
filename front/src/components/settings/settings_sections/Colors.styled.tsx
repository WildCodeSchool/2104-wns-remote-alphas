// eslint-disable-next-line object-curly-newline
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import Column from '../../core/layout_parts/Column.styled';
import Colorpicker from '../Colorpicker.styled';
import ColorDrop from '../components/ColorDrop.styled';
import ColorTheme from '../components/ColorTheme.styled';
import Container from '../components/SettingsContainer.styled';
import Bold from '../../core/Bold.styled';
import { useUpdateTheme } from '../../context/ThemeUpdateContext';

export interface IUserData {
	firstName?: string;
	name?: string;
	email?: string;
	location?: string;
}

/**
 * Build the colors settings section
 */
enum COLORS {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	TERTIARY = 'tertiary',
	LIGHTER_SECONDARY = 'lighterSecondary',
	LIGHT_BACKGROUND = 'lightBackground',
	LIGHT_TEXT = 'lightText',
}

interface ColorType {
	title: string;
	color: string;
	description: string;
}

const Colors = (): JSX.Element => {
	// Fetch the current theme in theme context
	const theme = useContext(ThemeContext);
	const updateTheme = useUpdateTheme();
	const currentTheme = useContext(ThemeContext);

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
			color: '#292929',
			title: 'Primary',
			description: 'Text & background color',
		},
		[COLORS.SECONDARY]: {
			color: '#68D0FC',
			title: 'Secondary',
			description: 'Main color to uplight higher level elements',
		},
		[COLORS.TERTIARY]: {
			color: '#FE7F2D',
			title: 'Tertiary',
			description: 'Links, buttons, focus borders & labels, tags',
		},
		[COLORS.LIGHTER_SECONDARY]: {
			color: '#4E4E4E',
			title: 'Lighter Secondary',
			description: 'Secondary level background color (menus...)',
		},
		[COLORS.LIGHT_BACKGROUND]: {
			color: '#ECEFF1',
			title: 'Light Background',
			description: 'Clear light background, used on cards and lessons',
		},
		[COLORS.LIGHT_TEXT]: {
			color: '#D1DCE5',
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
				colors: {
					...currentTheme.colors,
					[setter]: color,
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [color, setter]);

	// Convert the colors object entries to an array
	function convertToEntries(
		obj: Record<COLORS, ColorType>
	): [COLORS, ColorType][] {
		return Object.entries(obj) as [COLORS, ColorType][];
	}

	const ColorEntries = convertToEntries(customColors);

	return (
		<Container>
			<Column>
				<Bold>Select a theme</Bold>
				<ColorTheme theme={currentTheme} updateTheme={updateTheme} />
				<Bold>Or set up your own colors :</Bold>
				{ColorEntries.map(([key, value]) => (
					<ColorDrop
						color={value.color}
						title={value.title}
						description={value.description}
						onClick={() => {
							toggleColorPicker(!visibleColorPicker);
							setSetter(key);
							setColor(value.color);
						}}
					/>
				))}
			</Column>
			{visibleColorPicker && (
				<Colorpicker
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
