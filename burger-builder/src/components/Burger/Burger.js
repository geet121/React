import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredents/BurgerIngredients';

const burger = (props) => {
  let XmedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (XmedIngredients.length === 0) {
    XmedIngredients = <p> Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {XmedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
