import React, { useEffect, useState } from 'react';
import {TextField, Stack, MenuItem, Select } from '@mui/material';
import { BlankButton, FalseHeader } from '../styledComponents';
import axios from 'axios';
import addField from './Elements/addField'
import removeField from './Elements/removeField';
import handleObjectChange from './Elements/handleObjectChange';

export default function RecipeForm() {

    const [recipe, setRecipe] = useState('');
    const [ingredients, setIngredients] = useState([{ingredient: '', quantity: '', unitOfMeasure: ''}]);
    const [directions, setDirections] = useState([{step:'', direction: ''}]);
    const [recipeYield, setRecipeYield] = useState('');
    const [station, setStation] = useState('');
    const [dish, setDish] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/officechef/recipebuilder", 
            {
                recipe: recipe,
                ingredients: JSON.stringify(ingredients),
                directions: JSON.stringify(directions),
                yield: recipeYield,
                station: station,
                dish: dish
            }
        )
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
                    // sx={{width: '30%'}}
                    sx={{width: '30%',
                        "& .MuiFormLabel-root": {
                            color: 'black'
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: 'black'
                        },
                        "& .MuiInputBase-root::after": {
                            borderBottom: '2px solid black'
                        }
                    }}
                    >
                                   
                    </TextField>  

                {ingredients.map((input, index) => {
                return (
                <Stack direction="row" spacing={1}>                    
                        <TextField
                        required
                        fullWidth
                        variant='filled'
                        label='Ingredients'
                        value={input.ingredient}
                        name='ingredient'
                        onChange={event => handleObjectChange(ingredients, setIngredients, index, event)}
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: 'black'
                            },
                            "& .MuiFormLabel-root.Mui-focused": {
                                color: 'black'
                            },
                            "& .MuiInputBase-root::after": {
                                borderBottom: '2px solid black'
                            }
                            }}>
                        </TextField>
                            <TextField
                        variant='filled'
                        label='Quantity'
                        value={input.quantity}
                        name='quantity'
                        onChange={event => handleObjectChange(ingredients, setIngredients, index, event)}
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: 'black'
                            },
                            "& .MuiFormLabel-root.Mui-focused": {
                                color: 'black'
                            },
                            "& .MuiInputBase-root::after": {
                                borderBottom: '2px solid black'
                            }
                            }}>
                        </TextField>
                        <Select
                            labelId="uom"
                            id="uom"
                            value={ingredients.unitOfMeasure}
                            defaultValue=''
                            name='unitOfMeasure'
                            label="Unit of Measure"
                            onChange={event => handleObjectChange(ingredients, setIngredients, index, event)}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: '1px solid black!important'
                                }
                            }}>
                            <MenuItem 
                            name='unitOfMeasure'
                            value={'mL'}>
                                mL
                            </MenuItem>
                            <MenuItem 
                            name='unitOfMeasure'
                            value={'g'}>
                                g
                            </MenuItem>
                            <MenuItem 
                            name='unitOfMeasure'
                            value={'lbs'}>
                                lbs
                            </MenuItem>
                        </Select>
                        <BlankButton style={{height: '2rem', width:'2rem', borderRadius:'100%', margin:'auto 8px'}}
                        type='button'

                        onClick={() => removeField(ingredients, setIngredients, index)}>
                            -
                        </BlankButton>
                    </Stack>
                    )
                })}
                    <BlankButton 
                    type="button"
                    onClick={event => addField(ingredients, setIngredients, event)}
                    style={{width: '20%', fontSize: '1rem'}}>
                    + Add another Ingredient</BlankButton> 


                {directions.map((input, index) => {
                return (<Stack direction="row" spacing={1}>                  
                        <TextField
                            variant='filled'
                            label='Step'
                            value={input.step}
                            name='step'
                            onChange={event => handleObjectChange(directions, setDirections, index, event)}
                            sx={{
                                "& .MuiFormLabel-root": {
                                    color: 'black'
                                },
                                "& .MuiFormLabel-root.Mui-focused": {
                                    color: 'black'
                                },
                                "& .MuiInputBase-root::after": {
                                    borderBottom: '2px solid black'
                                }
                                }}>
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
                            sx={{
                                "& .MuiFormLabel-root": {
                                    color: 'black'
                                },
                                "& .MuiFormLabel-root.Mui-focused": {
                                    color: 'black'
                                },
                                "& .MuiInputBase-root::after": {
                                    borderBottom: '2px solid black'
                                }
                                }}> 
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
                    onClick={event => addField(directions, setDirections, event)}
                    style={{width: '20%', fontSize: '1rem'}}>
                    +Add next Step
                    </BlankButton>              
                    <TextField
                    variant='filled'
                    label='Yield'
                    value={recipeYield}
                    name='recipeYield'
                    onChange={(e) => setRecipeYield(e.target.value)}
                    helperText="not required"
                    sx={{width: '30%',
                    "& .MuiFormLabel-root": {
                        color: 'black'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: 'black'
                    },
                    "& .MuiInputBase-root::after": {
                        borderBottom: '2px solid black'
                    }
                }}>
                    </TextField>  
                                        
                    <TextField
                    variant='filled'
                    label='Station'
                    value={station}
                    name='station'
                    onChange={(e) => setStation(e.target.value)}
                    helperText="not required"
                    sx={{width: '30%',
                    "& .MuiFormLabel-root": {
                        color: 'black'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: 'black'
                    },
                    "& .MuiInputBase-root::after": {
                        borderBottom: '2px solid black'
                    }
                }}>
                    </TextField>  
                                        
                    <TextField
                    variant='filled'
                    label='Dish'
                    value={dish}
                    name='dish'
                    onChange={(e) => setDish(e.target.value)}
                    helperText="not required"
                    sx={{width: '30%',
                    "& .MuiFormLabel-root": {
                        color: 'black'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: 'black'
                    },
                    "& .MuiInputBase-root::after": {
                        borderBottom: '2px solid black'
                    }
                    
                }}>
                    </TextField>

                    <BlankButton type="submit" style={{width: '15%', margin:'auto'}}>Submit Recipe</BlankButton> 
                </Stack>    
                </form>
        </div>
    )
}

