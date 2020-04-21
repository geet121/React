import React from 'react';
import './MiddleWare.css';
import Aux from '../../hoc/aux/Aux';
import LeftPortion from './leftPortion/LeftPortion';
import CenterPortion from './centerPortion/CenterPortion';
import RightPortion from './rightPortion/RightPortion';

const middleWare = (props) => {
  return (
    <Aux className="MiddleWare">
      <LeftPortion />
      <CenterPortion />
      <RightPortion />
    </Aux>
  );
};

export default middleWare;
