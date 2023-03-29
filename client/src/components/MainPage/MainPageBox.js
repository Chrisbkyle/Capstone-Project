import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const MainBox = styled.div`
    width: 30%;
    background-color: rgba(226,194,117,.95);
    margin: 15% auto auto 50%;
    box-shadow: 4px 4px rgba(0,0,0,.25);
    border-radius: 8px;   
    @media (max-width: 1200px) { 
        width: 40%;
    } 
    @media (max-width: 1024px) { 
        width: 50%;
        margin: 15% auto;
    } 
    @media (max-width: 768px) { 
        width: 70%;
        margin: 15% auto;
    } 
    @media (max-width: 480px) { 
        width: 80%;
        margin: 15% auto;
    } 
`
// width: 350px;
// margin: 8% auto;
// background-color: rgba(226,194,117,.95);
// padding: 1rem;
// box-shadow: 4px 4px rgba(0,0,0,.25);
// border-radius: 8px;
// @media (max-width: 481px) { 
//     width: 280px;
// }
const MainPageButton = styled.button`
    font-family: inherit!important;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #C3442D!important;
    box-shadow: 2px 2px grey;
    border: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
    margin: 1rem;
    padding: 1rem;
    &:active {
        background-color: #C36A2D!important;
        // color: white!important;
    }
    @media (max-width: 768px) {
        font-size:1rem;
    }
  `

export default function MainPageBox() {



    return(
        <div>
            <MainBox>
                <div style={{padding: '15%'}}>
                    <h1>Welcome to your Kitchen organization assisant</h1>
                    <Link to='/app/recipe_select'><MainPageButton>Get your Recipes</MainPageButton></Link><Link to='/app/recipe_builder'><MainPageButton>Add a Recipe</MainPageButton></Link>
                </div>
            </MainBox>
        </div>
    )
}