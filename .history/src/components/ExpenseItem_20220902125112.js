import React from 'react';
import '../styles/ExpenseItem.css'


const ExpenseItem = (props) => {

  const { city, country } = props;

  return <h1>{`${city}, ${country}`}</h1>;
}

export default ExpenseItem;