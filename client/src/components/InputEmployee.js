import React, {Fragment, useState} from "react";


const InputEmployee = () => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [vacationDays, setVacationDays] = useState("");
    
    const onSubmitForm = async e =>{
        e.preventDefault();
        
        //ceate an object to map the state variables to database columns
        
        
        
        // send data to the server
        try {
             //ceate an object to map the state variables to database columns
            const body = {
                first_name: firstName,
                last_name: lastName,
                vacation_days: vacationDays,
            };
            
            const response = await fetch("http://localhost:5000/employees",{
                method: "POST",
                headers:{"Content-type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        
        } catch (err) {
            console.error(err.message);
        }
    }
    
    return (
        <Fragment>
            <h1 className="text-center my-5"> Input Employee</h1>
            <form onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    placeholder="First name" 
                    className="form-control" 
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                
                <input 
                    type="text" 
                    placeholder="Last name" 
                    className="form-control" 
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                
                <input 
                    type="text" 
                    placeholder="Vacation Days" 
                    className="form-control" 
                    value={vacationDays} 
                    onChange={e => setVacationDays(e.target.value)}
                />
                
                <button className="btn btn-success">Submit</button>
            </form>
        </Fragment>
    )
}

export default  InputEmployee;