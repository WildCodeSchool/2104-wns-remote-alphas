/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Tabable from '../core/accessibility/Tabable.Styled';

/**
 * Display a panda every two hours.
 * The panda reminds to the user to take a break (opens a modal on click).
 */
const Image = styled.img`
  width: 100px;
  position: absolute;
  bottom: 100px;
  right: 100px;
  cursor: pointer;
`;

const Timer = styled.div<{ visible?: boolean }>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const PandaTips = (): JSX.Element => {
  const [pandaVisible, setPandaVisibility] = useState(false);

  useEffect(() => {
    // Show panda every 2 hours
    const timer = setTimeout(() => {
      setPandaVisibility(true);
    }, 7200000);
    return () => clearTimeout(timer);
  }, []);

  function launchPandaTimer() {
    const timer = setInterval(() => {
      setPandaVisibility(true);
    }, 7200000);
    return () => clearInterval(timer);
  }

  function handleClick() {
    console.log('clicked or key pressed !');
    // TODO: open modal
    setPandaVisibility(false);
    launchPandaTimer();
  }

  return (
    <Timer visible={pandaVisible}>
      <Tabable
        onClick={() => handleClick()}
        pressedKey="Enter"
        onKeyPress={() => handleClick()}>
        <Image src="/assets/images/133706.png" alt="open panda tips" />
      </Tabable>
    </Timer>
  );
};

export default PandaTips;
