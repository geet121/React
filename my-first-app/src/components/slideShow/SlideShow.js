import React from 'react';

import { Slide } from 'react-slideshow-image';
// https://www.npmjs.com/package/react-slideshow-image

import {
  SliderContainer,
  EachSlideSpan,
  EachSlideDiv,
  BackgroundImage,
} from './SlideShow.styles';

const properties = {
  duration: 50000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const baseUrl = '../../Images/';

const slideImages = [
  {
    imgUrl: baseUrl + 'worldMap.jpg',
    className: 'each-slide',
    message: 'Slide1',
  },
  {
    imgUrl: baseUrl + 'worldMap.jpg',
    className: 'each-slide',
    message: 'Slide 2',
  },
];

const ImageToDisplay = (props) => (
  <EachSlideDiv>
    <BackgroundImage backgroundImage={`url(./worldMap.jpg)`}>
      <EachSlideSpan>{props.message}</EachSlideSpan>
    </BackgroundImage>
  </EachSlideDiv>
);

const Slideshow = () => {
  return (
    <SliderContainer>
      <Slide {...properties}>
        {slideImages.map((image, i) => (
          <ImageToDisplay
            imgUrl={image.imgUrl}
            message={image.message}
            key={i}
          />
        ))}
      </Slide>
    </SliderContainer>
  );
};

export default Slideshow;
