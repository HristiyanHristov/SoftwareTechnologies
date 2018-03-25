const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const Article = sequelize.define('Article', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            required: true
        },
        picture: {
            type: DataTypes.TEXT,
            allowNull: false,
            required: true,
            defaultValue: "https://images.pexels.com/photos/448835/pexels-photo-448835.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            required: true,
            defaultValue: DataTypes.NOW
        }
    });

    Article.associate = function (models) {
        Article.belongsTo(models.User, {
            foreignKey: 'authorId',
            targetKey: 'id'
        });
    };

    return Article;
};