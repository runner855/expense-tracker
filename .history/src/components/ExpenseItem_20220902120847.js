import React from 'react';
import '../styles/ExpenseItem.css'
import moment from 'moment';


const ExpenseItem = (props) => {
  console.log(props)
  const expenseDate = new Date(2021, 2, 28);
  const formattedDate = moment(expenseDate).format('LL')
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  return (
    <div className='expense-item'>
      <div>{formattedDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;