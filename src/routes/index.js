const {Router} = require('express');
const router = Router();

const Image = require('../model/Image');

router.get('/', async (req,res) =>{
    const image = await Image.find();
    res.render('index',{title: 'Uploaded', image});
    
});

router.get('/upload', async (req,res)=>{
    res.render('upload',
    {title: 'Image upload'});
});

router.post('/upload', async (req,res)=>{
    const image = new Image();
    image.imagePath = '/uploads/' + req.file.filename;
    await image.save();
    res.redirect('/');
});
module.exports = router;