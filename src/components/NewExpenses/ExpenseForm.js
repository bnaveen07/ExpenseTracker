import { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const inputChangeHandler = (event) => {
    setEnteredTitle(() => {
      return event.target.value
    });
  }
  const [enteredAmount, setEnteredAmount] = useState('')
  const amountChangeHandler = (event) => {
    setEnteredAmount(() => { return event.target.value });
  }
  const [enteredDate, setEnteredDate] = useState('')
  const dateChangeHandler = (event) => {
    setEnteredDate(() => { return event.target.value });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)

    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  }

  return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label for='title'>Title</label>
        <input required value={enteredTitle} onChange={inputChangeHandler} type='text' id='title' />
      </div>
      <div className='new-expense__control'>
        <label for='amount'>Amount</label>
        <input required value={enteredAmount} type='number' onChange={amountChangeHandler} id='amount' min='0.01' step='0.01' />
      </div>
      <div className='new-expense__control'>
        <label for='date'>Date</label>
        <input required value={enteredDate} type='date' onChange={dateChangeHandler} id='date' min='2021-10-22' max='2024-10-22' />
      </div>

    </div>

    <div className='new-expense__actions'>
      <button type='submit'>
        Add Expenses
      </button>
    </div>
  </form>
}

export default ExpenseForm;