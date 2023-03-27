const Models = require('../models')



exports.validateUserForm = (obj) => {
    const userValid = /^(?=.{5,}$)[a-zA-Z_]*\d*$/;
    const passwordValid = /(?=.*[a-z])(?=.*[0-9])(?=.*[a-zA-Z0-9_])(?=.*^[a-zA-Z])(?=.{5,})/i;
    Object.values(obj).map(item => console.log(typeof(item)))
    if (userValid.test(obj.username) != true) {
        console.log('Username does not match required criteria')
        return false;
    } else if (passwordValid.test(obj.password) != true ) {
        console.log('Password does not match required criteria')
        return false;
    } else if ((Object.values(obj).map(item => typeof(item) != typeof('string'))) == true) {
        console.log('Data sent needs to be a string')
        return false;
    } else if (Object.values(obj).map(item => item.length < 1) == true || Object.values(obj).map(item => item.length > 255) == true) {
        console.log('Fields must be between 1 and 255 character');
        return false;
    } else if (!obj.username || !obj.password|| !obj.email) {
        console.log("Please complete all fields for signup")
        return false;
    } else if (Models.Users.findByPk(obj.username) == true) {
        console.log("Username already in use")
        return false;
    } else {
        console.log("Signup Successful")
        return true;
    }
}


// find username that equals req.body.username
// get password where username = req.body.username
// if req.body.password === password where req.body.username === username all is good life is happy
// else if req.body.password != pass where req.body.username === username life is terrible you got the wrong password why are you like this you absolute failure
// else if req.body.username != exist password doesnt exist