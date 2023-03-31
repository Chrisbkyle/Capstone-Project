const Users = require('./userModel');
const Recipes = require('./recipesModel');

async function init() {
    await Users.sync();
    await Recipes.sync();
};

init();

module.exports = {
    Users,
    Recipes
};