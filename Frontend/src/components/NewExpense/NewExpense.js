import React, { useState } from 'react';

import ExpenseForm from "./ExpenseForm";

import styles from './NewExpense.module.css';

const NewExpense = (props) => {

    const [ isEditing, setIsEditing ] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className={ styles[ 'new-expense' ] }>
            { !isEditing && <button onClick={ startEditingHandler } >Add New Expense</button> }
            { isEditing && <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } onCancel={ stopEditingHandler } /> }
        </div>
    );
};

export default NewExpense;