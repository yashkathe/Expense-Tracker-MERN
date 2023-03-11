import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

import styles from './Expenses.module.css';

const Expenses = (props) => {
    const [ filteredYear, setFilteredYear ] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className={ styles[ 'expenses' ] }>
                <ExpenseFilter
                    selected={ filteredYear }
                    onChangeFilter={ filterChangeHandler }
                />
                <ExpensesChart expenses={ filteredExpenses } />
                <ExpensesList items={ filteredExpenses } />
            </Card>
        </div>
    );
};

export default Expenses;