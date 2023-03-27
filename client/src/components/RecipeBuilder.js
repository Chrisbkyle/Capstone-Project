import React from 'react';
import RecipeForm from './RecipeBuilder/RecipeForm';
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