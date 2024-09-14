const express=require('express')
const router=express.Router()
const Category =require('../../migrations/category')


router.get('/',async (req,res)=>{
try{
const categories=await Category.getAll()
res.json(categories)
}catch(error){
    res.status(400).json({message:'error'})
}
})


router.post('/',async (req,res)=>{
    try{
    const newcategories=await Category.create(req.body)
    res.status(200).json(newCategory)
    }catch(error){
        res.status(400).json({message:'error'})
    }
    })
    
router.get('/:id',async (req,res)=>{
    try{
const category=await Category.getById(req.params.id)
if(!category){
    return res.status(404).json({message:"Kayıt Bulunamadı"})
}
    }catch(error){
        res.status(400).json({message:'error'})
    }
})


router.patch('/:id',async (req,res)=>{
    try{
const updatedCategory=await Category.update(req.params.id,req.body)
res.json(updatedCategory)
    }catch(error){
        res.status(400).json({message:'error'})
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const deletedCategory=await Category.delete(req.params.id)
        res.json(deletedCategory)
    }catch(error){
        res.status(400).json({message:'error'})
    }
})

module.exports=router