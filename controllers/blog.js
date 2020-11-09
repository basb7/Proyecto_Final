const Blog = require('../models/blog');
const fs = require('fs');
const path = require('path')

exports.create = (req, res)=>{
    if(!req.body){
        return res.status(400).send({
            message: 'No se creo el blog'
        })
    }

    let routeImage = req.files.image.path;
    let splitImage = routeImage.split('images')
    let imagesFiles = splitImage[splitImage.length - 1].replace('/', '').replace('\\', '')


    const blog = new Blog({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        image: imagesFiles
    })

    blog.save()
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.status(500).send({
            message: error.message || 'Error al crear el blog'
        })
    }) 
    

}

exports.updateBlog = (req, res)=>{
    if (!req.body){
       return res.status(400).send({
            message:'Todos los campos son requeridos, no se actualizo!'
       })
    }

    const blog = {
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
    }

    Blog.findByIdAndUpdate(req.params.id, blog, {new:true})
    .then((blog)=>{
        res.send(blog)
    }).catch((error)=>{
        res.status(500).send({
           message: error.message || 'Error al actualizar el blog' 
        })
    })

}

exports.deleteBlog = (req, res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then((blog)=>{
        res.send(blog)
    }).catch((error)=>{
        res.status(500).send({
            message: error.message || 'No se pudo eliminar el blog.'
        })
    })
}

exports.blogAll = (req, res)=>{
    Blog.find().then((blog)=>{
        res.send(blog)
    }).catch((error)=>{
        res.status(500).send({
            message: error.message || 'Error al mostrar los blogs'
        })
    })
}

exports.getImage = (req, res)=>{
    const image = req.query.image ? req.query.image : 'Voley-playa.jpg'
    const imageRoute = './assets/images/' + image;
    fs.exists(imageRoute, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(imageRoute))
        }else{
            res.status(500).send({
                message: 'La imagen no existe'
            })
        }
    })
}