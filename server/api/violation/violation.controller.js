const Violation = require('./violation.model')

// // // //

// GET /violations
module.exports.list = (req, res, next) => {
    return Violation.find({}, '-_id').then((response) => {
        res.setHeader('Cache-Control', 'max-age=604800, public');
        return res.status(200).send(response).end();

    }).catch(next);
};
