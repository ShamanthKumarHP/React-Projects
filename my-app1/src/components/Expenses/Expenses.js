import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onExpensesFilter = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter( expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onExpensesFilter}
        />
        {/* {filteredExpenses.length === 0 && <p>No items found</p>}
        
        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id} //without this it will add element to last in UI element list and it reloads/swaps items in the list in UI then adds new element placed in last.
                              // So use a unique key to update in-place which will improve performance
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />

      </Card>
    </div>
  );
};
export default Expenses;
