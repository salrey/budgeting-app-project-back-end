//DEPENDENCIES
const express = require("express");
const transactionsRouter = express.Router();

//FILES
const transactions = require("../models/transactions");
const { filteredTransactions, sort, isValid } = require("../helpers/functions");

//ROUTES

//GET LIST OF ALL TRANSACTIONS, including queries
transactionsRouter.get("/", (request, response) => {
  console.log("GET request received to route: /transactions");
  //List out the queries with values
  const requestQuery = {};
  for (let key in request.query) {
    //No need to filter the order key and keys with empty values
    if (request.query[key] !== "" && key !== "order") {
      requestQuery[key] = request.query[key];
    }
  }

  transactionsFound = transactions.filter((transaction) => {
    return filteredTransactions(requestQuery, transaction);
  });

  Object.keys(requestQuery).length
    ? response.json(sort(transactionsFound, request.query.order))
    : response.json(sort(transactions, request.query.order));
});

//GET individual view, show one transaction or redirect if not found
transactionsRouter.get("/:index", (request, response) => {
  console.log("GET request received to route: /transactions/:index");
  const { index } = request.params;
  const transactionFound = transactions.find((transaction) => transaction.id == index)
  //undefined if not found
  if (transactionFound) {
    response.json(transactionFound);
  } else {
    response.redirect("/redirect");
  }
});

//POST
transactionsRouter.post("/", (request, response) => {
  console.log("POST to /transactions");
  if (isValid(request.body)) {
    transactions.push(request.body);
    response.status(201).json(transactions);
  } else {
    response
      .status(303)
      .json({ error: "Object contains invalid types of values" });
  }
});

// DELETE
transactionsRouter.delete("/:index", (request, response) => {
  console.log("DELETE to /:index");
  const { index } = request.params;
  const indexFound = transactions.findIndex((transaction) => transaction.id == index)
  //-1 if not found
  if (indexFound >= 0) {
    transactions.splice(indexFound, 1);
    response.json(transactions);
  } else {
    response.redirect("/redirect");
  }
});

//UPDATE
transactionsRouter.put("/:index", (request, response) => {
  console.log("PUT to /:index");
  const { index } = request.params;
  const indexFound = transactions.findIndex((transaction) => transaction.id == index)
  //First check if the object to update exists
  if (indexFound >= 0) {
    //Then update it
    if (isValid(request.body)) {
      transactions[indexFound] = request.body;
      response.status(200).json(transactions);
    } else {
      response
        .status(303)
        .json({ error: "Object contains invalid types of values" });
    }
  } else {
    response.redirect("/redirect");
  }
});

module.exports = transactionsRouter;
