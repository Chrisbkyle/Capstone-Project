import React, { useState } from 'react';
import { LoginInputContainer, LoginFormContainer, LoginButton, LoginBoxTitle, LoginInput } from '../styledComponents';
import { Link } from 'react-router-dom';
import axios from 'axios';


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
        axios.post('http://localhost:3001/officechef/login/', state)
        .then((response) => {
            console.log(response)
            if(response.data == 'Login Successful') {
                window.location = '/app'
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

                        <div><Link to='/app'>
                            <LoginButton type='button' onClick={handleSubmit}>Login</LoginButton>
                        </Link></div>

                        <div>Are you a memeber? if not <Link to='/signup'>sign up here </Link></div>
            
                    </form>
                    </LoginInputContainer>
            </LoginFormContainer>
        </div>
    )
}               





