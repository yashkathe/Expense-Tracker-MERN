const express = require('express');

const router = express.Router();

const expenseControllers = require('../controllers/expense-controller');

router.get('/', expenseControllers.getExpensesById);

router.post('/addExpense', expenseControllers.createCoupon);

module.exports = router;