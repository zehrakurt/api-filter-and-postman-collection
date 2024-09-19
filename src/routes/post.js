const express = require('express');
const router = express.Router();
const Post = require('../../migrations/post');


router.get('/', async (req, res) => {
  try {
    const post = await Post.getAll();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching posts' });
  }
});

router.post('/', async (req, res) => {
    try {
      const newPost = await Post.create(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);  
      res.status(400).json({ message: 'Error creating post', error: error.message });
    }
  });
  

module.exports = router;
