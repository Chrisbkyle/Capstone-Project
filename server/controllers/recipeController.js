const Models = require('../models')

const getRecipes = (req, res) => {
    Models.Recipes.findAll({}).then(function (data) {
        res.send(data)
    }).catch(err => {
        throw err
    })
}
 
//get info on req from front end, leave for now
const addRecipes = (req, res) => {
    // console.log(req.body.recipe)
    // Models.Recipes.create({})
    Models.Recipes.create({recipe: req.body.recipe, ingredients: req.body.ingredients, directions:req.body.directions, yield: req.body.yield, dish: req.body.dish, station: req.body.station});
}

module.exports = {
    getRecipes,
    addRecipes
}