const Personaje = require("../models/personaje.model");

const getPersonajes = async (req, res) => {
  try {
    const allPersonajes = await Personaje.find()
    .populate('apariciones')
    .populate('casa')
    .populate('sangre')
    .exec();
    return res.status(200).json(allPersonajes);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postPersonajes = async (req, res) => {
  try {
    const newPersonaje = new Personaje(req.body);
    const createdPersonaje = await newPersonaje.save();
    return res.status(201).json(createdPersonaje);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deletePersonajes = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPersonaje = await Personaje.findByIdAndDelete(id);
    if (!deletedPersonaje) {
      return res.status(404).json({ message: "El ID del libro no existe" });
    }
    return res.status(200).json(deletedPersonaje);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putPersonajes = async (req, res) => {
  try {
    const { id } = req.params;
    const putPersonaje = new Personaje(req.body);
    putPersonaje._id = id;

    const updatedPersonaje = await Personaje.findByIdAndUpdate(id, putPersonaje, {
      new: true,
    });
    if (!updatedPersonaje) {
      return res.status(404).json({ message: "El ID de este libro no existe" });
    }
    return res.status(200).json(updatedPersonaje);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getPersonajes, postPersonajes, deletePersonajes, putPersonajes };
