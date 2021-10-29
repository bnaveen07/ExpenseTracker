import ExpenseItem from './ExpenseItem'
import React from 'react'
import './ExpensesList.css'



function ExpensesList(props) {
  if (props.item.length === 0) {
    return (<h2 className='expenses-list__fallback'>No Expenses Found</h2>);
  }

  return <ul className='expenses-list'>
    {props.item.map(expenses =>
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />)
    }
  </ul>
}

export default ExpensesList;