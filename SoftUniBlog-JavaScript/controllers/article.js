const Article = require('../models').Article;
const User = require('../models').User;

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },
    createPost: (req, res) => {
        let articleArgs = req.body;
        let errorMsg = '';

        if (!req.isAuthenticated()) {
            errorMsg = 'You should be logged in to make articles!';
        }
        else if (!articleArgs.title) {
            errorMsg = 'Invalid title!';
        }
        else if (!articleArgs.content) {
            errorMsg = 'Invalid content!';
        }

        if (errorMsg) {
            articleArgs.error = errorMsg;
            res.render('article/create', articleArgs);
            return;
        }

        articleArgs.authorId = req.user.id;

        if (!articleArgs.picture){
            articleArgs.picture = undefined;
        }

        Article.create(articleArgs).then(article => {
            res.redirect('/');
        }).catch(err => {
            articleArgs.error = err;
            res.render('article/create', articleArgs);
        })
    },
    details: (req, res) => {
        let id = req.params.id;
        Article.findById(id, {
            include: [{
                model: User
            }]}).then(article => {
            res.render('article/details', {article: article.dataValues, user: article.User.dataValues});
        })
    }
};