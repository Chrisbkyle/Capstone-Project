import React from "react";
import styled from "styled-components";
import { MainPageButton } from "../styledComponents";
import { Link } from "react-router-dom";


const MainBox = styled.span`
    width: 30%;
    height: 50%;
    background-color: rgba(226,194,117,.95);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto auto auto 50%;
    box-shadow: 4px 4px rgba(0,0,0,.25);
    border-radius: 8px;

    
`

export default function MainPageBox() {



    return(
        <div>
            <MainBox>
                <div style={{padding: '15%'}}>
                    <h1>Welcome to your Kitchen organization assisant</h1>
                    <Link to='/recipe_select'><MainPageButton>Get your Recipes</MainPageButton></Link><Link to='recipe_builder'><MainPageButton>Add a Recipe</MainPageButton></Link>
                </div>
            </MainBox>
        </div>
    )
}