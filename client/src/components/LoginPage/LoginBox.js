import React from 'react';
import { LoginBoxStyle, LoginFormContainer, LoginButton, LoginBoxTitle, LoginInput } from './loginStyles';


export default function LoginBox() {
    return (
        <div>
            
            <LoginBoxStyle>
                <LoginBoxTitle>Login to Office Chef</LoginBoxTitle>

                <LoginFormContainer>
                    <form>
                        <label><LoginInput type='text' placeholder='Login name'></LoginInput></label>

                        <label><LoginInput type='password' placeholder='Password'></LoginInput></label>

                        <div><LoginButton type='submit'>Login</LoginButton></div>
                        
                    </form>
                </LoginFormContainer>
            </LoginBoxStyle>
        </div>
    )
}