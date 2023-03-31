const Models = require('../models')



exports.validateUserForm = (obj) => {
    const user = Models.Users.findByPk(obj.username);
    console.log(user)
    console.log(user.username)
    const userValid = /^(?=.{5,}$)[a-zA-Z_]*\d*$/;
    const passwordValid = /(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*^[A-Za-z])(?=.{5,})/i;
    console.log(obj.username)
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
    } else if (user.username === obj.username) {
        console.log("Username already in use")
        return false;
    } else {
        console.log("Signup Successful")
        return true;
    }
}


//duplicate username needs fixing