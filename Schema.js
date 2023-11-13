const Joi = require('joi');


const blogSchema = Joi.object({
    // name : Joi.string().required(),
    headline : Joi.string().required(),
    text : Joi.string().required(),
    comment : Joi.string().required(),
})

const reviewSchema = Joi.object({
    // name: Joi.string().required(),
    comment : Joi.string().required()
});


module.exports = {blogSchema, reviewSchema};