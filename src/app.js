let response;

exports.handler = async (event, context) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Health Check',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
    return response
};
