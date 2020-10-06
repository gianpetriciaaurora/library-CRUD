const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    judul: {
        type: String,
        required: 'Judul is required'
    },
    pengarang: {
        type: String,
        required: 'Pengarang is required'
    },
    penerbit: {
        type: String,
        required: 'Penerbit is required'
    },
    thTerbit: {
        type: String,
        required: 'Tanggal Terbit is required'
    },
    //Sisa
    stock: {
        type: String,
        required: 'Stock is required'
    }
},
{
    timestamps:true
});

const Books = mongoose.model('Books', BookSchema);

module.exports = Books;