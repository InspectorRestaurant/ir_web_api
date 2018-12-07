const { MongoClient } = require('mongodb');

const DB_URL = process.env.DB || 'mongodb://localhost:27017';
const DB_NAME = 'test';

function errorResponse(callback, err) {
  console.error(err);

  callback(null, {
    statusCode: 500,
    body: JSON.stringify({ error: err })
  })
}

function successResponse(callback, res) {
  console.log('Saved new page request. Current count:', res.value.requests);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res)
  });
}

module.exports.run = function(event, context, callback) {
  MongoClient.connect(DB_URL, (err, connection) => {
    if (err) return errorResponse(callback, err);

    const db = connection.db(DB_NAME);
    const restaurantCollection = db.collection('restaurants');

    restaurantCollection.find({}).limit(10).toArray((err, result) => {
      if (err) return errorResponse(callback, err);

      connection.close();

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });
    })
  });
}
