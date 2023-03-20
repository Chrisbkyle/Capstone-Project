import React from 'react';
import Footer from './Footer';
import HeaderSidenav from './HeaderSideNav';
import RecipeForm from './RecipeBuilder/RecipeForm';
import styled from 'styled-components';

const RecipeFormContainer = styled.div`
    background-color: #FFFBEA;
    margin: 5%;
    padding: 5%;
    border-radius: 5px;
    box-shadow: 4px 4px lightgrey;
    border: 1px solid lightgrey;

`


export default function RecipeBuilder() {


    return (

        <div style={{backgroundColor: '#FFFBEA'}}>
            <HeaderSidenav />
            <RecipeFormContainer>
            <RecipeForm />
            </RecipeFormContainer>
            <Footer />
        </div>
    )
}