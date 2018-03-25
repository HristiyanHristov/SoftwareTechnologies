const User = require('../models').User;
const Article = require('../models').Article;
const encryption = require('../utilities/encryption');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: (req, res) => {
        let registerArgs = req.body;

        User.findOne({where: {email: registerArgs.email}}).then(user => {
            let errorMsg = '';
            if (user) {
                errorMsg = 'User with the same username exists!';
            }
            else if (registerArgs.password !== registerArgs.repeatedPassword) {
                errorMsg = 'Passwords do not match!';
            }

            if (errorMsg) {
                registerArgs.error = errorMsg;
                res.render('user/register', registerArgs);
            }
            else {
                let salt = encryption.generateSalt();
                let passwordHash = encryption.hashPassword(registerArgs.password, salt);

                let userObject = {
                    email: registerArgs.email,
                    passwordHash: passwordHash,
                    fullName: registerArgs.fullName,
                    salt: salt,
                    profilePicture: registerArgs.profilePicture,
                    description: registerArgs.description
                };

                User.create(userObject).then(user => {
                    req.logIn(user, (err) => {
                        if (err) {
                            registerArgs.error = err.message;
                            res.render('user/register', registerArgs);
                            return;
                        }
                        res.redirect('/');
                    })
                })
            }
        })
    },
    loginGet: (req, res) => {
        res.render('user/login');
    },
    loginPost: (req, res) => {
        let loginArgs = req.body;
        User.findOne({where: {email: loginArgs.email}}).then(user => {
            if (!user || !user.authenticate(loginArgs.password)) {
                loginArgs.error = 'Either username or password is invalid!';
                res.render('user/login', loginArgs);
                return;
            }

            req.logIn(user, (err) => {
                if (err) {
                    res.render('/user/login', {error: err.message});
                    return;
                }
                res.redirect('/');
            })
        })
    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    details: (req, res) => {
        User.findOne({where: {fullName: req.params.name}}).then(user => {
            if (user) {
                Article.findAll({
                    where: {authorId: user.dataValues.id},
                    order: [['createdAt', 'DESC']],
                    include: [{
                        model: User
                    }]
                }).then(article => {
                    res.render('user/details', {articles: article, user: user});
                });
            }
            else {
                Article.findAll({
                    limit: 6,
                    order: [['createdAt', 'DESC']],
                    include: [{
                        model: User
                    }]
                }).then(articles => {
                    res.render('home/index', {
                        error: "There isn't such user",
                        articles: articles
                    });
                });
            }
        });
    }
};