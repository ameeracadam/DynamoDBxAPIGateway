const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-east-1', apiVersion: '2012-08-10'});

exports.fn = (event, context, callback) => {
    const params = {
        Item: {
            "Name": {
                S: "dasf787af8safa"
            },
            "Age": {
                N: "500"
            }
        },
        TableName: "demo-table"
    };
    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            console.log(data);
            callback(null, data);
        }
    });
};
