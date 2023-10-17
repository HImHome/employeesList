import React, {Fragment, useState} from "react";


const InputEmployee = () => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [employeeID, setEmployeeID] = useState("");
    
    return (
        <Fragment>
            <h1 className="text-center my-5"> Input Employee</h1>
            <form>
                <input 
                    type="text" 
                    placeholder="First name" 
                    className="form-control" 
                    value={firstName}
                />
                
                <input 
                    type="text" 
                    placeholder="Last name" 
                    className="form-control" 
                    value={lastName}
                />
                
                <input 
                    type="text" 
                    placeholder="Employee ID" 
                    className="form-control" 
                    value={employeeID} 
                />
                
                <button className="btn btn-success">Submit</button>
            </form>
        </Fragment>
    )
}

export default  InputEmployee;