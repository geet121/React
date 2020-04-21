import React from 'react';
import './Faq.css';

const faq = (props) => {
  return <div className="Faq">FAQ {props.children}</div>;
};

export default faq;
