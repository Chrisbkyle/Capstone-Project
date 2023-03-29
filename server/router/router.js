const express = require('express');
let router = express.Router();
const controller = require('../controllers');


// Recipe Routes

router.get('/recipes', (req, res) => {
    controller.recipeController.getRecipes(req, res);
});

router.get('/recipepage', (req, res) => {
    controller.recipeController.getSpecificRecipe(req, res);
});

router.post('/recipebuilder', (req, res) => {
    controller.recipeController.addRecipes(req, res);
})

router.delete('/recipedelete', (req, res) => {  
    controller.recipeController.deleteRecipe(req, res);
})

// Login/Signup routes
router.post('/login', (req, res) => {
    controller.userController.getUsers(req, res);
});

router.post('/signup', (req, res) => {
    controller.userController.addUser(req, res);
});




module.exports = 
router