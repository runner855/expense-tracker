import React from 'react';
import ExpenseItem from '../components/ExpenseItem';


const App = (props) => {
  console.log(props)





  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem date={props} title={props.title} amount={props} />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />



    </div>
  );
}

export default App;
