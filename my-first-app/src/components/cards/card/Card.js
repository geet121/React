import React from 'react';
import { Card, Name, Image, Button } from './Card.styles';

const card = (props) => {
  return (
    <Card>
      <Image src={props.imageName} alt="" />
      <Name>
        <h3>{props.title}</h3>
        <div>{props.content}</div>
        <Button>Read more</Button>
      </Name>
    </Card>
  );
};

export default card;
