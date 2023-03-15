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
    Recipes.create({recipe: "", ingredients: [], directions: [], yield: "", dish: "", station: ""});
}

module.exports = {
    getRecipes,
    addRecipes
}