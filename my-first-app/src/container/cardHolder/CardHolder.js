import React from 'react';
import './CardHolder.css';
import Aux from '../../hoc/aux/Aux';
import Cards from '../../components/cards/Cards';

const cardHolder = (props) => {
  return (
    <Aux className="CardHolder">
      <Cards />
    </Aux>
  );
};

export default cardHolder;
