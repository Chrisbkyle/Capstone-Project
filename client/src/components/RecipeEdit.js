import React from 'react';
import EditForm from './RecipeEdit/EditForm';
import { FalseHeader } from './styledComponents';
import styled from 'styled-components';
import axios from 'axios';

const RecipeBuilderTitle = styled.div`
    font-size: 3rem;
    text-align: center;
    padding-top: 1%;
`
const RecipeFormContainer = styled.div`
    background-color: #FFFBEA;
    margin: 2% 5% 5% 5%;
    padding: 5%;
    border-radius: 5px;
    box-shadow: 4px 4px lightgrey;
    border: 1px solid lightgrey;

`



export default function RecipeEdit() {


    const api = 'http://localhost:3001/'
    // const api = 'http://13.239.25.244/server/'

      const callback = payload => {
        console.log(payload)
        axios.post(api + "api/recipeRoutes/recipeedit", payload
            ).then(response => console.log(response))
            .then(window.location = '/app/recipe_select')
            .catch(err =>
                console.log(err));
        };

          
      


    return (

        <div style={{backgroundColor: '#FFFBEA'}}>
            <FalseHeader />
            <RecipeBuilderTitle>Edit Recipe</RecipeBuilderTitle>
            <RecipeFormContainer>

                    <EditForm callback={callback}/>
 
            </RecipeFormContainer>
            

        </div>
    )
}