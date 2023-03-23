import React, { useState, useEffect } from 'react';
import { TextField, Stack } from '@mui/material';
import { BlankButton } from '../styledComponents';
import { Link } from 'react-router-dom';
import axios from 'axios'





export default function SignupForm() {

    const [state, setState] = useState({
        username: '',
        password: '',
        fName: '',
        lName:'',
        email:'',
        restaurant:''
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

    return(
        <div style={{marginTop: '2rem'}}>
            <Stack direction='column' spacing={2}>
                <TextField 
                name='username' 
                placeholder='Input User Name' 
                onChange={event => handleChange(event)}
                value={state.username}
                type='text'
                required
                >

                </TextField>
                <TextField 
                name='password' 
                placeholder='Password' 
                onChange={event => handleChange(event)}
                value={state.password}
                type='password'
                hidden
                required
                >

                </TextField>
                <TextField 
                name='fName' 
                placeholder='First Name' 
                onChange={event => handleChange(event)}
                value={state.fName}
                type='text'
                required
                >

                </TextField>
                <TextField 
                name='lName'
                placeholder='Last Name' 
                onChange={event => handleChange(event)}
                value={state.lName}
                type='text'
                required
                >

                </TextField>
                <TextField 
                name='email' 
                placeholder='Email' 
                onChange={event => handleChange(event)}
                value={state.email}
                type='email'
                required
                >

                </TextField>
                <TextField 
                name='restaurant' 
                placeholder='Restaurant' 
                onChange={event => handleChange(event)}
                value={state.restaurant}
                type='text'
                >
                
                </TextField>
                {/* <Link to='/login'> */}
                    <BlankButton type='submit' onClick={handleSubmit}>Sign Up!</BlankButton>
                {/* </Link> */}
            </Stack>
        </div>
    )

}