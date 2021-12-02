import React, { useContext, useState } from 'react';
// import { HexColorPicker } from 'react-colorful';
import styled from 'styled-components';
// import useWindowSize from '../../../utils/useWindowSize';
import Context from '../../context/Context';

const Circle = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid #4E4E4E;
    z-index: 10;
`;

const LowerCircle = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid #4E4E4E;
    position: relative;
    left: 28px;
`;

const Container = styled.div`
    display: grid;
    flex-direction: column;
    margin: ${(props) => props.theme.margin.generic.large};
    flex-wrap: wrap;
    justify-content: stretch;
    width: 60%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: ${(props) => props.theme.margin.generic.small};
    gap: 0;
`;

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
    const [color, setColor] = useState('#aabbcc');
    // const { width } = useWindowSize();
    /// Fetch current user in context
    const { user } = useContext(Context);
    /// Set as initial data
    // const [userColors, setUserColors] = useState<IUserData>(user);
    console.log(user);
    return (
        <Container>
            <Column>
                <Text>Select a theme</Text>
                <Row>
                    <Row>
                        <Circle style={{ backgroundColor: '#292929', border: 'none' }} />
                        <text>Dark</text>
                    </Row>

                    <Row>
                        <Circle style={{ backgroundColor: '#ECEFF1' }} />
                        <text>Light</text>
                    </Row>

                    <Row>
                        <LowerCircle style={{ backgroundColor: '#BDBDBD' }} />
                        <Circle style={{ backgroundColor: '#E0E0E0' }} />
                        <text>GreyScale</text>
                    </Row>

                    <Row>
                        <LowerCircle style={{ backgroundColor: '#000' }} />
                        <Circle style={{ backgroundColor: '#fff' }} />
                        <text>High Contrast</text>
                    </Row>
                </Row>
                <Text>Or set up your own colors :</Text>
                {/* <HexColorPicker color={color} onChange={setColor} /> */}
                <Row>
                    <Circle style={{ backgroundColor: '#292929' }} />
                    <Text>Primary</Text>
                    <p>Text & background color</p>
                </Row>
                <Row>
                    <Circle style={{ backgroundColor: '#68D0FC' }} />
                    <Text>Secondary</Text>
                    <p>Main color to uplight higher level elements</p>
                </Row>
                <Row>
                    <Circle style={{ backgroundColor: '#FE7F2D' }} />
                    <Text>Tertiary</Text>
                    <p>Links, buttons, focus borders & labels, tags</p>
                </Row>
                <Row>
                    <Circle style={{ backgroundColor: '#4E4E4E' }} />
                    <Text>Lighter Secondary</Text>
                    <p>Secondary level background color (menus...)</p>
                </Row>
                <Row>
                    <Circle style={{ backgroundColor: '#ECEFF1' }} />
                    <Text>Light Background</Text>
                    <p>Clear light background, used on cards and lessons</p>
                </Row>
                <Row>
                    <Circle style={{ backgroundColor: '#D1DCE5' }} />
                    <Text>Light Text</Text>
                    <p>Links, menu elements & text on a dark background</p>
                </Row>
            </Column>
        </Container>
    );
};

export default Colors;
