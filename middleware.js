const Blog = require('./Models/Blog');
const {blogSchema, reviewSchema} = require('./Schema');

const validateBlog = (req, res, next) => {
    let{headline, text, comment} = req.body;
    const{error} = blogSchema.validate({headline, text, comment});
    if(error)
    {
        return res.render('./Blogs/error', {err : error.message});
    }else{
        next();
    }
};


const validateReview = (req, res, next) => {
    let{comment} = req.body;
    const{error} = reviewSchema.validate({comment});
    if(error)
    {
        return res.render('./Blogs/error', {err : error.message});
    }else{
        next();
    }

}


const isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated())
    {
        req.flash('error', "Please login first!")
        return res.redirect('/login');
    }
    next();
}

const isAuthor = async(req, res, next) => {
    let{blogID} = req.params;
    let blog = await Blog.findById(blogID);
    if(!blog.author.equals(req.user._id))
    {
        req.flash('error', "You are not the authorized user");
        return res.redirect(`/blogs/${blogID}`);
    }
    next();
}
module.exports = {validateBlog,validateReview, isLoggedIn, isAuthor};