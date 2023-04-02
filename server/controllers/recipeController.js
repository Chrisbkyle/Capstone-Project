const Models = require('../models')


// Used to populate RecipeTable
const getRecipes = (req, res) => {
    Models.Recipes.findAll({attributes: ['recipe', 'station', 'dish', 'createdAt']}).then(function (data) {
        res.send(data)
    }).catch(err => {
        throw err
    })
}

// Used for RecipePage & RecipeEdit
const getSpecificRecipe = (req, res) => {
    console.log(req.headers.recipename)
    Models.Recipes.findByPk(req.headers.recipename)
    .then((data) =>
        res.send(data)
    ).catch(err => {
        throw err
    })
}

// Used to receive Recipe Builder Form
async function addRecipes(req, res) {
    let ingredientsTest = JSON.parse(req.body.ingredients).map(item => item.ingredient).toString()
    let directionsTest = JSON.parse(req.body.directions).map(item => item.direction).toString()
        const recipeTest = await Models.Recipes.findByPk(req.body.recipe);
        if (Object.values(req.body).map(item => typeof(item) != typeof('string')) == true) {
            res.status(400).send('Values need to be sent as a string')}
        else if (!req.body.recipe || !ingredientsTest|| !directionsTest) {
            res.status(400).send("Please complete recipe, ingredients and direction fields")}
        else if (req.body.recipe.length > 255 || req.body.yield.length > 255 || req.body.station.length > 255 || req.body.dish.length > 255){
            res.status(400).send('Recipe, yield, station or dish cannot be longer than 255 characters')}
        else if (req.body.ingredients.length > 30000 || req.body.directions.length > 30000) {
            res.status(400).send('Directions and Ingredients must be below 30 000 characters')}
        else if (Models.Recipes.findByPk(req.body.recipe) == true) {
            res.status(400).send("Recipe already created")}
        else {
            if(!recipeTest) {
            res.send("Recipe upload Successful")
            Models.Recipes.create({
                        recipe: req.body.recipe, 
                        ingredients: req.body.ingredients, 
                        directions:req.body.directions, 
                        yield: req.body.yield, dish: 
                        req.body.dish, station: 
                        req.body.station})
            } else {
                res.status(400).send('recipe already exsists')
            }
        }}
    

    

async function deleteRecipe(req, res) {
    let recipe = await Models.Recipes.findByPk(req.body.recipe)
    if (!recipe) {
        res.send('Recipe already deleted')
    } else {
    await recipe.destroy();   
    res.send('recipe deleted')
}}

async function updateRecipe(req, res) {

    let ingredientsTest = JSON.parse(req.body.ingredients).map(item => item.ingredient).toString()
    let directionsTest = JSON.parse(req.body.directions).map(item => item.direction).toString()

    const recipeTest = await Models.Recipes.findByPk(req.body.recipe);

    if (Object.values(req.body).map(item => typeof(item) != typeof('string')) == true) {
        res.status(400).send('Values need to be sent as a string')}
    else if (!req.body.recipe || !ingredientsTest|| !directionsTest) {
        res.status(400).send("Please complete recipe, ingredients and direction fields")}
    else if (req.body.recipe.length > 255 || req.body.yield.length > 255 || req.body.station.length > 255 || req.body.dish.length > 255){
        res.status(400).send('Recipe, yield, station or dish cannot be longer than 255 characters')}
     else if (req.body.ingredients.length > 30000 || req.body.directions.length > 30000) {
        res.status(400).send('Directions and Ingredients must be below 30 000 characters')}
    else if (recipeTest) {
        res.status(400).send("Recipe already created")}
    else {
        res.send("Recipe updated Successful")
         Models.Recipes.update({
                    recipe: req.body.recipe, 
                    ingredients: req.body.ingredients, 
                    directions:req.body.directions, 
                    yield: req.body.yield, dish: 
                    req.body.dish, station: 
                    req.body.station},{
                    where: {recipe: req.body.recipe}})
        }
    }



module.exports = {
    getRecipes,
    addRecipes, 
    getSpecificRecipe,
    deleteRecipe,
    updateRecipe
}



