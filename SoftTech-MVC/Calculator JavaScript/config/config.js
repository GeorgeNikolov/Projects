const path = require('path');

module.exports = {
    development: {
        rootFolder: path.normalize(path.join(__dirname, '/../')),
        database:{
            "development": {
                "username": "root",
                "password": null,
                "database": "blog",
                "host": "127.0.0.1",
                "dialect": "mysql",
                "logging": false
            },
        }
},
    production:{}
};



