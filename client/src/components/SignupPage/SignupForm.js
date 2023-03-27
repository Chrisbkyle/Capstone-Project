import React, { useState, useEffect } from 'react';
import { TextField, Stack } from '@mui/material';
import { BlankButton } from '../styledComponents';
import { Link } from 'react-router-dom';
import axios from 'axios'





export default function SignupForm() {

    const [state, setState] = useState({
        username: '',
        password: '',
        email:''
        }
    )

    console.log(state);

    const handleChange = (event) => {
        let data = {...state}
        data[event.target.name] = event.target.value
        setState(data)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/officechef/signup/", state)
        .then((response) => {
            alert(response)
        });
    }
    const [isFormInvalid, setIsFormInvalid] = useState(false);

    const validate = values => {
      if (values.apiKey !== "") {
        setIsFormInvalid(false);
      } else {
        setIsFormInvalid(true);
      }
    };


    return(
        <div style={{marginTop: '2rem'}}>
            <form onSubmit={handleSubmit}>
            <Stack direction='column' spacing={2}>
                <TextField  
                required 
                name='username' 
                placeholder='Input User Name' 
                onChange={event => handleChange(event)}
                value={state.username}
                type='text'
                inputProps={{
                    pattern: "^(?=.{5,}$)[a-zA-Z_]*[0-9]*$"
                }}
                helperText="Usernames muse be over 5 characters, it can only contain letters, numbers and _, numbers can only be at the end"
                >

                </TextField>
                <TextField
                required 
                name='password' 
                placeholder='Password' 
                onChange={event => handleChange(event)}
                value={state.password}
                type='password'
                inputProps={{
                    pattern: "/(?=.*[a-z])(?=.*[0-9])(?=.*[a-zA-Z0-9_])(?=.*^[a-zA-Z])(?=.{5,})/i"
                }}
                helperText="Password must be longer than 5 characters, It must start with a letter and contain at least 1 number and special character "
                hidden
                >

                </TextField>

                <TextField 
                required
                name='email' 
                placeholder='Email' 
                onChange={event => handleChange(event)}
                value={state.email}
                type='email'   
                >

                </TextField>
                {/* <Link to='/login'> */}
                    <BlankButton type='submit' onClick={validate} onSubmit={handleSubmit}>Sign Up!</BlankButton>
                {/* </Link> */}
            </Stack>
            </form>
        </div>
    )

}