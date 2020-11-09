const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)

const blogSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    image: {type: String, required: true}
    
})

module.exports = mongoose.model('Blog', blogSchema)