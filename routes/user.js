module.exports = (app)=>{
    const userController = require('../controllers/user')
    app.post('/user/create', userController.create)
    app.post('/login', userController.login)    
}