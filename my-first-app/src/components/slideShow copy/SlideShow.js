import React from 'react';

import { Slide } from 'react-slideshow-image';
// https://www.npmjs.com/package/react-slideshow-image

import './SlideShow.css';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const slideImages = [
  {
    imgUrl: '../../Images/worldMap.jpg',
    className: 'each-slide',
    message: 'Slide1',
  },
  {
    imgUrl: '../../Images/worldMap.jpg',
    className: 'each-slide',
    message: 'Slide2',
  },
];

const ImageToDisplay = (props) => (
  <div className={props.className}>
    <div style={{ backgroundImage: `url(${slideImages[props.imgUrl]}` }}>
      <span>{props.message}</span>
    </div>
  </div>
);

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((image) => (
          <ImageToDisplay
            className={image.className}
            imgUrl={image.imgUrl}
            message={image.message}
          />
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
