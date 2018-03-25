'use strict';

const queryString = require('querystring')

const app = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
}

const saveCredentials = (event, context, callback) => {
  const params = queryString.parse(event.body)
  const email = params.email
  const password = params.password
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Successfully saved credentials! ${params}`
    })
  }
  callback(null, response)
}

module.exports = {
  app,
  saveCredentials
}
