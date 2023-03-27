const Models = require('../models')



exports.validateRecipeForm = (obj) => {
    console.log(Object.values(obj).map(item => typeof(item) == typeof('string')))
    console.log(typeof(obj.directions, obj.ingredients)) 
    if (Object.values(obj).map(item => typeof(item) != typeof('string')) == true) {
        console.log('Values need to be sent as a string')
        return false;
    } else if (!obj.recipe || !obj.ingredients|| !obj.directions) {
        console.log("Please complete recipe, ingredients and direction fields for upload")
        return false;
    } else if (obj.recipe.length > 255 || obj.yield.length > 255 || obj.station.length > 255 || obj.station.length > 255){
        console.log('Recipe, yield, station or dish cannot be longer than 255 characters')
        return false;
    } else if (obj.ingredients.length > 30000 || obj.directions.length > 30000) {
        console.log('Directions and Ingredients must be below 30 000 characters')
        return false;
    } else if (Models.Recipes.findByPk(obj.recipe) == true) {
        console.log("Recipe already created")
        return false;
    } else {
        console.log("Recipe upload Successful")
        return true;
    }
}

