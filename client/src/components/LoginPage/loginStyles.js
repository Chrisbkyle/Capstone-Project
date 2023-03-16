import styled from "styled-components";

const LoginBoxStyle = styled.div`
    width: 350px;
    height: 300px;          
    position: absolute;
    bottom: 40%;
    right:0;
    left:0;
    margin-left:auto; 
    margin-right:auto;
    background-color: rgba(226,194,117,.95);
    padding: 1rem;
    box-shadow: 4px 4px rgba(0,0,0,.25);
    border-radius: 8px;
`
const LoginBoxTitle = styled.div`
    font-size: 2rem;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
`

const LoginFormContainer = styled.div`
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

export {
    LoginBoxStyle,
    LoginBoxTitle,
    LoginFormContainer,
    LoginInput,
    LoginButton
}