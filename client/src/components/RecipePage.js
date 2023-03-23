import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import { FalseHeader, BlankButton } from "./styledComponents";
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from "@mui/material";

const RecipeDisplayHolder = styled.div`
    margin: 3rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 4px 4px lightgrey;
    font-size: 1.25rem;
`
const RecipePageName = styled.div`
    font-size: 3rem;
    border: 3px outset lightgrey;
    margin: 1rem 0 0 1rem;
    padding-left: 1rem;
    width: 92%;
`
const RecipePageYield = styled.div`
    font-size: 1.5rem;
    border: 3px outset lightgrey;
    margin: 0rem 1rem;
    padding-left: 1rem;
`
const RecipePageIngredients = styled.div`
    display: flex;
    margin: 1rem;
`
const RecipePageDirections = styled.div`
    display: flex;
    margin: 1rem;
`
const IndividualIngredient = styled.div`
    margin: 0rem 1rem;
`
const IngredientsQuantity = styled.div`
    margin: 0rem 1rem;
`
const IngredientsUom = styled.div`
    margin: 0rem 1rem;
`
const DirectionStep = styled.div`
    margin: 0rem 1rem;
`
const IndividualDirection = styled.div`
    margin: 0rem 1rem;
`
export default function RecipePage() {

useEffect(() => {
        axios.get('http://localhost:3001/officechef/recipepage', {
        headers:
            {recipename: id}
        })
        .then((response) => {
            // console.log('backend response');
            // console.log(response.data)
            setState(response.data); 
            setDirections(JSON.parse(response.data.directions))
            setIngredients(JSON.parse(response.data.ingredients))
        }).catch((err) => {
            console.log(err)
        })
}, []);

    const [state, setState] = useState({})
    const [ingredients, setIngredients] = useState([{}])
    const [directions, setDirections] = useState([{}])
    const { id } = useParams()






    return(
        <div>
            <FalseHeader />
            
            <RecipeDisplayHolder>
                <Stack direction='row'>
                    <RecipePageName>{state.recipe}</RecipePageName>
                    <BlankButton style={{margin:'1rem 1rem 0 0', width: '6.5%', border:'3px outset lightgrey', boxShadow:'none'}}><DeleteIcon></DeleteIcon></BlankButton>
                </Stack>
                <RecipePageYield>Portion Yield: {state.yield}</RecipePageYield>
                <div style={{border: '3px outset lightgrey', margin: '0rem 1rem'}}>
                    {ingredients.map((ingredient) => (
                            <RecipePageIngredients>
                                <IndividualIngredient>
                                    {ingredient.ingredient}
                                </IndividualIngredient>
                                <IngredientsQuantity>
                                    {ingredient.quantity}
                                </IngredientsQuantity>
                                <IngredientsUom>
                                    {ingredient.unitOfMeasure}
                                </IngredientsUom>
                            </RecipePageIngredients>
                        
                    ))}
                </div>
                <div style={{border: '3px outset lightgrey', margin: '0rem 1rem'}}>
                    {directions.map((direction) => (
                            <RecipePageDirections>
                                <DirectionStep>
                                    {direction.step}
                                </DirectionStep>
                                <IndividualDirection>
                                    {direction.direction}
                                </IndividualDirection>
                            </RecipePageDirections>
                    ))}
                </div>
            </RecipeDisplayHolder>

        </div>
    )
}
