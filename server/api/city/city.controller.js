const Restaurant = require('../restaurant/restaurant.model')

// // // //

// GET /cities
module.exports.list = (req, res, next) => {
    return Restaurant.find().distinct('address.city', (err, response) => {
        return res.status(200).send(response).end();
    }).catch(next);
};
