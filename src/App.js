import Expenses from './components/Expenses/Expenses';
import './App.css';
import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpenses/NewExpenses';

const DUMMY_DATA = [

];

const getDataFromLS = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data) {
    return JSON.parse(localStorage.getItem('data'));
  }
}


function App() {

  const [expenses, setExpenses] = useState(getDataFromLS);

  const data = expenses;
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);




  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
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
