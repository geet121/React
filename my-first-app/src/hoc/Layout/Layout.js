import React from 'react';
import Header from '../../container/header/Header';
import CardHolder from '../../container/cardHolder/CardHolder';
import Aux from '../aux/Aux';
import MiddleWare from '../../container/middleWare/MiddleWare';
import Faq from '../../container/faq/Faq';

const layout = () => {
  return (
    <Aux>
      <Header />
      <CardHolder />
      <MiddleWare />
      <Faq />
    </Aux>
  );
};

export default layout;
