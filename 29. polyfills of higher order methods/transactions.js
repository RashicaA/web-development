/**
 * Problem Statement:

You are given an array of objects representing transactions made by customers. Each object contains the following properties:

customerId: Number, representing the unique ID of the customer.
amount: Number, representing the amount of the transaction.
date: String, representing the date of the transaction (in the format "YYYY-MM-DD").
Your task is to write a JavaScript function using functional programming techniques that takes this array of transaction objects and returns an object containing the following information:

totalTransactions: Total number of transactions.
totalAmount: Total amount of all transactions.
averageTransactionAmount: Average amount of transactions.
transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.
 */

const transactions = [
    { customerId: 1, amount: 100, date: '2024-03-01' },
    { customerId: 2, amount: 150, date: '2024-03-01' },
    { customerId: 1, amount: 200, date: '2024-03-02' },
    { customerId: 3, amount: 50, date: '2024-03-02' },
    { customerId: 2, amount: 120, date: '2024-03-03' }
];

// totalTransactions: Total number of transactions.
const totalNumber = transactions.length;


// totalAmount: Total amount of all transactions.
const totalAmount = transactions.reduce((acc, currTransactionObj) => {
    return acc + currTransactionObj.amount
}, 0)

// averageTransactionAmount: Average amount of transactions.

const averageTransactionAmount = totalAmount / totalNumber;

// transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.

const transactionsPerDay = transactions.reduce((acc, transactionObj) => {
    if (!acc[transactionObj.date]) {
        acc[transactionObj.date] = []
    }
    acc[transactionObj.date].push(transactionObj);
    return acc;
}, {})

// {'2024-03-01' : [    { customerId: 1, amount: 100, date: '2024-03-01' },
// { customerId: 2, amount: 150, date: '2024-03-01' },]}


// transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.


const transactionsByCustomer = transactions.reduce((acc, transactionObj) => {
    if (!acc[transactionObj.customerId]) {
        acc[transactionObj.customerId] = []
    }
    acc[transactionObj.customerId].push(transactionObj);
    return acc;
}, {})

console.log({
    totalNumber,
    totalAmount,
    averageTransactionAmount,
    transactionsPerDay,
    transactionsByCustomer,
})

console.log(transactionsPerDay['2024-03-01'])
console.log(transactionsByCustomer['1'])