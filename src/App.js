import Expenses from './components/Expenses/Expenses';
import './App.css';
import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpenses/NewExpenses';

const DUMMY_DATA = [

];

const expenses = JSON.parse(localStorage.getItem('expense'));

function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA);


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expenses));
  }, [expenses]);
  return (
    <div>
      <h2 className='title'>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
