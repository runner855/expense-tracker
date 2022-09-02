import React from 'react';
import ExpenseItem from '../components/ExpenseItem';


const App = (props) => {
  console.log(props)





  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount} />
      <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount} />
      <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount} />
      <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title} amount={props.expenses[3].amount} />






    </div>
  );
}

export default App;
