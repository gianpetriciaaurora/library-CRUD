const mongoose = require('mongoose');
const Books = require('./book.model');
const Schema = mongoose.Schema;

const CircularSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true         
    },
    buku: [{
        type: Schema.Types.ObjectId,
        ref: 'Books',
        required: true
    }],
    tglPinjam: {
        type: Date,
        required: true

    },
    tglKembali: {
        type: Date,
        required: true
    },
},
    {
        timestamps: true
    });

const Circulars = mongoose.model('Circulars', CircularSchema);

module.exports = Circulars;