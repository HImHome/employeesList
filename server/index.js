const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


// Middleware
app.use(cors());
app.use(express.json());


//ROUTES//

//Get all employees
app.get("/employees", async(req,res) =>{
    try {
        const allEmployees = await pool.query("SELECT * FROM employees");

        res.json(allEmployees.rows);
    } catch (error) {
        console.error(error.message);
    }
})


//Get an employee by Id
app.get("/employees/:id", async(req, res) => {
    try {
        const { id} = req.params;
        const employee = await pool.query( "SELECT * FROM employees WHERE employee_id = $1",[id]);

        res.json(employee.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})


//Create employee instance
app.post("/employees", async (req,res) => {
    try {
        const { first_name, last_name, vacation_days } = req.body;
        
        const newEmployee = await pool.query("INSERT INTO employees (first_name, last_name, vacation_days) VALUES ($1, $2, $3)", [first_name, last_name, vacation_days]);
        
        res.json(req.body);
    } catch (error) {
        console.error(error.message);
    }
})


//Update employee info by Id
app.put("/employees/:id", async(req,res) =>{
    try {
        const { id } = req.params;
        const { first_name, last_name, vacation_days } = req.body;
        
        const updatedEmployee = await pool.query("UPDATE employees SET first_name = $1, last_name =$2, vacation_days = $3 WHERE employee_id = $4 RETURNING *",[first_name,last_name,vacation_days,id]);

        if (updatedEmployee.rows.length === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.json(updatedEmployee.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
})




//Delete employee by Id
app.delete("/employees/:id", async(req,res) =>{
    try {
        const { id } = req.params;

        const deleteEmployee = await pool.query("DELETE FROM employees WHERE employee_id = $1",[id]);

        res.json("Employee was deleted");
    } catch (error) {
        console.error(error.message);
    }
})




app.listen(5000, () => {
    console.log("Server is starting at port 5000");
});

