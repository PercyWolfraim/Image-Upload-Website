const {Schema,model} = require('mongoose');

const ImageSchema = new Schema({
    imagePath: {type: String, required: true},
});

module.exports = model('Image',ImageSchema);