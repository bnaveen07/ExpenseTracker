
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css';

const NewExpense = (props) => {
  const [isEdting, isSetEdting] = useState(false);


  const onSaveExpenseDataHandler = (enteredExpenseData) => {


    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    isSetEdting(false);
  };

  useState((''), JSON.stringify(props.expenseData));
  const startEditingExpenseHandler = () => {
    isSetEdting(true);
  }

  const stopEditingExpenseHandler = () => {
    isSetEdting(false);
  }


  return <div className='new-expense'>
    {!isEdting && <button onClick={startEditingExpenseHandler}>Add New Expenses</button>}
    {isEdting && <ExpenseForm onCancel={stopEditingExpenseHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
  </div>
}

export default NewExpense;