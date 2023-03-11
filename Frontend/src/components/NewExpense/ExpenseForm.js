import React, { useState } from 'react';

import styles from './ExpenseForm.module.css';

const ExpenseForm = (props) => {

    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');
    const [ enteredDate, setEnteredDate ] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={ submitHandler }>
            <div className={ styles[ 'new-expense__controls' ] }>
                <div className={ styles[ 'new-expense__control' ] }>
                    <label>Title</label>
                    <input type='text' onChange={ titleChangeHandler } value={ enteredTitle } />
                </div>
                <div className={ styles[ 'new-expense__control' ] }>
                    <label>Amount</label>
                    <input type='number' onChange={ amountChangeHandler } value={ enteredAmount } />
                </div>
                <div className={ styles[ 'new-expense__control' ] }>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={ dateChangeHandler } value={ enteredDate } />
                </div>
            </div>
            <div className={ styles[ 'new-expense__actions' ] }>
                <button type="button" onClick={ props.onCancel } > Cancel </button>
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    );
};

export default ExpenseForm;