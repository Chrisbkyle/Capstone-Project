import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const LoginFormContainer = styled.div`
    width: 350px;
    margin: 8% auto;
    background-color: rgba(226,194,117,.95);
    padding: 1rem;
    box-shadow: 4px 4px rgba(0,0,0,.25);
    border-radius: 8px;
    @media (max-width: 481px) { 
        width: 280px;
    }
`
const LoginBoxTitle = styled.div`
    font-size: 2rem;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
    text-align: center;
`
const LoginInputContainer = styled.div`
    margin-top: 1.5rem;
    margin-bottom: auto;
`
const LoginButton = styled.button`
    margin-top: 1.5rem;
    background-color: #C36A2D;
    width: 60%;
    font-size: 1.75rem;
    padding: .5 rem;
    border-radius: 8px;
    box-shadow: 2px 2px rgba(0,0,0,.25);
`
const LoginInput = styled.input`
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    width: 100%;
    box-shadow: 0px 1px rgba(0,0,0,.25); 
    border: 0;
    background-color: rgba(226,194,117,.95);
    color: black;
`




export default function LoginBox() {

    const [state, setState] = useState({
                                    username: '',
                                    password: ''
                                })

    const handleChange = (event) => {
        let data = {...state}
        data[event.target.name] = event.target.value
        setState(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/userRoutes/login/', state)
        .then((response) => {
            console.log(response)
            if(response.data == 'Login Successful') {
                window.location = '/app'
            } else if (response.data == "Please Complete all fields for login") {
                alert("Please Complete all fields for login")
            } else if (response.data == 'Username not found') {
                alert('Username not found')
            } else if(response.data == 'Password not found') {
                alert('Password not found')
            } 
        })
    }
    return (
        <div>
            
            <LoginFormContainer>
                <LoginBoxTitle>Login to Office Chef</LoginBoxTitle>
                <LoginInputContainer>
                    <form>
                        <label>
                            <LoginInput 
                            required
                            type='text'
                            name='username'
                            value={state.username}
                            placeholder='Login name' 
                            onChange={event => handleChange(event)}
                            >
                            </LoginInput>
                        </label>

                        <label>
                            <LoginInput
                            required
                            type='password' 
                            name='password'
                            value={state.password}
                            placeholder='Password' 
                            onChange={event => handleChange(event)}
                            >
                            </LoginInput>
                        </label>

                        <div style={{textAlign: 'center'}}><Link to='/app'>
                            <LoginButton type='button' onClick={handleSubmit}>Login</LoginButton>
                        </Link></div>

                        <div style={{textAlign: 'center'}}>Are you a memeber? if not <Link to='/signup'>sign up here </Link></div>
            
                    </form>
                    </LoginInputContainer>
            </LoginFormContainer>
        </div>
    )
}               





