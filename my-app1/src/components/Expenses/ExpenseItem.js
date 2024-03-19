import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title)

  // const clickHandler = () =>{
  //   setTitle("Updated with state!!!");
  //   console.log(title);
  // }

  return (
    <li>
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{ props.title }</h2>
      <div className="expense-item__price">{ props.amount }</div>
    </div>
    {/* <button onClick={()=> {console.log("Clicked")}}>Clicke me</button> */}
    {/* <button onClick={clickHandler}>Click me</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
