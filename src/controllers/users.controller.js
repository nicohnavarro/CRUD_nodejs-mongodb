const usersCtrl = {}
const User = require('../models/User');

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signUp = async(req, res) => {
    console.log(req.body);
    const errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({ text: 'Password do not match.' });
    }
    if (password.length < 4) {
        errors.push({ text: 'Password must be at least 4 characters.' });
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            email
        });
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'The email is already in use.');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({ name, email, password })
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'You are registered!');
            res.redirect('/users/signin');
        }
    }


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