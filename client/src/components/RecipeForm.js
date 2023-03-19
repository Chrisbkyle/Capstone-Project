import React from 'react';
import { Button, FormGroup, Grid, TextField, Stack, MenuItem, InputLabel, Select } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import '../App.css'
import { BlankButton } from './styledComponents';


const theme = createTheme
export default function RecipeForm() {

    const [recipe, setRecipe] = React.useState('');
    const [ingredients, setIngredients] = React.useState([{
                                                        ingredient: '',
                                                        quantity: '',
                                                        unitOfMeasure: ''
                                                        }]);

    const [directions, setDirections] = React.useState([{
                                                        step:'',
                                                        direction: ''
                                                        }]);

    const [recipeYield, setRecipeYield] = React.useState('');
    const [station, setStation] = React.useState('');
    const [dish, setDish] = React.useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Recipe Logged' + ingredients.map((e) => Object.values(e)))
    }

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

    const removeIngredient = () => {
        
    }

    const removeDirection = () => {
        
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <Stack direction="column" spacing={2}>

                    <TextField
                    className='test'
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
                return (<Stack direction="row" spacing={1} key={index}>                    
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
                            name='unitOfMeasure'
                            label="Unit of Measure"
                            onChange={event => handleIngredientChange(index, event)}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: '1px solid black!important'
                                }
                            }}>
                            <MenuItem value='ml'>mL</MenuItem>
                            <MenuItem value='g'>g</MenuItem>
                            <MenuItem value='lbs'>lbs</MenuItem>
                        </Select>
                        <BlankButton type='button' onClick={removeIngredient}>-</BlankButton>
                    </Stack>
                    )
                })}
                    <BlankButton 
                    type="button"
                    onClick={addIngredientsField}
                    style={{width: '20%', fontSize: '1rem'}}>
                    + Add another Ingredient</BlankButton> 


                {directions.map((input, index) => {
                return (<Stack direction="row" spacing={1} key={index}>                  
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
                        <BlankButton type='button' onClick={removeDirection}>-</BlankButton> 
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

                    <BlankButton type="submit">Submit Recipe</BlankButton> 
                </Stack>    
            </form>
        </div>
    )
}

