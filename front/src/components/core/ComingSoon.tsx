import React from 'react';
import styled from 'styled-components';

const ContentSoon = styled.div`
  padding: 2em;
  background-color: ${(props) => props.theme.colors.opposite};
  box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
    padding: 3%;
  }
`;

const Image = styled.div`
  margin: auto;
  margin-right: 94px;
  display: flex;
  @media screen and (max-width: 780px) {
    margin: auto;
    width: 40%;
  }
`;

const PandaRun = styled.img`
  width: 100%;
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.altTextColor};
  @media screen and (max-width: 780px) {
    font-size: 20px;
  }
  @media (min-width: 450px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const ComingSoon = (): JSX.Element => (
  <ContentSoon>
    <Image>
      <PandaRun
        src="/assets/images/running_panda.png"
        alt="illustration of panda is running"
      />
    </Image>
    <Text>Coming Soon !</Text>
  </ContentSoon>
);

export default ComingSoon;
