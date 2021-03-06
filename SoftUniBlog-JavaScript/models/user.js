const Sequelize = require('sequelize');
const encryption = require('../utilities/encryption');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            required: true,
            unique: true,
            allowNull: false
        },
        passwordHash: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },
        fullName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        profilePicture: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING,
            required: true
        }
    }, {
        timestamps: false
    });

    User.prototype.authenticate = function (password) {
        let inputPasswordHash = encryption.hashPassword(password, this.salt);
        return inputPasswordHash === this.passwordHash;
    };

    User.associate = (models) => {
        User.hasMany(models.Article, {
            foreignKey: 'authorId',
            sourceKey: 'id'
        });
    };

    return User;
};

