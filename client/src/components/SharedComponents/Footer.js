import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
    background-color: #C36A2D;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: .5rem;
    box-shadow: 2px 0 10px 5px rgba(0, 0, 0, 20%);
    text-align: center;
`

export default function Footer() {
    return(
        <FooterStyled>footer info copyright someone e. somebody</FooterStyled>
    )
}