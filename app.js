if(process.env.NODE_ENV != 'production')
{
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session')
const passport = require('passport')
const User = require('./Models/User');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))
const flash = require('connect-flash');
// ROUTES
const blogRoutes = require('./Routes/blogs');
const reviewRoutes = require('./Routes/reviews');
const authRoutes = require('./Routes/auth');
const BlogAPI = require('./Routes/APIs/blogAPI');
// const seedDB = require('./seed');
const DB = process.env.DB


// MONGOOSE


    mongoose.connect(DB)
    .then(() => {console.log('DB Connected')
    // seedDB()
})
    .catch((err) => console.log(err));

    
// seedDB()



// mongoose.set('strictQuery', true);
// mongoose.connect(DB)
//     .then(() => console.log('DB Connected'))
//     .catch((err) => console.log(err));







app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.urlencoded({extended: true}));
app.use(flash())

// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use( (req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
} )


app.use(blogRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(BlogAPI);
app.get('*', (req, res) => {
    res.render('../pnf', {err : "Page not found"});
})








app.listen(process.env.PORT, () => {
    console.log("Server connected to 8080 port!")
})