/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { HexColorPicker } from 'react-colorful';
import styled from 'styled-components';
import ColorDrop from './components/ColorDrop.styled';

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
    z-index: 30;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Content = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
`;

interface ColorpickerProps {
    setColor: (e: string) => void
    toggleColorPicker: (e: boolean) => void
    visibleColorPicker: boolean
    color: string
}

const Colorpicker = ({
    setColor,
    color,
    toggleColorPicker,
    visibleColorPicker
}: ColorpickerProps): JSX.Element => (
    <>
        <Overlay onClick={() => toggleColorPicker(!visibleColorPicker)} />
        <Modal>
            <Content>
                <HexColorPicker color={color} onChange={setColor} />
                <ColorDrop style={{ backgroundColor: color }} />
                Current color is {color}
            </Content>
            <button type="button" onClick={() => toggleColorPicker(!visibleColorPicker)}>Close</button>
        </Modal>
    </>
);

export default Colorpicker;
