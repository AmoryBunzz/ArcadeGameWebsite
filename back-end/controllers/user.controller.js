const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res){
    models.User.findOne({where:{Email:req.body.Email}}).then(result => {
        if(result){
            res.status(409).json({
                message: "Email already exists!",
            });
        }
        else {
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.Password, salt, function(err, hash){
                    const user = {
                        Email: req.body.Email,
                        Password: hash,
                        Role: 0,
                        Name: req.body.Name,
                        Gender: req.body.Gender,
                        DayOfBirth: "0000-00-00",
                        Avatar: "",
                        Friends: ""
                    }
                
                    models.User.create(user).then(result => {
                        res.status(201).json({
                            message: "User created successfully",
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Something went wrong!"
                        });
                    });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error:error
        });
    });
}

function login(req, res) {
    models.User.findOne({where:{Email: req.body.Email}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: "Invalid credentials!",
            });
        }
        else {
            bcryptjs.compare(req.body.Password, user.Password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        Email: user.Email,
                        userId: user.id
                    }, 'secret', function(err, token){
                        res.status(200).json({
                            message: "Authentication successful!",
                            token: token
                        });
                    });
                }
                else {
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}

module.exports = {
    signUp: signUp,
    login: login
}