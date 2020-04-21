import React from 'react';
import './Header.css';
import Aux from '../../hoc/aux/Aux';
import Menu from '../../components/menu/Menu';
import Help from '../../components/help/Help';

const header = (props) => {
  return (
    <Aux className="Header">
      Header
      <Menu />
      <Help />
    </Aux>
  );
};

export default header;
