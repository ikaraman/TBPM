const request = require("request-promise-native");

exports.getFile = function () {
    return new Promise((resolve, reject) => {
        const options = {
            method: "GET",
            uri: "https://s3-ap-southeast-2.amazonaws.com/tbpm-artifact-store/test.txt",
            json: true,
        };

        request(options)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject({ message: "Error happened while getting the file", error: error });
            });
    });
};