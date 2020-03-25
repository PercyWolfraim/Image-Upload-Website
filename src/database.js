const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/imaginedb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('DB conected'))
    .catch(err => console.error(err)); 