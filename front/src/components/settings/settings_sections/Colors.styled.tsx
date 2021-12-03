// eslint-disable-next-line object-curly-newline
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import Column from '../../core/layout_parts/Column.styled';
import Title from '../../core/Title.styled';
import Colorpicker from '../Colorpicker.styled';
import ColorDrop from '../components/ColorDrop.styled';
import ColorTheme from '../components/ColorTheme.styled';
import Container from '../components/SettingsContainer.styled';

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
const Colors = (): JSX.Element => {
    const [visibleColorPicker, toggleColorPicker] = useState(false);
    const [setter, setSetter] = useState('');
    const [color, setColor] = useState('#292929');
    const [primaryColor, setPrimaryColor] = useState('#292929');
    const [secondaryColor, setSecondaryColor] = useState('#68D0FC');
    const [tertiaryColor, setTertiaryColor] = useState('#FE7F2D');
    const [lighterSecondaryColor, setLighterSecondaryColor] = useState('#4E4E4E');
    const [lightBackgroundColor, setLightBackgroundColor] = useState('#ECEFF1');
    const [lightTextColor, setLightTextColor] = useState('#D1DCE5');

    // FIXME: user data doesn't contain settings
    // FIXME: customColors should be an array of string (currently set as string)
    /// Fetch current user in context
    const { user } = useContext(Context);
    /// Set as initial data
    // const [userColors, setUserColors] = useState<IUserData>(user);
    // console.log(user);

    /// Set the current colordrop to the new value on color picker changes
    useEffect(() => {
        switch (setter) {
            case 'primary':
                setPrimaryColor(color);
                break;
            case 'secondary':
                setSecondaryColor(color);
                break;
            case 'tertiary':
                setTertiaryColor(color);
                break;
            case 'lighterSecondary':
                setLighterSecondaryColor(color);
                break;
            case 'lightBackground':
                setLightBackgroundColor(color);
                break;
            case 'lightText':
                setLightTextColor(color);
                break;
            default:
                break;
        }
    }, [color, setter]);

    return (
        <Container>
            <Column>
                <Title>Select a theme</Title>
                <ColorTheme />
                <Title>Or set up your own colors :</Title>

                <ColorDrop
                    color={primaryColor}
                    title="Primary"
                    description="Text & background color"
                    onClick={() => {
                        toggleColorPicker(!visibleColorPicker);
                        setSetter('primary');
                    }} />

                <ColorDrop
                    color={secondaryColor}
                    title="Secondary"
                    description="Main color to uplight higher level elements"
                    onClick={() => {
                        toggleColorPicker(!visibleColorPicker);
                        setSetter('secondary');
                    }} />

                <ColorDrop
                    color={tertiaryColor}
                    title="Tertiary"
                    description="Links, buttons, focus borders & labels, tags"
                    onClick={() => {
                        toggleColorPicker(!visibleColorPicker);
                        setSetter('tertiary');
                    }} />

                <ColorDrop
                    color={lighterSecondaryColor}
                    title="Lighter Secondary"
                    description="Secondary level background color (menus...)"
                    onClick={() => {
                        toggleColorPicker(!visibleColorPicker);
                        setSetter('lighterSecondary');
                    }} />

                <ColorDrop
                    color={lightBackgroundColor}
                    title="LightBackground"
                    description="Clear light background, used on cards and lessons"
                    onClick={() => {
                        toggleColorPicker(!visibleColorPicker);
                        setSetter('lightBackground');
                    }} />

                <ColorDrop
                    color={lightTextColor}
                    title="Light Text"
                    description="Links, menu elements & text on a dark background"
                    onClick={() => {
                        toggleColorPicker(!visibleColorPicker);
                        setSetter('lightText');
                    }} />
            </Column>
            {visibleColorPicker && (
                <Colorpicker
                    color={color}
                    setColor={setColor}
                    toggleColorPicker={toggleColorPicker}
                    visibleColorPicker={visibleColorPicker} />
            )}
        </Container>
    );
};

export default Colors;
