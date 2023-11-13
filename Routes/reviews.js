const express = require('express');
const router = express.Router();
const addReview = require('../Controllers/reviews');
const{validateReview, isLoggedIn} = require('../middleware');

router.post('/blogs/:id/reviews',isLoggedIn, validateReview, addReview);

module.exports = router;