const Models = require('../models')

const getUsers = (req, res) => {
    Models.Users.findAll({}).then(function (data) {
        res.send(data)
    })
}

const addUser = (req, res) => {
    console.log(req.body)
    Models.Users.create(req.body)
    .catch(err => {
        throw err
    })
}

module.exports = {
    getUsers,
    addUser
}