/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef } from 'react';
import { HexColorPicker } from 'react-colorful';
import styled from 'styled-components';
import { keyDownHandler } from '../../utils/trapFocus';
import ColorDrop from './components/ColorDrop.styled';

/**
 * Colorpicker displays a modal color picker
 */

// TODO: style button and create core component
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
    align-items: flex-start;
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
}: ColorpickerProps): JSX.Element => {
    const modalRef = useRef(null);
    function onEscape() {

    }

    return (
        <>
            <Overlay onClick={() => toggleColorPicker(!visibleColorPicker)} />
            <Modal ref={modalRef}>
                <Content onKeyDown={(event: any) => keyDownHandler(onEscape, event, modalRef)}>
                    <HexColorPicker color={color} onChange={setColor} />
                    <ColorDrop color={color} />
                    Current color is {color}
                </Content>
                <button type="button" onClick={() => toggleColorPicker(!visibleColorPicker)}>Close</button>
            </Modal>
        </>
    );
};

export default Colorpicker;
