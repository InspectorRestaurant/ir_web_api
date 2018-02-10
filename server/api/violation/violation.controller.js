const Violation = require('./violation.model')

// // // //

// GET /violations
module.exports.list = (req, res, next) => {
    return Violation.find({}, '-_id').then((response) => {
        // TODO - implement Cache-Control middleware
        // res.setHeader('Cache-Control', 'max-age=15')
        return res.status(200).send(response).end();

    }).catch(next);
};
