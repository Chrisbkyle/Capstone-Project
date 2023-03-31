const express = require('express');
let router = express.Router();
const controller = require('../controllers');

router.get('/recipes', (req, res) => {
    controller.recipeController.getRecipes(req, res);
});

router.get('/recipepage', (req, res) => {
    controller.recipeController.getSpecificRecipe(req, res);
});

router.post('/recipebuilder', (req, res) => {
    controller.recipeController.addRecipes(req, res);
})

router.post('/recipeedit', (req, res) => {
    controller.recipeController.updateRecipe(req, res);
})

router.delete('/recipedelete', (req, res) => {  
    controller.recipeController.deleteRecipe(req, res);
})

module.exports = 
router