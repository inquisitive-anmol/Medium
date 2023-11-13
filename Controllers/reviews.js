
const Blog = require('../Models/Blog');
const Review = require('../Models/Review');

const addReview = async(req, res) => {
    try {
        let{id} = req.params;
        let blog = await Blog.findById(id);
        let {comment} = req.body;
        let newReview = await Review.create({name: req.user.username, comment});
        await newReview.save();
        blog.reviews.push(newReview);
        blog.save();
        req.flash('success', "Comment Added!")
        res.redirect(`/blogs/${id}`);
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }
};



module.exports = addReview;