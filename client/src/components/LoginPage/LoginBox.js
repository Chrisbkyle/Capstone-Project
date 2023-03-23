import React from 'react';
import { LoginBoxStyle, LoginFormContainer, LoginButton, LoginBoxTitle, LoginInput } from './loginStyles';
import { Link } from 'react-router-dom';


export default function LoginBox() {
    return (
        <div>
            
            <LoginBoxStyle>
                <LoginBoxTitle>Login to Office Chef</LoginBoxTitle>

                <LoginFormContainer>
                    <form>
                        <label><LoginInput type='text' placeholder='Login name'></LoginInput></label>

                        <label><LoginInput type='password' placeholder='Password'></LoginInput></label>

                        <div><Link to='/'><LoginButton type='submit'>Login</LoginButton></Link></div>

                        <div>Are you a memeber? if not <Link to='/signup'>sign up here </Link></div>
                        
                    </form>
                </LoginFormContainer>
            </LoginBoxStyle>
        </div>
    )
}