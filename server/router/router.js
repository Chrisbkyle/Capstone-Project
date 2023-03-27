const express = require('express');
let router = express.Router();
const controller = require('../controllers');


// For the recipe databases

router.get('/recipes', (req, res) => {
    controller.recipeController.getRecipes(req, res);
});

router.get('/recipepage', (req, res) => {
    controller.recipeController.getSpecificRecipe(req, res);
});

router.post('/recipebuilder', (req, res) => {
    controller.recipeController.addRecipes(req, res);
})

// Login/Signup info/databases

router.post('/login', (req, res) => {
    controller.userController.getUsers(req, res);
});

router.post('/signup', (req, res) => {
    controller.userController.addUser(req, res);
});



router.get('/ingredients', (req, res) => {
    controller.ingredientsController(req, res);
});


module.exports = 
router