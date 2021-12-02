import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../../../utils/useWindowSize';

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

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5em;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.theme.margin.generic.small};
    gap: ${(props) => props.theme.margin.generic.small};
`;

const Text = styled.text`
    font-weight: bold;
`;

const Colors = (): JSX.Element => {
    const { width } = useWindowSize();

    return (
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

        </Column>
    );
};

export default Colors;
