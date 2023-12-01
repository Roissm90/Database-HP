const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const casasSchema = new Schema(
    {
        nombre: {type: String, enum: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'], require: true},
        fundador: {type: String, enum: ['Godric Gryffindor', 'Salazar Slytherin', 'Helga Hufflepuff', 'Rowena Ravenclaw'], require: true},
        reliquia: {type:String, enum: ['Espada', 'Guardapelo', 'Copa', 'Diadema'], require: true}
    },
    {
        timestamps:true
    }
)

const Casa = mongoose.model('casa', casasSchema);

module.exports = Casa;