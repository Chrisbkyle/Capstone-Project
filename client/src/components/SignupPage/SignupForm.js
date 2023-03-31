import React, { useState } from 'react';
import { TextField, Stack } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios'

const LoginButton = styled.button`
    background-color: #C36A2D;
    width: 60%;
    font-size: 1.75rem;
    padding: .5 rem;
    border-radius: 8px;
    box-shadow: 2px 2px rgba(0,0,0,.25);
`

export default function SignupForm() {

    const [state, setState] = useState({
        username: '',
        password: '',
        email:''
        })




    const handleChange = (event) => {
        
        let data = {...state}
        data[event.target.name] = event.target.value
        setState(data)
        console.log(state)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/signup/", state)
        .then(
            window.location = '/'
        )
        .catch(err =>
            console.log(err)
        )
    }

    const passValid = new RegExp('/(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*^[A-Za-z])(?=.{5,})/i')

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
                helperText="User name must be over 5 characters, it can only contain letters, numbers and _, numbers can only be at the end"
                >

                </TextField>
                <TextField
                required 
                name='password' 
                placeholder='Password' 
                onChange={event => handleChange(event)}
                value={state.password}
                type='password'
                // inputProps={{
                //     pattern: '/(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*^[A-Za-z])(?=.{5,})/i'
                // }}                
                // inputProps={{
                //     pattern: {passValid}
                // }}
                helperText="Password must be longer than 5 characters, It must start with a letter and contain at least 1 number and special character "
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
                <div style={{textAlign: 'center'}}>
                {/* <Link to='/'> */}
                    <LoginButton type='submit' onSubmit={handleSubmit}>Sign Up!</LoginButton>
                {/* </Link> */}
                </div>
            </Stack>
            </form>
        </div>
    )
}