//DEPENDENCIES 
const express = require("express");
const transactionsController = require("./controllers/transactionsController.js")
const cors = require("cors")

//MIDDLEWARE
//CONFIGURATION 
const app = express();
app.use(express.json())
//connect to frontend
app.use(cors())

//Controller
app.use("/transactions", transactionsController)

//ROUTES & CALLBACK
app.get("/", (_, response) => {
    console.log("GET request received to route: /")
    response.send("Welcome to the Budget Money App")
});

app.get("*", (_, response) => {
    response.status(404).json({error: "Resource not found"})
})

//EXPORT
module.exports = app;