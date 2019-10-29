const AWS = require('aws-sdk');

AWS.config.update({
	accessKeyId: process.env.AWS_KEY,
	secretAccessKey: process.env.AWS_SECRET
});

exports.handler = async event => {
	let response = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*', // Required for CORS support to work
			'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
			'Access-Control-Allow-Methods': 'GET,POST,DELETE,PATCH,OPTIONS'
		},
		body: "All good, we're set."
	};

	return response;
};
