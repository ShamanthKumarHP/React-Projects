import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) =>{
    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return <ul className="expenses-list">
        {
            props.items.map((expense) => (<ExpenseItem
                key = {expense.id} //without this it will add element to last in UI element list and it reloads/swaps items in the list in UI then adds new element placed in last.
                                // So use a unique key to update in-place which will improve performance
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />))
        }

    </ul>
}

export default ExpensesList;