import React from 'react';
import ExpenseItem from '../components/ExpenseItem';


const App = (props) => {
  console.log(props)





  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount} />



    </div>
  );
}

export default App;
