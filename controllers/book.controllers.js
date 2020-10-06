const Books = require('../model/book.model');

class BookController {

    static create(req, res) {
        Books.create(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({
                    message: 'Please check your entry data'
                })
            })
    }

    static update(req, res) {
        Books.findByIdAndUpdate({ _id: req.params.id }, {
            $set:
            {
                judul: req.body.judul, 
                pengarang: req.body.pengarang,
                penerbit: req.body.penerbit,
                thTerbit: req.body.thTerbit
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
        Books.findByIdAndRemove({ _id: req.params.id })
            .then(data => {
                res.status(200).json('Deleted successfully')
            })
            .catch((err) => {
                res.status(400).json("Failed to delete");
            })
    }

    static read(req, res) {
        Books.find()
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            })
    }

    static findById(req, res) {
        Books.findById({ _id: req.params.id })
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            })
    }
}

module.exports = BookController;
