const Models = require('../models')



function checkPwdandUser(username, password) {    
        let dbSearch = Models.Users.findOne({
        where:{username: username}}).then()

        // if (password != )
        

}



module.exports = {
    checkPwdandUser
}



// find username that equals req.body.username
// get password where username = req.body.username
// if req.body.password === password where req.body.username === username all is good life is happy
// else if req.body.password != pass where req.body.username === username life is terrible you got the wrong password why you like this
// else if req.body.username != exist password doesnt exist