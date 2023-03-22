import React from 'react';
import Footer from './Footer';
import HeaderSidenav from './HeaderSideNav';
import RecipeForm from './RecipeBuilder/RecipeForm';
import styled from 'styled-components';
import { FalseHeader, RecipeFormContainer, RecipeBuilderTitle } from './styledComponents';




export default function RecipeBuilder() {


    return (

        <div style={{backgroundColor: '#FFFBEA'}}>
            <FalseHeader />
            <RecipeBuilderTitle>Recipe Builder</RecipeBuilderTitle>
            <RecipeFormContainer>
                <RecipeForm />
            </RecipeFormContainer>

        </div>
    )
}