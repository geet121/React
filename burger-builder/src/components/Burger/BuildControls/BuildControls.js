import React from 'react';

import classes from './BuildControls.css';
import BControl from './BControl/BControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientsAdded(ctrl.type)}
        removed={() => props.ingredientsRemoved(ctrl.type)}
      />
    ))}
  </div>
);
export default buildControls;
