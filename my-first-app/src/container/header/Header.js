import React from 'react';
import './Header.css';
import Aux from '../../hoc/aux/Aux';
import Menu from '../../components/menu/Menu';
import Help from '../../components/help/Help';

const headerContent = () => (
  <h1 className="HeaderContent">Welcome to Puccha's and Pucchi's World </h1>
);

const header = (props) => {
  return (
    <div className="MainHeader">
      <header className="Header">
        <Menu />
        {headerContent()}
        <Help />
      </header>
    </div>
  );
};

export default header;
