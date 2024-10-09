// TODO: this file :)

// We import the Express library using 'require'
const express = require("express");

// Create the Express app.
const app = express();

// Designate the port we want our server to listen on.
const PORT = 3000;

// Import our data from our employee.js file
const employees = require("./employees");

//Endpoints to handle responses
app.get("/",(req, res) =>{
    res.send("Hello employees!");
});

app.get("/employees",(req, res) => {
    res.json(employees);
});

app.get("/employees/random", (req, res) => {
    const i = Math.floor(Math.random() * employees.length);
    res.json(employees[i]);
});

app.get("/employees/:id", (req, res) => {
    const{ id } = req.params;

    const employee = employees.find((employee)=>employee.id === +id);
    if (employees){
        res.json(employee);
    } else {
        res.status(404).send('There is no such employee with id ${id}.');
    }
});

//Tell the app to start listening for requests.
app.listen(PORT,() => {
    console.log('Listening on port #${PORT}...');
});
