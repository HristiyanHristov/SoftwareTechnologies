const path = require("path");

module.exports = {
    rootFolder: path.normalize(path.join(__dirname, '/../')),
    database:{
        "development": {
            "username": "root",
            "password": "tonytroeff",
            "database": "blog",
            "host": "localhost",
            "dialect": "mysql",
            "logging": false
        },
    }
};