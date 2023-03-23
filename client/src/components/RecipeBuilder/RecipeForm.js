import React, { useEffect, useState} from 'react';
import {TextField, Stack, MenuItem, Select } from '@mui/material';
import { BlankButton } from '../styledComponents';
import axios from 'axios';


export default function RecipeForm() {

    const [recipe, setRecipe] = useState('');
    const [ingredients, setIngredients] = useState([{ingredient: '', quantity: '', unitOfMeasure: ''}]);
    const [directions, setDirections] = useState([{step:'', direction: ''}]);
    const [recipeYield, setRecipeYield] = useState('');
    const [station, setStation] = useState('');
    const [dish, setDish] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            recipe: recipe,
            ingredients: JSON.stringify(ingredients),
            directions: JSON.stringify(directions),
            yield: recipeYield,
            station: station,
            dish: dish
        };
        axios.post("http://localhost:3001/officechef/recipebuilder", userData).then((response) => {
        });
      };



    const handleIngredientChange = (index,event) => {
        let data = [...ingredients];
        data[index][event.target.name] = event.target.value;
        setIngredients(data);
    }

    const handleDirectionChange = (index,event) => {
        let data = [...directions];
        data[index][event.target.name] = event.target.value;
        setDirections(data);
    }

    const addIngredientsField = (index, event) => {
        let newIngredientField = {
            ingredient: '',
            quantity: '',
            unitOfMeasure: ''
            }
        setIngredients([...ingredients, newIngredientField])
    }

    const addDirectionsField = () => {
        let newDirectionField = {
            step:'',
            direction: ''
            }
        setDirections([...directions, newDirectionField])
    }

    const removeIngredient = (index) => {
        let data = [...ingredients];
        data.splice(index, 1)
        setIngredients(data)
    }

    const removeDirection = (index) => {
        let data = [...directions];
        data.splice(index, 1)
        setDirections(data);
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <Stack direction="column" spacing={2}>

                    <TextField
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
                return (<Stack direction="row" spacing={1} key={input.ingredient}>                    
                        <TextField
                        fullWidth
                        variant='filled'
                        label='Ingredients'
                        value={input.ingredient}
                        name='ingredient'
                        onChange={event => handleIngredientChange(index, event)}
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
                        onChange={event => handleIngredientChange(index, event)}
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
                            onChange={event => handleIngredientChange(index, event)}
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

                        onClick={() => removeIngredient(index)}>
                            -
                        </BlankButton>
                    </Stack>
                    )
                })}
                    <BlankButton 
                    type="button"
                    onClick={addIngredientsField}
                    style={{width: '20%', fontSize: '1rem'}}>
                    + Add another Ingredient</BlankButton> 


                {directions.map((input, index) => {
                return (<Stack direction="row" spacing={1} key={input.step}>                  
                        <TextField
                            variant='filled'
                            label='Step'
                            value={input.step}
                            name='step'
                            onChange={event => handleDirectionChange(index, event)}
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
                            fullWidth
                            variant='filled'
                            label='Directions'
                            value={input.direction}
                            name='direction'
                            onChange={event => handleDirectionChange(index, event)}
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
                        onClick={() => removeDirection(index)}>
                            -
                            </BlankButton> 
                    </Stack>
                    )
                })}
                    <BlankButton
                    type="button" 
                    onClick={addDirectionsField}
                    style={{width: '20%', fontSize: '1rem'}}>
                    +Add next Step
                    </BlankButton>              
                    <TextField
                    variant='filled'
                    label='Yield'
                    value={recipeYield}
                    name='recipeYield'
                    onChange={(e) => setRecipeYield(e.target.value)}
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

