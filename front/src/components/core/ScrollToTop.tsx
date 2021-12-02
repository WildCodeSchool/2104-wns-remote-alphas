import React, { useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    align-self: self-end;
    width: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ContainerIcon = styled.div`
    width: 32px;
`;

const Icon = styled.img`
    width: 100%;
`;

const Text = styled.p`
  color: white;
`;

// eslint-disable-next-line max-len
function ScrollToTop(): JSX.Element {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = (): void => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    const componentDidMount = () => {
        document.addEventListener('scroll', () => {
          toggleVisibility();
        });
      };
    const scrollToTop = (): void => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };
    return (
      <Content>
        {isVisible && (
          <ContainerIcon onClick={() => scrollToTop()} onKeyDown={() => scrollToTop()} role="button" tabIndex={0}>
              <Icon src="/assets/icons/016-caret-arrow-up.svg" alt="arrow icon" />
          </ContainerIcon>
        )}
        <Text>Back to top</Text>
      </Content>
    );
}

export default ScrollToTop;
