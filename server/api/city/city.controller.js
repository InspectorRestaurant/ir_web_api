const Restaurant = require('../restaurant/restaurant.model')

// // // //

// GET /cities
module.exports.list = (req, res, next) => {
    return Restaurant.find().distinct('address.city', (err, response) => {
        res.setHeader('Cache-Control', 'max-age=604800, public');
        return res.status(200).send(response).end();
    }).catch(next);
};
