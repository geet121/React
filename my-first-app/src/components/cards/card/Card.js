import React from 'react';
import './Card.css';

const card = (props) => {
  return (
    <div className="Card">
      <img src={props.imageName} className="Image" />
      <div className="Name">Name {props.name}</div>
    </div>
  );
};

export default card;
