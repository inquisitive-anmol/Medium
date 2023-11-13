const User = require('../Models/User');

const registerForm = (req, res) => {
    try {
        res.render('auth/signup');
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }
};

const register = async(req, res) => {
    try {
        let{username, email, password} = req.body;
        let user = new User({username, email});
        const newUser = await User.register(user, password);
        req.login(newUser, (error) => {
            if(error){
                return next(error);
            }
            req.flash('success', "User registered successfully!")
            res.redirect('/blogs');
        })
    } catch (error) {
        req.flash('error', error.message);
        return res.redirect('/register');
    }  
};

const loginForm = (req, res) => {
    try {
        res.render('auth/login');
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }  
};

const login = function(req, res){
    res.redirect('/blogs')
};

const logout = (req, res) => {
    req.logOut(() => {
        req.flash('success', 'Logged out successfully');
        res.redirect('/login')
    })
};

const profile = async(req, res) => {
    try {
        let{userID} = req.params;
        let user = await User.findById(userID).populate('saved');
        res.render('auth/profile', {user});
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }  
};

const bookmark = async(req, res, next) => {
    try {
        let{blogID} = req.params;
        let userID = req.user._id;
        let user = req.user;
        const isSaved = user.saved.includes(blogID);
     
     if(!isSaved)
     {
        await User.findByIdAndUpdate(userID, {$addToSet : {saved : blogID}});
     }
     else{
        await User.findByIdAndUpdate(userID, {$pull : {saved : blogID}});
     }
     res.send('bookmarked');
    } catch (error) {
        res.render('blogs/error', {err : error.message});   
    }
};



module.exports = {registerForm, register, loginForm, login, logout, profile,bookmark};