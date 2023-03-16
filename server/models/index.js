const Users = require('./userModel');
const Recipes = require('./recipesModel');
const Ingredients = require('./ingredientsModel');

async function init() {
    await Users.sync();
    await Recipes.sync();
    await Ingredients.sync();
};

init();

module.exports = {
    Users,
    Recipes,
    Ingredients
};