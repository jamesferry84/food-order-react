import React from 'react';
import './Cart.css';
import MealItem from './MealItem';

const Meals = (props) => {
    return (
        props.items.map( item => (
            <MealItem item={item} />
        )
    ));
}

export default Meals;