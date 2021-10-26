import logo from './logo.svg';
import './App.css';
import React from 'react';
import ExpenseItem from './components/expenseItem';

//Functional Component

function App() {

  const expenses=[
    { title:'New Tv',amount:799.49,date:new Date(2021,2,12)},
    { title:'Car Insurance',amount:294.34, date:new Date(2021,2,20)}
  ]
  return (
   <div>
     <ExpenseItem title="New Tv" amount="799.49" date="new Date(2021,2,12)" />
     <ExpenseItem  title="New Tv" amount="799.49" date="new Date(2021,2,12)" />
     </div>
  );
}


export default App;
