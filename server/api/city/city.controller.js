const Restaurant = require('../restaurant/restaurant.model')

// // // //

/**
* @api {get} /api/cities List
* @apiName list
* @apiGroup City
* @apiDescription Gets a list of all distinct City names
* @apiPermission public
* @apiSuccess {Collection} root Collection of all Restaurant cities
* @apiError (500) UnknownException Could not retrieve cities
*/
module.exports.list = (req, res, next) => {
    return Restaurant.find().distinct('address.city', (err, response) => {
        res.setHeader('Cache-Control', 'max-age=604800, public');
        return res.status(200).send(response).end();
    }).catch(next);
};
