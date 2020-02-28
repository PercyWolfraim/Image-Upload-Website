const {Router} = require('express');
const router = Router();

router.get('/',(req,res) =>{
    res.render('index.html',{title: 'Subida de imagenes'});
});

router.get('/upload',(req,res)=>{
    res.render('upload.html',{title: 'Imagenes subidas'});
});

router.post('/upload',(req,res) =>{
    
});

module.exports = router;