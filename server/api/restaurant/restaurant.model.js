const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

delete mongoose.connection.models['restaurants'];

const Restaurant = new Schema({
    facility_id: Number,
    facility: String,
    operation_name: String,
    type: String,
    description: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipcode: String
    },
    inspections: [{
      date: String,
      type:  { type: String },
      comment: String,
      violations: [String]
    }]
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

module.exports = mongoose.model('restaurants', Restaurant)
