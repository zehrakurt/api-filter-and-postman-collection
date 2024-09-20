const express = require('express');
const router = express.Router();
const Comment = require('../../migrations/comment'); 


router.get('/', async (req, res) => {
    try {
      const comments = await Comment.getAll(req.query);  
      res.json(comments);  
    } catch (error) {
      res.status(400).json({ message: 'Yorumları alırken hata oluştu' });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.getById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Kayıt Bulunamadı" });
        }
        res.json(comment);
    } catch (error) {
        res.status(400).json({ message: 'error' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedComment = await Comment.update(req.params.id, req.body);
        res.json(updatedComment);
    } catch (error) {
        res.status(400).json({ message: 'error' });
    }
});


router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Yorum oluşturulurken hata:', error);
        res.status(400).json({ message: 'error', error: error.message });
    }
});

module.exports = router;
