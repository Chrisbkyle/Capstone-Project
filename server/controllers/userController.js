const Models = require('../models')
const { checkPwdandUser } = require('../services/userServices.js');

function getUsers(req, res) {
    Models.Users.findByPk(req.body.username)
    .then(data => {
        if (req.body.password != data.dataValues.password) {
            res.send('Password incorrect')
        } else {
            res.redirect('http://localhost:3000/')
        }
    }).catch((err) => {
        console.log(err);
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