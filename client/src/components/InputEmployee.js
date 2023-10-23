import React, {Fragment, useState} from "react";
import {Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

const InputEmployee = () => {

    const [newEmployee, setNewEmployee] = useState({
        firstName: null,
        lastName: null,
        vacationDays: null
    });


    const onSubmitForm = async e => {
        e.preventDefault();

        // send data to the server
        try {
            const response = await fetch("http://localhost:5000/employees", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(newEmployee)
            });

            console.log(response);

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <Dialog open={true}>
                <DialogTitle>ΕΓΓΡΑΦΗ ΥΠΑΛΛΗΛΟΥ</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Εισάγετε τα στοιχεία του υπαλλήλου :
                    </DialogContentText>
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            type="text"
                            margin="dense"
                            label="Όνομα"
                            variant="standard"
                            placeholder="Όνομα"
                            className="form-control"
                            value={newEmployee.firstName}
                            onChange={e =>
                                setNewEmployee({
                                    ...newEmployee,
                                    firstName: e.target.value,
                                })
                            }
                        />

                        <TextField
                            type="text"
                            margin="dense"
                            label="Επώνυμο"
                            variant="standard"
                            placeholder="Επώνυμο"
                            className="form-control"
                            value={newEmployee.lastName}
                            onChange={e => setNewEmployee({
                                ...newEmployee,
                                lastName: e.target.value,
                            })
                            }
                        />

                        <TextField
                            type="text"
                            margin="dense"
                            label="Ημέρες Άδειας"
                            variant="standard"
                            placeholder="Ημέρες Άδειας"
                            className="form-control"
                            value={newEmployee.vacationDays}
                            onChange={e => setNewEmployee({
                                ...newEmployee,
                                vacationDays: e.target.value,
                            })
                            }
                        />

                        <Button
                            variant="contained" color="success" onClick={onSubmitForm}>
                            Submit
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}

export default InputEmployee;