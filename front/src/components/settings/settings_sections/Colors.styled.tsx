// eslint-disable-next-line object-curly-newline
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import Column from '../../core/layout_parts/Column.styled';
import Colorpicker from '../Colorpicker.styled';
import ColorDrop from '../components/ColorDrop.styled';
import ColorTheme from '../components/ColorTheme.styled';
import Container from '../components/SettingsContainer.styled';
import Bold from '../../core/Bold.styled';

// export interface IUserColors {
//     theme?: string;
//     customColors?: string[];
// }

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
	const [visibleColorPicker, toggleColorPicker] = useState(false);
	const [setter, setSetter] = useState<COLORS>(COLORS.PRIMARY);
	const [color, setColor] = useState('#292929');
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

	// FIXME: user data doesn't contain settings
	// FIXME: customColors should be an array of string (currently set as string)
	/// Fetch current user in context
	const { user } = useContext(Context);
	/// Set as initial data
	// const [userColors, setUserColors] = useState<IUserData>(user);
	// console.log(user);

	/// Set the current colordrop to the new value on color picker changes

	useEffect(() => {
		if (setter && Object.keys(customColors).includes(setter)) {
			setCustomColors({
				...customColors,
				[setter]: { ...customColors[setter], color },
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [color, setter]);

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
				<ColorTheme />
				<Bold>Or set up your own colors :</Bold>
				{ColorEntries.map(([key, value]) => (
					<ColorDrop
						color={value.color}
						title={value.title}
						description={value.description}
						onClick={() => {
							toggleColorPicker(!visibleColorPicker);
							setSetter(key);
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
