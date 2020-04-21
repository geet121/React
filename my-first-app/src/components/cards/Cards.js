import React from 'react';
import Card from './card/Card';
import { Cards } from './Cards.styles';
import image from '../../Images/worldMap.jpg';

const arrayOfCard = [
  {
    imageName: image,
    title: 'One',

    content: 'A short discription of a Card',
  },
  {
    imageName: image,
    title: 'Two',

    content: 'A short discription of a Card',
  },
  {
    imageName: image,
    title: 'Four ',
    content: 'A short discription of a Card',
  },
];

const cards = (props) => {
  return (
    <Cards>
      {arrayOfCard.map((element) => (
        <Card
          imageName={element.imageName}
          title={element.title}
          content={element.content}
        />
      ))}
    </Cards>
  );
};

export default cards;
