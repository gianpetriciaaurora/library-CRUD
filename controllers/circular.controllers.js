const Circulars = require('../model/circular.model');

class BookController {

    static create(req, res) {
        Circulars.create(req.body)
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
        Circulars.findByIdAndUpdate({ _id: req.params.id }, {
            $set:
            {
                user: req.body.user, 
                buku: req.body.book, 
                tglPinjam: req.body.tglPinjam, 
                tglKembali: req.body.tglKembali
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
        Circulars.findByIdAndRemove({ _id: req.params.id })
            .then(data => {
                res.status(200).json('Deleted successfully')
            })
            .catch((err) => {
                res.status(400).json("Failed to delete");
            })
    }

    static read(req, res) {
        Circulars.find()
            .populate('user','name')
            .populate('buku', 'judul')
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            })
    }

    static findById(req, res) {
        Circulars.findById({ _id: req.params.id })
            .populate('user','name')
            .populate('buku', 'judul')
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            })
    }
}

module.exports = BookController;
