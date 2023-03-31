import React from "react";
import styled from 'styled-components'

const SignupHead = styled.div`
    font-size: 3rem;
    text-align: center;
    border-bottom: 2px solid black;
    @media (max-width: 768px) {
        font-size:2rem;
    }
`

export default function SignupTitle() {



    return (
        <div>
            <SignupHead>Signup to Office Chef</SignupHead>
        </div>
    )
}