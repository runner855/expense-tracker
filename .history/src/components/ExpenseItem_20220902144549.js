import React from 'react';
import '../styles/ExpenseItem.css'
import moment from 'moment';


const ExpenseItem = (props) => {

  const { date, title, amount } = props;
  const newDate = date;
  console.log(newDate)

  return (
    <div className='expense-item'>
      <div className='expense-item__date'>
        {`${newDate}`.to}
      </div>
      <div className='expense-item__description'>
        <h2>{`${title}`}</h2>
        <div className='expense-item__price'>
          ${`${amount}`}
        </div>
      </div>
    </div>)
}

export default ExpenseItem;