import React from "react";
import SignupForm from "./SignupPage/SignupForm";
import styled from 'styled-components'
import LoginHeader from "./LoginPage/LoginHeader";
import SignupTitle from "./SignupPage/SignupTitle";


const SignupFormHolder = styled.div`
    margin: auto;
    width: 50%;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 4px 4px lightgrey;
    padding: 3rem; 

`



export default function SignupPage() {



    return (
        <div>
            <LoginHeader />
            <SignupFormHolder>
                <SignupTitle />
                <SignupForm />
            </SignupFormHolder>
        </div>
    )
}