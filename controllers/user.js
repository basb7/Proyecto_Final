const bcrypt = require('bcrypt');
const User = require('../models/user')

exports.create = (req, res)=>{
    if (!req.body) {
        return res.status(400).send({
            message: 'Todos los campos son obligatorios'
        })
    }

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })

    user.save().then(
        dataUser =>{
            res.send(dataUser)
        }
    ).catch(
        error =>{
            res.status(500).send({
                message: error.message || 'Error al crear el usuario'
            })
        }
    )

}

exports.login = (req, res)=>{
    User.findOne({ email: req.body.email }, (error, dataUser)=>{
        if (dataUser != null) {
            if (bcrypt.compareSync(req.body.password, dataUser.password)){
                res.send({
                    message: 'Hola, Bienvenido'
                })
            }else{
            return res.status(400).send({
                message: 'Los datos no coinciden'
            })
        }
        }else{
            return res.status(400).send({
                message: 'Por favor registraate en nuestra plataforma'
            })
        }
    }
    ) 
}