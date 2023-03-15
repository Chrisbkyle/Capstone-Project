const Models = require('../models')

const getUsers = (req, res) => {
    Models.Users.findAll({}).then(function (data) {
        res.send(data)
    })
}