import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    align-self: self-end;
    width: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    position: relative;

`;

const ContainerIcon = styled.div`
    width: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 108px;
    @media screen and (max-width: 780px) {
      bottom: -10px;
    } 
`;

const Icon = styled.img`
    width: 45%;
`;

const Text = styled.p`
  color: white;
  @media screen and (max-width: 780px) {
    font-size: 12px;
  } 
`;

// eslint-disable-next-line max-len
function ScrollToTop(): JSX.Element {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      document.addEventListener('scroll', () => {
        if (window.pageYOffset > 790) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, []);

    const scrollToTop = (): any => {
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
                <>
                <Text>Back to top</Text>
                </>
            </ContainerIcon>
        )}
      </Content>
    );
}

export default ScrollToTop;
