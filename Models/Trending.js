const mongoose = require('mongoose');

let trendSchema = new mongoose.Schema({
    index : {
        type : String,
        required : true,
        trim : true
    },
    name : {
        type : String,
        required : true,
        trim : true
    },
    text : {
        type : String,
        required : true,
        trim : true
    },
    details : {
        type : String,
        required : true,
        trim : true
    }
})

let Trend = mongoose.model('Trend', trendSchema);

module.exports = Trend;






















