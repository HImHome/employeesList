import React, {Fragment, useState, useEffect} from "react";

const ListEmployees = () =>{
    
    const [employees, setEmployees] = useState([]);

    async function getEmployees () {
        const res = await fetch("http://localhost:5000/employees");

        const employeeArray = await res.json();
        console.log(employeeArray);
        setEmployees(employeeArray);
    }



    useEffect(() => {
        getEmployees();
    },[])
    
    console.log(employees);

    return ( 
    <Fragment>
        <table class="table mt-5">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Emp. ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Vacation Days</th>
                    <th scope="col">Delete</th>

                </tr>
            </thead>
            <tbody>
                
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                          <td>{employee.firstName}</td>
                          <td>{employee.lastName}</td>
                          <td>{employee.vacationDays}</td>
                          <td className="btn btn-danger">Delete</td>
                        </tr>
                      ))}
            </tbody>
        </table>
    </Fragment>
    );
};

export default ListEmployees;