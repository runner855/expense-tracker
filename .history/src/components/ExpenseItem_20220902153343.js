import React from 'react';
import '../styles/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';


const ExpenseItem = (props) => {

  const { title, amount } = props;



  return (
    <div className='expense-item'>
      <ExpenseDate />
      <div className='expense-item__description'>
        <h2>{`${title}`}</h2>
        <div className='expense-item__price'>
          ${`${amount}`}
        </div>
      </div>
    </div>)
}

export default ExpenseItem;