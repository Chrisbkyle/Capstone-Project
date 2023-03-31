import React from "react";
import SignupForm from "./SignupPage/SignupForm";
import styled from 'styled-components'
import LoginHeader from "./LoginPage/LoginHeader";
import SignupTitle from "./SignupPage/SignupTitle";
import Footer from "./SharedComponents/Footer";


const SignupFormHolder = styled.div`
    margin-top: 10%;
    margin-left: auto;
    margin-right:auto;
    width: 50%;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 4px 4px lightgrey;
    padding: 3rem; 
    background-color: rgba(226,194,117,.95);

`



export default function SignupPage() {



    return (
        <div>
            <LoginHeader />
            <SignupFormHolder>
                <SignupTitle />
                <SignupForm />
            </SignupFormHolder>
            <Footer />
        </div>
    )
}