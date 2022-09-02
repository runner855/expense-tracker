import React from 'react';
import '../styles/ExpenseItem.css'
import moment from 'moment';


const ExpenseItem = (props) => {

  const { date, title, amount } = props;
  console.log(props.expenses)

  return <h1>{`${date}, ${title}, ${amount}`}</h1>;
}

export default ExpenseItem;