import React from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Meals from './components/Meals';


function App() {

    const meals = [
        {title: "Meal 1", description: "Meal 1 Desc", amount: 100},
        {title: "Meal 2", description: "Meal 2 Desc", amount: 200},
        {title: "Meal 3", description: "Meal 3 Desc", amount: 300}
    ]

    return (
        <React.Fragment>
            <Header/>
            <Meals items={meals}/>
            {/*<Cart/>*/}
        </React.Fragment>
    );
}

export default App;
