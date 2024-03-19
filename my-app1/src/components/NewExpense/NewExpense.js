import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false)

    }
    const setEditingHandler = () => {
        setIsEditing(true);
    }
    
    const stopEditingHandler = () =>{
        setIsEditing(false)
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={setEditingHandler}>Add new button</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditingHandler}/> }
        </div>
    )

}

export default NewExpense;