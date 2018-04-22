const Restaurant = require('./restaurant.model')

// // // //


// Query / Sort / Paginate
const buildQuery = (opts) => {

    // Defines the attributes returned when searching
    const searchResultAttrs = ['_id', 'facility', 'operation_name', 'corp_name', 'address.city', 'address.zipcode']

    // Defines return payload object
    let payload = {};

    // Handles default query
    let query = opts.query || {};

    // Defines Mongoose query
    query = opts.schema.find(query, searchResultAttrs);

    // Sort
    if (opts.sort) {
        query.sort(opts.sort);
    }

    // Pagination
    if (opts.paginate) {

        // Default pagination options
        let page = Number(opts.page) || 0;
        let per_page = Number(opts.per_page) || 20;
        let skip = per_page * page;

        // Applies pagination options to query
        query.limit(per_page);
        query.skip(skip);

        // Assigns pagination parameters to payload
        payload.page = page;
        payload.per_page = per_page;

    }

    // Assigns query to payload
    payload.query = query;

    // Returns payload
    return payload;

}

// // // //

// GET /restaurants
module.exports.list = (req, res, next) => {

    // Build paginated query
    let payload = buildQuery({
        schema:     Restaurant,
        paginate:   true,
        page:       req.query.page,
        per_page:   req.query.per_page
    });

    // Returns paginated query
    return payload.query.lean().exec().then( (response) => {

        res.setHeader('Cache-Control', 'max-age=604800, public');

        return res.status(200).send({
            page:       payload.page,
            per_page:   payload.per_page,
            items:      response })
        .end();

    }).catch(next);
};

// // // //

// GET /restaurants/search
module.exports.search = (req, res, next) => {

    let query = {}

    let matchQuery = [
        { facility: new RegExp(req.query.q, 'i') },
        { operation_name: new RegExp(req.query.q, 'i') },
        { corp_name: new RegExp(req.query.q, 'i') }
    ]

    if (req.query.city) {
        query['$and'] = [
            { '$or': matchQuery },
            { 'address.city': req.query.city }
        ]
    } else {
        query = matchQuery
    }

    // Build paginated query
    let payload = buildQuery({
        schema:     Restaurant,
        paginate:   true,
        page:       req.query.page,
        per_page:   req.query.per_page,
        query:      query
    });

    // Returns paginated query
    return payload.query.lean().exec().then( (response) => {
        return res.status(200).send({
            page:       payload.page,
            per_page:   payload.per_page,
            items:      response })
        .end();
    }).catch(next);
};

// // // //

// GET /restaurants/:id
module.exports.show = (req, res, next) => {
    return Restaurant.findOne({ _id: req.params.id }).then((response) => {
        return res.status(200).send(response).end();
    }).catch(next);
};

// // // //
