const AWS = require('aws-sdk');

let dbClient = new AWS.DynamoDB.DocumentClient({
    'region': 'us-west-2',
});

module.exports = class DB {
    write(params) {
        return new Promise((resolve, reject) => {
            dbClient.put(params, function (err, data) {
                if (err) {
                    return reject(err)
                }
                resolve({...params});
            })
        });
    }

    get(params) {
        return new Promise((resolve, reject)=> {
            dbClient.get(params, function (err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            })
        });
    }

    update(params){
        return new Promise((resolve, reject) => {
            dbClient.update(params, function (err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    }
};