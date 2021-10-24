import ExpenseItem from './ExpenseItem';
import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses(props) {

  const [currentYear, setFilterYear] = useState('2020')

  const getYear = year => {
    setFilterYear(year);
    console.log(year);
  }

  return (
    <div>

      <Card className="expenses">
        <ExpensesFilter selected={currentYear} FilteredYear={getYear} />
        {
          props.items.map(expenses => <ExpenseItem
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
