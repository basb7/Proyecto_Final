module.exports= (app) =>{
    const blog = require('../controllers/blog');
    const multiparty = require('connect-multiparty');
    let uploadImage = multiparty({uploadDir: './assets/images'})
    app.post('/blog/create', uploadImage, blog.create)
    app.put('/blog/update/:id', blog.updateBlog)
    app.get('/blog/all', blog.blogAll)
    app.delete('/blog/delete/:id', blog.deleteBlog)
    app.get('/blog/getImage', blog.getImage)
    
    
}
