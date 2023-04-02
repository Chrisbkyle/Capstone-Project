const Models = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 10;



async function getUsers(req, res) {
    const user = await Models.Users.findByPk(req.body.username);
    if(!user) {
        res.status(400).send('Username not found')
    } else {
    const comparison = await bcrypt.compare(req.body.password, user.password)
      if (!req.body.username || !req.body.password) {
        res.status(400).send('Please Complete all fields for login')
      } 
      else if (!comparison) {
        res.status(400).send('Password not found')  
      } else {
        res.status(200).send('Login Successful')
      }}
      
}

async function addUser(req, res)  {
        const user = await Models.Users.findByPk(req.body.username);
        const userValid = /^(?=.{5,}$)[a-zA-Z_]*\d*$/;
        const passwordValid = /(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*^[A-Za-z])(?=.{5,})/i;
        if (!userValid.test(req.body.username)) {
            res.status(400).send('Username does not match required criteria')
        } else if (!passwordValid.test(req.body.password)) {
            res.status(400).send('Password does not match required criteria')
        } else if ((Object.values(req.body).map(item => typeof(item) != typeof('string'))) == true) {
            res.status(400).send('Data sent needs to be a string')
        } else if (Object.values(req.body).map(item => item.length < 1) == true || Object.values(req.body).map(item => item.length > 255) == true) {
           res.status(400).send('Fields must be between 1 and 255 character');
        } else if (!req.body.username || !req.body.password|| !req.body.email) {
            res.status(400).send("Please complete all fields for signup")  
        }   else { 
            if(!user){
                const password = req.body.password
                const encryptedPassword = await bcrypt.hash(password, saltRounds)
                let users = {
                    'username': req.body.username,
                    'password': encryptedPassword,
                    'email': req.body.email
                }
                res.status(200).send("Signup Successful")
                Models.Users.create(users)
            } else {
                res.status(400).send('user already exists')
            } 
        }
    }


module.exports = {  
    getUsers,
    addUser
}  