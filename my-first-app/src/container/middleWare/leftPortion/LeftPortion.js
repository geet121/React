import React from 'react';
import './LeftPortion.css';

const leftPortion = (props) => {
  return <div className="LeftPortion">LeftPortion {props.children}</div>;
};

export default leftPortion;
