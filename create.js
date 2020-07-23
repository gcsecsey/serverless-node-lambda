const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const client = new AWS.DynamoDB.DocumentClient();

module.exports.run = async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'todos',
    Item: {
      id: uuidv4(),
      text: data.text,
      checked: false
    }
  }

  try {
  await client.put(params).promise(); // try catch can be used for error message
  } catch (e) {
    return {
      statusCode: 500,
      body: e
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(params.Item)
  }
}