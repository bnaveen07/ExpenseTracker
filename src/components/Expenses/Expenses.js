import ExpenseItem from './ExpenseItem';
import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses(props) {

  const [FilteredYear, setFilteredYear] = useState('2020')

  const getYear = year => {
    setFilteredYear(year);
  }

  const filteredChnageHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }


  const filteredExpense = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === FilteredYear;
  }

  )

  return (
    <div>

      <Card className="expenses">
        <ExpensesFilter selected={FilteredYear} onChangeFilter={filteredChnageHandler} FilteredYear={getYear} />
        {
          filteredExpense.map(expenses => <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />)
        }
      </Card>
    </div>
  );
}

export default Expenses;
