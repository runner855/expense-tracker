import React from 'react';
import '../styles/ExpenseItem.css'
import moment from 'moment';


const ExpenseItem = (props) => {

  const { date, title, amount } = props;
  console.log(props.expenses)
  const expenseDate = new Date(2021, 2, 28);
  const formattedDate = moment(expenseDate).format('LL')
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  return (
    <div className='expense-item'>
      <div>{moment(props.date).format('LL')}</div>
      <div className='expense-item__description'>
        <h2>{`${props.title}`}</h2>
        <div className='expense-item__price'>{`${props.amount}`}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;