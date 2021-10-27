import './App.css';
import React from 'react';
import Expense from './components/Expenses';

//Functional Component

function App() {

  const expenses=[
    {
        id:'e1',
        title:'Tolilet Paper',
        amount:94.34,
        date:new Date(2021,7,15)
    },
    {
        id:'e2',
        title:'New Tv',
        amount:799.49,
        date:new Date(2021,2,12)
    },
    {
        id:'e3',
        title:'Car Insurance',
        amount:294.34,
        date:new Date(2021,2,20)
    },
    {
        id:'e4',
        title:'New Desk(Wooden)',
        amount:450,
        date:new Date(2021,5,20)
    }
    
    ];
  return (
   <div>
     <h2>First Example</h2>
     <Expense items={expenses} />
     </div>
  );
}


export default App;
