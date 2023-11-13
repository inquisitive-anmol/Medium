const express = require('express');
const router = express.Router();
const{validateBlog,isLoggedIn, isAuthor} = require('../middleware');
const {showAllBlogs, newBlogForm, newBlog, showBlog, editBlogForm, editBlog, deleteBlog} = require('../Controllers/blogs');

router.get('/blogs', showAllBlogs);
router.get('/blogs/new', isLoggedIn, newBlogForm);
router.post('/blogs', isLoggedIn, validateBlog, newBlog);
router.get('/blogs/:blogID',showBlog);
router.get('/blogs/:blogID/edit',isLoggedIn, isAuthor,  editBlogForm);
router.patch('/blogs/:blogID', isLoggedIn, isAuthor,editBlog );
router.delete('/blogs/:blogID',isLoggedIn, isAuthor,  deleteBlog)

module.exports = router;