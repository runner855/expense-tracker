import React from 'react';
import moment from 'moment';



const ExpenseDate = (props) => {
  const month = moment(props.date).format(' MMMM');
  const year = moment(props.date).format(" YYYY ");
  const day = moment(props.date).format('Do');


  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>


    </div>
  );
}

export default ExpenseDate;