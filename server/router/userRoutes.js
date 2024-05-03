const express = require('express');
let router = express.Router();
const controller = require('../controllers');

router.post('/login', (req, res) => {
    controller.userController.getUsers(req, res);
});

router.post('/signup', (req, res) => {
    console.log(req)
    controller.userController.addUser(req, res);
});



module.exports = 
router