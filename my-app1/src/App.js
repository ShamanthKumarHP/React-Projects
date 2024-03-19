import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMYEXPENSES = [
    {
      id: "e1",
      title: "Paper",
      amount: 94.12,
      date: new Date(2020, 17, 14), 
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49,
       date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2019, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);
  // return React.createElement(
  //       'div', 
  //       {}, 
  //       React.createElement('h2',{}, "Lets get started"), 
  //       React.createElement(Expenses, {item: expenses})
  // );
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>[expense, ...prevExpenses]);
    console.log(expense)
  }
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    <div>
      <Expenses items={expenses} />
    </div>
    </div>
  );
}

export default App;
