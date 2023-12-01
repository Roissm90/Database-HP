const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sangresSchema = new Schema(
    {
        tipo: {type: String, enum: ['Limpia', 'Mestiza', 'Sucia', 'Squib']},
        descripcion: {type: String}
    },
    {
        timestamps: true
    }
)

const Sangre = mongoose.model('sangre', sangresSchema);

module.exports = Sangre;