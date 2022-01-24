const { v4 } = require('uuid');

const transactions = [
    {
      id: "",
      date: "2019-04-01",
      title: "Income",
      amount: 1000,
      from: "Employer",
      category: "Income", 
      type: "Income"
    },
    {
      id: "",
      date: "2019-04-01",
      title: "Taxes",
      amount: -300,
      from: "Accountant",
      category: "Taxes",
      type: "Expense"
    },
    {
      id: "",
      date: "2019-04-01",
      title: "Retirement",
      amount: -200,
      from: "Fidelity",
      category: "Retirement",
      type: "Expense"
    },
    {
      id: "",
      date: "2019-04-01",
      title: "Savings",
      amount: -100,
      from: "Savings Bank",
      category: "Savings",
      type: "Expense"
    },
    {
      id: "",
      date: "2019-04-01",
      title: "Credit Card Payment",
      amount: -100,
      from: "Discover",
      category: "Credit Cards",
      type: "Expense"
    },
    {
      id: "",
      date: "2019-04-05",
      title: "Monthly Birthday Money from Aunt Tilda",
      amount: 20,
      from: "Zelle",
      category: "Transfer",
      type: "Income"
    },
    {
      id: "",
      date: "2019-04-05",
      title: "Coffee",
      amount: -4,
      from: "Starbucks",
      category: "Restaurants/Dining",
      type: "Expense"
    },
    {
      id: "",
      date: "2019-04-05",
      title: "Internet",
      amount: -100,
      from: "Verizon",
      category: "Bills/Utilities",
      type: "Expense"
    },
    {
      id: "",
      date: "2019-04-03",
      title: "Groceries",
      amount: -76,
      from: "Deli",
      category: "Groceries",
      type: "Expense"
    },
    {
      id: "",
      date: "2019-04-03",
      title: "Pet Food",
      amount: -7,
      from: "Petco",
      category: "Pets",
      type: "Expense"
    },
  ];

  transactions.forEach((transaction) => transaction.id = v4())

  module.exports = transactions;