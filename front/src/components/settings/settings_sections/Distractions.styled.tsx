import { useState } from 'react';
import styled from 'styled-components';

import H1 from '../../authentication/components/typos/H1.styled';
import H2 from '../../authentication/components/typos/H2.styled';
import Bold from '../../core/Bold.styled';
import SwitchButton from '../../core/buttons/switchButton';
import Column from '../../core/layout_parts/Column.styled';
import Row from '../../core/layout_parts/Row.styled';
import Container from '../components/SettingsContainer.styled';

const Label = styled.p`
  width: 50%;
`;

const Distractions = (): JSX.Element => {
  const [pandaTipsDisabled, disablePandaTips] = useState(false);
  const [chatroomDisabled, disableChatroom] = useState(false);

  return (
    <Container>
      <Column>
        <H1 style={{ color: '#292929' }}>Choose distractions level</H1>
        <Column>
          <Row style={{ alignItems: 'flex-start' }}>
            <H2 style={{ color: '#292929' }}>Panda Tips</H2>
            <SwitchButton checked={pandaTipsDisabled} setChecked={disablePandaTips} />
          </Row>
          <Label>
            Show up a panda bear every two hours with a rest reminder and a rest count
            down for ten minutes.
          </Label>
        </Column>
        <Column>
          <Row style={{ alignItems: 'flex-start' }}>
            <H2 style={{ color: '#292929' }}>Instant Chat</H2>
            <SwitchButton checked={chatroomDisabled} setChecked={disableChatroom} />
          </Row>
          <Label>Turn the chatroom on or off</Label>
        </Column>
      </Column>
    </Container>
  );
};

export default Distractions;
