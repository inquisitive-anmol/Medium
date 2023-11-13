const express = require('express');
const router = express.Router();
const Passport = require('passport');
const{isLoggedIn} = require('../middleware');
const{registerForm, register, loginForm, login, logout, profile,bookmark} = require('../Controllers/auth');

router.get('/register', registerForm)
router.post('/register', register);
router.get('/login', loginForm)
router.post('/login',Passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),login);
router.get('/logout', logout )
router.get('/user/:userID/profile',isLoggedIn, profile);
router.post('/user/:blogID/save', bookmark);

module.exports = router;