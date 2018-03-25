const Article = require('../models').Article;
const User = require('../models').User;

module.exports = {
    index: (req, res) => {
        Article.findAll({
            limit: 6,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User
            }]
        }).then(articles => {
            articles.map(article => {
                if (article.dataValues.content.length >= 250) {
                    article.dataValues.content = article.dataValues.content.substring(0, 250) + "...";
                }
            });
            res.render('home/index', {articles: articles});
        });
    }
};