/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { HexColorPicker } from 'react-colorful';
import styled from 'styled-components';

/**
 * Colorpicker displays a modal color picker
 */

const Overlay = styled.div`
    position: fixed;
    z-index: 20;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`;

const Modal = styled.div`
    position: fixed;
    background-color: #fefefe;
    border-radius: 30px;
    margin: auto;
    padding: 3em;
    width: 30%;
    height: 30%;
    display: flex;
    gap: 1em;
    z-index: 30;
`;

const ColorDrop = styled.div`
    background-color: #000;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid #4E4E4E;
`;

interface ColorpickerProps {
    setColor: (e: string) => void
    color: string
}

const Colorpicker = ({
    setColor,
    color
}: ColorpickerProps): JSX.Element => (
    <>
        <Overlay />
        <Modal>
            <HexColorPicker color={color} onChange={setColor} />
            <ColorDrop style={{ backgroundColor: color }} />
            Current color is {color}
        </Modal>
    </>
);

export default Colorpicker;
