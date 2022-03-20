import { useContext, useRef } from 'react';
import { HexColorPicker } from 'react-colorful';
import styled from 'styled-components';

import {
  getKeyboardFocusableElements,
  keyDownHandler,
  restoreTabIndex,
} from '../../utils/trapFocus';
import { COLORS, COLORTHEMES } from '../../utils/types';
import Context from '../context/Context';
import Button from '../core/buttons/Button.styled';
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
  background-color: rgba(0, 0, 0, 0.4);
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
  setter: COLORS;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  toggleColorPicker: (e: boolean) => void;
  visibleColorPicker: boolean;
  color: string;
}

const Colorpicker = ({
  setColor,
  color,
  toggleColorPicker,
  visibleColorPicker,
  setter,
}: ColorpickerProps): JSX.Element => {
  const modalRef = useRef(null);
  const { user, setUser } = useContext(Context);
  // Get all the focusable elements for modal focus trap
  const focusableElements = getKeyboardFocusableElements();

  function onEscape() {
    toggleColorPicker(!visibleColorPicker);
    restoreTabIndex(focusableElements);
    const index = [
      COLORS.PRIMARY,
      COLORS.SECONDARY,
      COLORS.TERTIARY,
      COLORS.QUATERNY,
      COLORS.LIGHT_BACKGROUND,
      COLORS.TEXT_COLOR,
    ].indexOf(setter);
    if (typeof index !== 'number') return;
    setUser({
      ...user,
      settings: {
        ...user.settings,
        colors: {
          ...user.settings.colors,
          theme:
            user.settings.colors.customColors[index] === color
              ? user.settings.colors.theme
              : COLORTHEMES.CUSTOM,
          customColors: user.settings.colors.customColors.map((currentColor, i) =>
            i === index ? color : currentColor,
          ),
        },
      },
    });
  }

  return (
    <>
      <Overlay onClick={() => onEscape()} />
      <Modal
        ref={modalRef}
        onKeyDown={(event: React.KeyboardEvent) =>
          keyDownHandler(onEscape, event, modalRef)
        }>
        <Content>
          <HexColorPicker color={color} onChange={setColor} />
          <ColorDrop color={color} />
          Current color is {color}
        </Content>
        <Button type="button" onClick={() => onEscape()}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default Colorpicker;
