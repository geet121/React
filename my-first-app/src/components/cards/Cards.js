import React from 'react';
import Card from './card/Card';
import './Cards.css';
import image from '../../logo.svg';

const arrayOfCard = [
  {
    imageName: image,
    name: 'One',
  },
  {
    imageName: image,
    name: 'Two',
  },
  {
    imageName: image,
    name: 'Three',
  },
  {
    imageName: image,
    name: 'Four ',
  },
  {
    imageName: image,
    name: 'Four ',
  },
];
const cards = (props) => {
  return (
    <div className="Cards">
      {arrayOfCard.map((element) => (
        <Card imageName={element.imageName} name={element.name} />
      ))}
    </div>
  );
};

export default cards;
