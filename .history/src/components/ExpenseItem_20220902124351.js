import React from 'react';
import '../styles/ExpenseItem.css'


const ExpenseItem = (props) => {
  console.log(props)

  const { date, title, amount } = props;

  return <h1>{`${date}, ${title}, ${amount}`}</h1>;
}

export default ExpenseItem;