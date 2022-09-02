import React from 'react';
import '../styles/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import moment from 'moment';


const ExpenseItem = (props) => {

  const { date, title, amount } = props;
  const month = moment(date).format(' MMMM')
  const year = moment(date).format(" YYYY ")
  const day = moment(date).format('Do')


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