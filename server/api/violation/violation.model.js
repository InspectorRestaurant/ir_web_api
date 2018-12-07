const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

delete mongoose.connection.models['Violation'];

const Violation = new Schema({
    vid: {
        type: String
    },
    desc: {
        type: String
    }
},
    // Collection options
    {
        timestamps: {
            createdAt: 'createdOn',
            updatedAt: 'updatedOn'
        },
        versionKey: false
    }
);

// // // //

module.exports = mongoose.model('Violation', Violation)
