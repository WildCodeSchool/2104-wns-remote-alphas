import React, { useRef } from 'react';
import Glide, { Slide } from 'react-glidejs';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import 'react-glidejs/dist/index.css';

const ContainerSlider = styled.div`
border: solid pink;
margin: 50px 14px;
`;

const SlideNumber = styled.div`
width: 250px;
height: 350px;
border: solid red;
background-color: blue;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
  const gliderRef = useRef(null);

  return (
    <ContainerSlider
      className="slide-slide"
    >
      <Glide
        ref={gliderRef}
        type="carousel"
        customSlideAnimation={{
          timeout: 500,
          classNames: 'fade',
        }}
        perView={3}
        startAt={0}
        slideClassName="slider__frame"
        keyboard="true"
        rewind="true"
      >
        <SlideNumber>
          Number One
        </SlideNumber>
        <SlideNumber>
          Number two
        </SlideNumber>
        <SlideNumber>
          Number three
        </SlideNumber>
      </Glide>
    </ContainerSlider>
  );
};
