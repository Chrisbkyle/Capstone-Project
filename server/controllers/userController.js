const Models = require('../models')
const service = require('../services/userServices')



async function getUsers(req, res) {
    const user = await Models.Users.findByPk(req.body.username);
      if (!req.body.username || !req.body.password) {
        res.send('Please Complete all fields for login')
      } else if (user === null) {
        res.send('Username not found')
      } else if (req.body.password != user.password) {
        res.send('Password not found')  
      } else {
        res.send('Login Successful')
      }
}

async function addUser(req, res)  {
        const user = await Models.Users.findByPk(req.body.username);
        const userValid = /^(?=.{5,}$)[a-zA-Z_]*\d*$/;
        const passwordValid = /(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*^[A-Za-z])(?=.{5,})/i;
        Object.values(req.body).map(item => console.log(typeof(item)))
        if (userValid.test(req.body.username) != true) {
            res.send('Username does not match required criteria')
        } else if (passwordValid.test(req.body.password) != true ) {
            res.send('Password does not match required criteria')
        } else if ((Object.values(req.body).map(item => typeof(item) != typeof('string'))) == true) {
            res.send('Data sent needs to be a string')
        } else if (Object.values(req.body).map(item => item.length < 1) == true || Object.values(req.body).map(item => item.length > 255) == true) {
           res.send('Fields must be between 1 and 255 character');
        } else if (!req.body.username || !req.body.password|| !req.body.email) {
            res.send("Please complete all fields for signup")  
        }   else { 
            if(!user){
                res.send("Signup Successful")
                Models.Users.create(req.body)
            } else {
                res.send('user already exists')
            }
        }
    }


module.exports = {  
    getUsers,
    addUser
}  