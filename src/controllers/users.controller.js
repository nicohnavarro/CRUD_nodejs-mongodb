const usersCtrl = {}
const User = require('../models/User');

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signUp = (req, res) => {
    res.send('users/signup');
};

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signIn = (req, res) => {
    res.send('users/in');
};

usersCtrl.logOut = (req, res) => {
    res.send('users/logOut');
};

module.exports = usersCtrl;