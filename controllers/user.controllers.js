const Users = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserController {
    static create(req, res) {
        Users.create(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({
                    message: err.message
                })
            })
    }

    static update(req, res) {
        Users.findByIdAndUpdate({ _id: req.params.id }, {
            $set:
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role : req.body.role
            }
        })
            .then(data => {
                res.status(201).json("updated successfully");
            })
            .catch((err) => {
                res.status(400).json("Failed to update");
            })
    }

    static delete(req, res) {
        Users.findByIdAndRemove({ _id: req.params.id })
            .then(data => {
                res.status(200).json('Deleted successfully')
            })
            .catch((err) => {
                res.status(400).json("Failed to delete");
            })
    }

    static read(req, res) {
        Users.find()
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            })
    }

    static findById(req, res) {
        Users.findById({ _id: req.params.id })
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            })
    }

    static login(req, res) {
        Users.findOne({ email: req.body.email }).then((user) => {

            const checkLogin = bcrypt.compareSync(req.body.password,user.password);

            //console.log(checkLogin)

            if (checkLogin) {
                var token = jwt.sign({ id: user.email, role: user.role, password : user.password }, process.env.SECRET_KEY);

                res.status(200).json({
                    user: user,
                    token: token
                });

            } else {
                res.status(403).json({
                    message: "Forbidden",
                });
            }
        }).catch((err) => {
            res.status(401).json({
                message: err.message,
            });
        });
    }
}

module.exports = UserController;