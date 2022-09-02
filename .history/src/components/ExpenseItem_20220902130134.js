import React from 'react';
import '../styles/ExpenseItem.css'


const ExpenseItem = (props) => {

  const { date, title, amount } = props;

  return (
    <div className='expense-item'>
      <div className='expense-item__date'>
        {`${title}`}
      </div>
    </div>)
}

export default ExpenseItem;