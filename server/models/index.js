const Users = require('./models/userModel');
const Recipes = require('./models/recipesModel');
const Ingredients = require('./models/ingredientsModel');

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
}