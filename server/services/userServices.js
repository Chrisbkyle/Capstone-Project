const Models = require('../models')


//review once this integrates
let getUserEmailPassword = (req, res) => {
    Models.Users.findAll({
        where: {
            name: req.param.name,
            email: req.param.name,
            password: req.param.name
        },
        
    }.then(res.send(data))
    ).catch(err => {
        throw err
    })
}

module.exports = {
    getIngredients
}