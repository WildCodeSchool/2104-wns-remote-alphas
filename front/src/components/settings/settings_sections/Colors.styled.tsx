// eslint-disable-next-line object-curly-newline
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
// import useWindowSize from '../../../utils/useWindowSize';
import Context from '../../context/Context';
import Column from '../../core/layout_parts/Column.styled';
import Row from '../../core/layout_parts/Row.styled';
import Colorpicker from '../Colorpicker.styled';
import ColorDrop from '../components/ColorDrop.styled';
import DoubleColorDrop from '../components/DoubleColorDrop.styled';
import Container from '../components/SettingsContainer.styled';

const Text = styled.p`
    font-weight: bold;
`;

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

    // const { width } = useWindowSize();
    /// Fetch current user in context
    const { user } = useContext(Context);
    /// Set as initial data
    // const [userColors, setUserColors] = useState<IUserData>(user);
    console.log(user);

    useEffect(() => {
        console.log('effect');
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
                <Text>Select a theme</Text>
                <Row>
                    <Row>
                        <ColorDrop style={{ backgroundColor: '#292929', border: 'none' }} />
                        <text>Dark</text>
                    </Row>

                    <Row>
                        <ColorDrop style={{ backgroundColor: '#ECEFF1' }} />
                        <text>Light</text>
                    </Row>

                    <DoubleColorDrop lowerColor="#BDBDBD" upperColor="#E0E0E0" title="GreyScale" />

                    <DoubleColorDrop lowerColor="#000" upperColor="#fff" title="High Contrast" />
                </Row>
                <Text>Or set up your own colors :</Text>
                <Row>
                    <ColorDrop
                        style={{ backgroundColor: primaryColor }}
                        onClick={() => {
                            toggleColorPicker(!visibleColorPicker);
                            setSetter('primary');
                            }} />
                    <Text>Primary</Text>
                    <p>Text & background color</p>
                </Row>
                <Row>
                    <ColorDrop
                        style={{ backgroundColor: secondaryColor }}
                        onClick={() => {
                            toggleColorPicker(!visibleColorPicker);
                            setSetter('secondary');
                        }} />
                    <Text>Secondary</Text>
                    <p>Main color to uplight higher level elements</p>
                </Row>
                <Row>
                    <ColorDrop
                        style={{ backgroundColor: tertiaryColor }}
                        onClick={() => {
                            toggleColorPicker(!visibleColorPicker);
                            setSetter('tertiary');
                        }} />
                    <Text>Tertiary</Text>
                    <p>Links, buttons, focus borders & labels, tags</p>
                </Row>
                <Row>
                    <ColorDrop
                        style={{ backgroundColor: lighterSecondaryColor }}
                        onClick={() => {
                            toggleColorPicker(!visibleColorPicker);
                            setSetter('lighterSecondary');
                        }} />
                    <Text>Lighter Secondary</Text>
                    <p>Secondary level background color (menus...)</p>
                </Row>
                <Row>
                    <ColorDrop
                        style={{ backgroundColor: lightBackgroundColor }}
                        onClick={() => {
                            toggleColorPicker(!visibleColorPicker);
                            setSetter('lightBackground');
                        }} />
                    <Text>Light Background</Text>
                    <p>Clear light background, used on cards and lessons</p>
                </Row>
                <Row>
                    <ColorDrop
                        style={{ backgroundColor: lightTextColor }}
                        onClick={() => {
                            toggleColorPicker(!visibleColorPicker);
                            setSetter('lightText');
                        }} />
                    <Text>Light Text</Text>
                    <p>Links, menu elements & text on a dark background</p>
                </Row>
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
