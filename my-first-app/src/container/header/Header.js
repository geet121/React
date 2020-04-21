import React from 'react';
import { Header, MainHeader, HeaderContent } from './Header.styles';
import Menu from '../../components/menu/Menu';
import Help from '../../components/help/Help';

const headerContent = () => (
  <HeaderContent>Welcome to Puccha's and Pucchi's World </HeaderContent>
);

const header = (props) => {
  return (
    <MainHeader>
      <Header>
        <Menu />
        {headerContent()}
        <Help />
      </Header>
    </MainHeader>
  );
};

export default header;
