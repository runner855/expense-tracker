import React from 'react';
import ExpenseItem from '../components/ExpenseItem';


const App = (props) => {





  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem date={props.date} title={props.title} amount={props.amount} />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />



    </div>
  );
}

export default App;
