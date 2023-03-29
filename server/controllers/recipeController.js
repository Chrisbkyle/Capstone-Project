const Models = require('../models')
const service = require('../services/recipeServices')

const getRecipes = (req, res) => {
    Models.Recipes.findAll({attributes: ['recipe', 'station', 'dish', 'createdAt']}).then(function (data) {
        console.log(data)
        res.send(data)
    }).catch(err => {
        throw err
    })
}

const getSpecificRecipe = (req, res) => {
    console.log(req.headers.recipename)
    Models.Recipes.findByPk(req.headers.recipename)
    .then((data) =>
        res.send(data)
    ).catch(err => {
        throw err
    })
}

const addRecipes = (req, res) => {
    try {
        if (service.validateRecipeForm(req.body) == false ) {
            res.send({ result: 400, message:"Recipe form unable to submit" })
        } else {
            console.log(req.body)
        Models.Recipes.create({
            recipe: req.body.recipe, 
            ingredients: req.body.ingredients, 
            directions:req.body.directions, 
            yield: req.body.yield, dish: 
            req.body.dish, station: 
            req.body.station}
        )}
    } catch {(err) => {
        throw err
    }}
}

async function deleteRecipe(req, res) {
    let recipe = await Models.Recipes.findByPk(req.body.recipe)
    if (!recipe) {
        res.send('Recipe already deleted')
    } else {
    await recipe.destroy();   
    res.send('recipe deleted')
    // .catch()
}}
module.exports = {
    getRecipes,
    addRecipes, 
    getSpecificRecipe,
    deleteRecipe
}


// let book = await Book.findOne({where: {id: req.params.id}}).catch(e => {
//     console.log(e.message)
//  })
//  if (!book){
//    console.log("err");
//  }
//  book.destroy();
//  res.redirect('/books');