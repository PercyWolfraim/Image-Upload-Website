if(process.env.NODE_ENV != 'production'){
    require ('dotenv').config();   
}

const express = require('express');
const ejs = require('ejs');
const path = require('path');
const multer = require('multer');
const uuid = require('uuid/v4');
const morgan = require('morgan');

//Inicializaciones
const app = express();

//settings
require('./database');
app.set('port', 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',require('ejs').renderFile);
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads"),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    },
});

//midleware
app.use(multer({ storage,
fileFilter: (req,file,cb)=>{
    const fileType = /jpeg|jpg|png|gif/;
    const mimename = fileType.test(file.mimetype);
    const extname = fileType.test(file.originalname);
    if(mimename && extname){
        return cb(null,true);
    }
    cb('Debe ser una imagen valida');
} }).single('image'));
app.use(morgan('dev'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use(require('./routes/index'));

//inicializar servidor
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
    console.log(path.join(__dirname,'public'));
});