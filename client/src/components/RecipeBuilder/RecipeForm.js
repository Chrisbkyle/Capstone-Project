import React, { useState } from 'react';
import {TextField, Stack, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';
import addField from './Elements/addField'
import removeField from './Elements/removeField';
import handleObjectChange from './Elements/handleObjectChange';



const BlankButton = styled.button`
    width: 20%;
    font-family: inherit!important;
    font-size: 1.25rem;
    background-color: transparent!important;
    box-shadow: 2px 2px grey;
    border: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
    margin-left: 1rem;
    &:hover {
        background-color: #EADCA6!important;
    }
    &:active {
        background-color: #C36A2D!important;
        color: white!important;
    }
    @media (max-width: 768px) {
        font-size:1rem;
        width:35%;
    }
    @media (max-width: 480px) {
        width: 50%;
    }
  `

  const largeField = {
    width: { xs: "100%", sm: "60%",
     md: "50%", lg: "40%" },
     "& .MuiFormLabel-root": {
        color: 'black'
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: 'black'
    },
    "& .MuiInputBase-root::after": {
        borderBottom: '2px solid black'
    }
 };
 const mediumField = {
    "& .MuiFormLabel-root": {
       color: 'black'
   },
   "& .MuiFormLabel-root.Mui-focused": {
       color: 'black'
   },
   "& .MuiInputBase-root::after": {
       borderBottom: '2px solid black'
   }
 }

 const smallField = {
    width: { xs: "40%", sm: "20%",
     md: "10%", lg: "10%" },
     "& .MuiFormLabel-root": {
        color: 'black'
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: 'black'
    },
    "& .MuiInputBase-root::after": {
        borderBottom: '2px solid black'
    }
 };

export default function RecipeForm() {

    const [recipe, setRecipe] = useState('');
    const [ingredients, setIngredients] = useState([{ingredient: '', quantity: '', unitOfMeasure: ''}]);
    const [directions, setDirections] = useState([{step:'', direction: ''}]);
    const [recipeYield, setRecipeYield] = useState('');
    const [station, setStation] = useState('');
    const [dish, setDish] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/api/recipebuilder", 
            {
                recipe: recipe,
                ingredients: JSON.stringify(ingredients),
                directions: JSON.stringify(directions),
                yield: recipeYield,
                station: station,
                dish: dish
            }
        )
        .then(response => console.log(response))
        .then(window.location = '/app/recipe_select')
        .catch(err =>
            console.log(err));
      };



    return (

        <div>
            <form onSubmit={handleSubmit}>

                <Stack direction="column" spacing={2}>

                    <TextField
                        required
                        variant='filled'
                        label='Recipe Name'
                        value={recipe}
                        name='recipeName'
                        onChange={(e) => setRecipe(e.target.value)}
                        sx={largeField}>        
                    </TextField>  

                {ingredients.map((input, index) => {
                return (
                <Stack direction={{xs: 'column', lg: 'row'}} spacing={1}>                    
                        <TextField
                            required
                            fullWidth
                            variant='filled'
                            label='Ingredients'
                            value={input.ingredient}
                            name='ingredient'
                            onChange={event => handleObjectChange(ingredients, setIngredients, index, event)}
                            sx={mediumField}>
                        </TextField>
                        <TextField
                            variant='filled'
                            label='Quantity'
                            value={input.quantity}
                            name='quantity'
                            onChange={event => handleObjectChange(ingredients, setIngredients, index, event)}
                            sx={smallField}>
                        </TextField>
                        <BlankButton 
                            style={{height: '2rem', width:'2rem', borderRadius:'100%', margin:'auto 8px'}}
                            type='button'
                            onClick={() => removeField(ingredients, setIngredients, index)}>
                            -
                        </BlankButton>
                    </Stack>
                    )
                })}
                    <BlankButton 
                        type="button"
                        onClick={event => addField(ingredients, setIngredients, event)}>
                        + Add another Ingredient
                    </BlankButton> 


                {directions.map((input, index) => {
                return (<Stack direction={{xs: 'column', lg: 'row'}} spacing={1}>                  
                        <TextField
                            variant='filled'
                            label='Step'
                            value={input.step}
                            name='step'
                            onChange={event => handleObjectChange(directions, setDirections, index, event)}
                            sx={smallField}>
                        </TextField>
                        <TextField
                            required
                            fullWidth
                            variant='filled'
                            label='Directions'
                            value={input.direction}
                            name='direction'
                            onChange={event => handleObjectChange(directions, setDirections, index, event)}
                            multiline
                            rows={5}
                            sx={mediumField}> 
                        </TextField> 
                        <BlankButton 
                            style={{height: '2rem', width:'2rem', borderRadius:'100%', marginTop:'1rem'}}
                            type='button' 
                            onClick={() => removeField(directions, setDirections, index)}>
                            -
                        </BlankButton> 
                    </Stack>
                    )
                })}
                    <BlankButton
                        type="button" 
                        onClick={event => addField(directions, setDirections, event)}>
                    +Add next Step
                    </BlankButton>              
                    <TextField
                        variant='filled'
                        label='Yield'
                        value={recipeYield}
                        name='recipeYield'
                        onChange={(e) => setRecipeYield(e.target.value)}
                        sx={largeField}>
                    </TextField>  
                                        
                    <TextField
                        variant='filled'
                        label='Station'
                        value={station}
                        name='station'
                        onChange={(e) => setStation(e.target.value)}
                        sx={largeField}>
                    </TextField>  
                                        
                    <TextField
                        variant='filled'
                        label='Dish'
                        value={dish}
                        name='dish'
                        onChange={(e) => setDish(e.target.value)}
                        sx={largeField}>
                    </TextField>

                    <BlankButton type="submit" style={{ margin:'auto'}}>Submit Recipe</BlankButton> 
                </Stack>    
                </form>
        </div>
    )
}

