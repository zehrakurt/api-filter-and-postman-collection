const express = require('express');
const router = express.Router();
const Post = require('../../migrations/post'); 


router.get('/', async (req, res) => {
  try {
    const posts = await Post.getAll(req.query);
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: 'Postları alırken hata oluştu' });
  }
});


router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: 'Post oluştururken hata oluştu', error: error.message });
  }
});


router.get('/:id',async (req,res)=>{
  try{
const post=await Post.getById(req.params.id)
if(!post){
  return res.status(404).json({message:"Kayıt Bulunamadı"})
} res.json(post);
  }catch(error){
      res.status(400).json({message:'error'})
  }
})

router.put('/:id',async (req,res)=>{
  try{
const updatedPost=await Post.update(req.params.id,req.body)
res.json(updatedPost)
  }catch(error){
      res.status(400).json({message:'error'})
  }
})


router.delete('/:id',async (req,res)=>{
  try{
const deletedPost=await Post.delete(req.params.id)
res.status(202).json(deletedPost)
  }catch(error){
      res.status(400).json({message:'error'})
  }
})

module.exports = router;

