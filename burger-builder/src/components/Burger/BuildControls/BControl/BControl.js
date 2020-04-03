import React from 'react';

import classes from './BControl.css';

const bControl = (props) => (
  <div className={classes.BControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);
export default bControl;
