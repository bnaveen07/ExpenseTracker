import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import Chart from '../Chart/Chart';
import ExpensesChart from './ExpensesChart';

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
    <li>

      <Card className="expenses">

        <ExpensesFilter selected={FilteredYear} onChangeFilter={filteredChnageHandler} FilteredYear={getYear} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList item={filteredExpense} />
      </Card>
    </li>
  );
}

export default Expenses;
