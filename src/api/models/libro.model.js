const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const librosSchema = new Schema(
    {
        titulo: {type: String, require: true},
        año: {type: Number, require: true},
        sinopsis: {type: String, require: true},
    },
    {
        timestamps: true
    }
)

const Libro = mongoose.model('libro', librosSchema);

module.exports = Libro;