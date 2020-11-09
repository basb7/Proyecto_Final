const mongoose = require('mongoose');

const conectDB = ()=>{
    //||'mongodb://127.0.0.1:27017/Blog'
    mongoose.set('useCreateIndex', true)
    mongoose.connect('mongodb+srv://dbGalindo_Volley:uUtPadZuaAAki8Cn@cluster0.so902.mongodb.net/dbBlog?retryWrites=true&w=majority' , { useNewUrlParser: true,  useUnifiedTopology: true}),(error)=>{
        if(error){
            console.log('Error', error)
        }else{
            console.log('Se conecto correctamente')
        }
    }
}

module.exports = {conectDB}