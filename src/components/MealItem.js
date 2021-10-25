import React, {useState, useEffect} from 'react';
import './MealItem.css';

const MealItem = (props) => {

    const [numMeals, setNumMeals] = useState(0);

    useEffect(() => {
        setNumMeals
    }, [numMeals])

    const onAddHandler = () => {
        console.log('Add button hit for item: ' + props.item.title);
    }

    return (
        <div>
            <h1>{props.item.title}</h1>
            <p>{props.item.description}</p>
            <p>{props.item.amount}</p>
            <input type="number" min="0" step="1" />
            <button onClick={onAddHandler}>Add</button>
        </div>
    );
}

export default MealItem;