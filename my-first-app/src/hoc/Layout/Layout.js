import React from 'react';
import Header from '../../container/header/Header';
import CardHolder from '../../container/cardHolder/CardHolder';
import Aux from '../aux/Aux';
import MiddleWare from '../../container/middleWare/MiddleWare';
import Faq from '../../container/faq/Faq';
import Slideshow from '../../components/slideShow/SlideShow';

const layout = () => {
  return (
    <Aux>
      <Header />
      <CardHolder />
      <Slideshow />
      <MiddleWare />
      <Faq />
    </Aux>
  );
};

export default layout;
