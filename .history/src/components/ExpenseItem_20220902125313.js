import React from 'react';
import '../styles/ExpenseItem.css'


const ExpenseItem = (props) => {

  const { city, country, title } = props;

  return <h1>{`${city}, ${country}, ${title}`}</h1>;
}

export default ExpenseItem;