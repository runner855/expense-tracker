import React from 'react';
import ExpenseItem from '../components/ExpenseItem';


const App = (props) => {
  console.log(props)





  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem title={props.expense.title} />



    </div>
  );
}

export default App;
