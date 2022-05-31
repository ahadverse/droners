import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email , setEmail] = useState('')
    const [ success , setSuccess] = useState(false)
   
    const onBlurHandler = e =>{
       setEmail( e.target.value)
    }

    const handleAdminSubmit = e =>{
            const user = {email}
            fetch('https://boiling-waters-50126.herokuapp.com/users/admin' , {
                method:"PUT",
                headers:{
                   
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.modifiedCount){
                    setEmail('')
                    setSuccess(true)
                }
                
            })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Make a Admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            type="email"
            onBlur={onBlurHandler}
            label="Email" 
            sx={{width:'220'}}
            variant="outlined" />
            <br />
            <br />
            <br />
            <Button type="submit" color="info" variant="contained">Make Admin</Button>
            </form>
            {
              success && <Alert variant="filled"  severity="success">Congratulations  You made a Admin!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;