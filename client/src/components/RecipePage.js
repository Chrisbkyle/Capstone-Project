import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import { FalseHeader } from "./styledComponents";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Stack } from "@mui/material";


// put in breakpoint at 768px & 480px


const RecipeDisplayHolder = styled.div`
    margin: 3rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 4px 4px lightgrey;
    font-size: 1.25rem;
    @media (max-width: 768px) {
        margin: 0;
    }
`
const RecipePageName = styled.div`
    font-size: 3rem;
    border: 3px outset lightgrey;
    margin: 1rem 0 0 1rem;
    padding-left: 1rem;
    width: 92%;
    @media (max-width: 768px) {
        font-size: 2rem;
        width: 80%;
    }
`
const RecipePageYield = styled.div`
    font-size: 1.5rem;
    border: 3px outset lightgrey;
    margin: 0rem 1rem;
    padding-left: 1rem;
`
const RecipePageFlex = styled.div`
    display: flex;
    margin: 1rem;
`
const RecipePageLine = styled.div`
    margin: 0rem 1rem;
    @media (max-width: 768px) {
        margin: 0rem 0.25rem;
    }
`
const DeleteButton = styled.button`
    width: 6.5%;
    border: 3px outset lightgrey!important;
    font-size: 3rem;
    background-color: transparent!important;
    margin:1rem 1rem 0 0;
    @media (max-width: 768px) {
        width: 15%;
    }
    &:hover {
        background-color: #EADCA6!important;
    }
    &:active {
        background-color: #C36A2D!important;
        color: white!important;
    }
  `
  const EditButton = styled.button`
    width: 6.5%;
    border: 3px outset lightgrey!important;
    font-size: 3rem;
    background-color: transparent!important;
    margin:1rem 0 0 0;
    @media (max-width: 768px) {
        width: 15%;
    }
    &:hover {
        background-color: #EADCA6!important;
    }
    &:active {
        background-color: #C36A2D!important;
        color: white!important;
    }
  `

export default function RecipePage() {

    const localApi = 'http://localhost:3001/'
    const deployedApi = 'http://13.239.25.244/server/'

useEffect(() => {
        axios.get(deployedApi + 'api/recipeRoutes/recipepage', {
        headers:
            {recipename: id}
        })
        .then((response) => {
            setState(response.data); 
            setDirections(JSON.parse(response.data.directions))
            setIngredients(JSON.parse(response.data.ingredients))
        }).catch((err) => {
            console.log(err)
        })
}, []);
const deleteWarning = (e) => { 
    e.preventDefault()
    if(window.confirm("Are you sure you want to delete the recipe?")) {
        deleteHandler(id)
    }
}
const deleteHandler = (e) => {
    console.log(e)
    axios.delete(deployedApi + 'api/recipeRoutes/recipedelete', {headers: {recipename: id},data: {recipe: e}})
    .then(window.location = '/app/recipe_select')
    .catch(err => {
        console.log(err)
    })
}
const editHandlers = (e) => {
    window.location = '/app/recipe_edit/' + state.recipe
}



    const [state, setState] = useState({})
    const [ingredients, setIngredients] = useState([{}])
    const [directions, setDirections] = useState([{}])
    const { id } = useParams()

console.log(state.recipe)




    return(
        <div>
            <FalseHeader />
            
            <RecipeDisplayHolder>
                <Stack direction='row'>
                    <RecipePageName>{state.recipe}</RecipePageName>
                    <EditButton onClick={editHandlers}>
                        <EditIcon></EditIcon>    
                    </EditButton> 
                    <DeleteButton onClick={deleteWarning}>
                        <DeleteIcon></DeleteIcon>
                    </DeleteButton>  
                    
                </Stack>
                <RecipePageYield>Portion Yield: {state.yield}</RecipePageYield>
                <div style={{border: '3px outset lightgrey', margin: '0rem 1rem'}}>
                    <h2 style={{textAlign: 'center'}}>Ingredients</h2>
                    {ingredients.map((ingredient) => (
                            <RecipePageFlex>
                                <RecipePageLine>
                                    {ingredient.ingredient}
                                </RecipePageLine>
                                <RecipePageLine>
                                    {ingredient.quantity}
                                </RecipePageLine>
                                <RecipePageLine>
                                    {ingredient.unitOfMeasure}
                                </RecipePageLine>
                            </RecipePageFlex>
                        
                    ))}
                </div>
                
                <div style={{border: '3px outset lightgrey', margin: '0rem 1rem'}}>
                <h2 style={{textAlign: 'center'}}>Directions</h2>
                    {directions.map((direction) => (
                            <RecipePageFlex>
                                <RecipePageLine>
                                    {direction.step}
                                </RecipePageLine>
                                <RecipePageLine>
                                    {direction.direction}
                                </RecipePageLine>
                            </RecipePageFlex>
                    ))}
                </div>
            </RecipeDisplayHolder>

        </div>
    )
}
