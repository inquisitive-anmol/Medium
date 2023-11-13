const express = require('express');
const router = express.Router();
const Blog = require('../../Models/Blog');

router.post('/blogs/:blogID/like', async(req, res) => {
    try {
        let{blogID} = req.params;
        let foundBlog = await Blog.findById(blogID);
        let userID = req.user._id;

        if(foundBlog.likes.includes(userID))
        {
            await Blog.findByIdAndUpdate(blogID, {$pull : {likes : userID}});
        }
        else{
            await Blog.findByIdAndUpdate(blogID, {$addToSet : {likes : userID}});
        }
        res.send("API's Response");
    } catch (error) {
        res.render('./Blogs/error', {err : "ABC"})        
    }
});




module.exports = router;