const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    id : String,
    manufacturer : String,
    model : String,
    submodel : String,
    year : String,
    hand : String,
    km : String,
    engineval : String,
    price : String
});

module.exports = mongoose.model('Car', carSchema);
