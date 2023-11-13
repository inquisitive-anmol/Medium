const { number } = require('joi');
const mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    org: {
        type : String,
        // required : true,
        trim : true
    },
    headline : {
        type : String,
        required : true,
        trim : true
    },
    text : {
        type : String,
        trim : true
    },
    date : {
        type : String,
        required : true,
        trim : true
    },
    img : {
        type : String,
        required : true,
        trim : true
    },
    comment : {
        required : true,
        type : String,
        trim : true
    },
    reviews : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Review'
    }], 
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    likes : 
    [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }]
});

let Blog = mongoose.model('Blog', blogSchema);


module.exports = Blog;













