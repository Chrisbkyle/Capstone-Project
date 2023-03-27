const Models = require('../models')
const service = require('../services/userServices')

function getUsers(req, res) {
    Models.Users.findByPk(req.body.username)
    .then(data => {
        if (!data) {
            res.send({result: 400, message: 'Username not found'})
        }
        else if (req.body.password != data.dataValues.password) {
            res.send({result: 400, message:'Password not found'})
        } else {
            res.status({result: 200, message: 'Login Successful'})
        }
    }).catch((err) => {
        console.log(err);
    })
}

const addUser = (req, res) => {
    try {
        if (service.validateUserForm(req.body) == false) {
            res.send({result: 400, message: 'Form invalid'})
        } else {
            res.send({result: 200, message: 'User Signed up'})
            Models.Users.create(req.body)
        }
    } catch {(err) => {
            throw err
        }
    }
}



module.exports = {
    getUsers,
    addUser
}