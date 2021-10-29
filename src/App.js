import Expenses from './components/Expenses/Expenses';
import './App.css';
import React, { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpenses';

const DUMMY_DATA = [

];



function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA);



  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  }


  return (
    <div>
      <h2 className='title'>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
