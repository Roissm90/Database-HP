const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personajesSchema = new Schema(
    {
        nombre: {type: String, require: true},
        rol: {type: String, enum: ['Profesor', 'Conserje', 'Director', 'Alumno', 'Otro', 'Fallecido'], require: true},
        casa: [{type: Schema.Types.ObjectId, ref: 'casa'}],
        casaNombre: {type: String, enum: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']},
        sangre: [{type: Schema.Types.ObjectId, ref: 'sangre'}],
        sangreTipo: {type: String, enum: ['Limpia', 'Mestiza', 'Sucia', 'Squib'], require: true},
        patronus: {type: String, default: "Desconocido", require: true},
        agrupacion: {type: String, enum: ['Ninguna', 'Órden del Fénix y Ejército de Dumbledore', 'Órden del Fénix', 'Ejército de Dumbledore', 'Mortífagos', 'Ministerio'], require: true}, 
        horrocruxes: [{type: String}, {type: String}, {type: String}, {type: String}, {type: String}, {type: String}, {type: String}],
        apariciones: [{type: Schema.Types.ObjectId, ref: 'libro'}],
        picture: {type: String}
    },
    {
        timestamps: true
    }
)

const Personaje = mongoose.model('personaje', personajesSchema);

module.exports = Personaje;