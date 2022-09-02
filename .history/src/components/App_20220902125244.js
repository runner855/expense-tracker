import React from 'react';
import ExpenseItem from '../components/ExpenseItem';


const App = (props) => {





  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem city={props.location.city} country={props.location.country} />



    </div>
  );
}

export default App;
