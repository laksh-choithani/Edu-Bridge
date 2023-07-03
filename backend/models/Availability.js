const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
    supervisor : {type : mongoose.Schema.Types.ObjectId},
    day : {type:String},
    availableSlots: [{ type: String, required: true }],

},{timestamps : true});

const Availability = mongoose.model('Availability',AvailabilitySchema);

module.exports = Availability;