const Models = require('../models')

const getIngredients = (req, res) => {
    Models.Ingredients.findAll({}).then(function (data) {
        res.send(data)
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getIngredients
}