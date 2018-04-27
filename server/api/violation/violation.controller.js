const Violation = require('./violation.model')

// // // //

/**
* @api {get} /api/violations List
* @apiName list
* @apiGroup Violation
* @apiDescription Gets a list of all Violation types
* @apiPermission public
* @apiSuccess {Collection} root Collection of all Violation types
* @apiError (500) UnknownException Could not retrieve Violations
*/
module.exports.list = (req, res, next) => {
    return Violation.find({}, '-_id').then((response) => {
        res.setHeader('Cache-Control', 'max-age=604800, public');
        return res.status(200).send(response).end();

    }).catch(next);
};
