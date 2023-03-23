import React, { useState } from 'react';
import { LoginBoxStyle, LoginFormContainer, LoginButton, LoginBoxTitle, LoginInput } from './loginStyles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField } from '@mui/material';


export default function LoginBox() {

    const [state, setState] = useState({
                                    username: '',
                                    password: ''
                                })

    console.log(state)

    const handleChange = (event) => {
        let data = {...state}
        data[event.target.name] = event.target.value
        setState(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/officechef/login/', state)
        .then((response) => {
            console.log(response)
        })
    }
    return (
        <div>
            
            <LoginBoxStyle>
                <LoginBoxTitle>Login to Office Chef</LoginBoxTitle>

                <LoginFormContainer>
                    <form>
                        <label>
                            <LoginInput 
                            type='text'
                            name='username'
                            value={state.username}
                            placeholder='Login name' 
                            onChange={event => handleChange(event)}>
                            </LoginInput>
                        </label>

                        <label>
                            <LoginInput 
                            type='password' 
                            name='password'
                            value={state.password}
                            placeholder='Password' 
                            onChange={event => handleChange(event)} >
                            </LoginInput>
                        </label>

                        <div><Link to='/'>
                            <LoginButton type='submit' onClick={handleSubmit}>Login</LoginButton>
                        </Link></div>

                        <div>Are you a memeber? if not <Link to='/signup'>sign up here </Link></div>
                        
                    </form>
                </LoginFormContainer>
            </LoginBoxStyle>
        </div>
    )
}               





