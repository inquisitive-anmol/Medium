const Blog = require('../Models/Blog');
const User = require('../Models/User');
const Trend = require('../Models/Trending');



const showAllBlogs = async (req, res) =>{
    try {
        let blogs = await Blog.find();
        let trends = await Trend.find();
        res.render('blogs/index', {blogs, trends});
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }
};

const newBlogForm = (req, res) => {
    try {
        res.render('blogs/new');
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }
};


let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function getDate()
{
    let date = new Date().toJSON()
    let month = date.slice(5,7);
    let day = date.slice(8, 10);
    let str = months[month - 1] + ` ${day}`
    return str;
};


const newBlog = async(req, res) => {
    try {
        let{org, headline, text, img, comment} = req.body;
        if(img === '')
        {
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1DvemFDUdAtR8JBJ7lIKcNEBHAEI4_uNEA&usqp=CAU"
        }
        let date = getDate();
        await Blog.create({name : req.user.username, org, headline, text, img, comment, date, author : req.user._id, likes : []});
        res.redirect('/blogs')
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }   
};


const showBlog = async(req, res) => {
    try {
        let {blogID} = req.params;
        let blog = await Blog.findById(blogID).populate('reviews');
        res.render('blogs/show', {blog});
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }
};

const editBlogForm = async(req, res) => {
    try {
        let {blogID} = req.params;
        let blog = await Blog.findById(blogID);
        res.render('blogs/edit', {blog});
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }
};

const editBlog = async(req, res) => {
    try {
        let {blogID} = req.params;
        let{name, org, headline, text, img, comment} = req.body;
        if(img === '')
        {
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1DvemFDUdAtR8JBJ7lIKcNEBHAEI4_uNEA&usqp=CAU"
        }
        let date = getDate();
        await Blog.findByIdAndUpdate(blogID, {name, org, headline, text, img, comment, date});
        res.redirect(`/blogs/${blogID}`);
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }
};

const deleteBlog = async(req, res) => {
    try {
        let {blogID} = req.params;
        let Users = await User.find({});
        for(let user of Users){
            await User.findByIdAndUpdate(user._id, {$pull : {saved : blogID}});
        }
        await Blog.findByIdAndDelete(blogID);
        res.redirect('/blogs');
    } catch (error) {
        res.render('blogs/error', {err : error.message})
    }
};



module.exports = {showAllBlogs, newBlogForm, newBlog, showBlog, editBlogForm, editBlog, deleteBlog};