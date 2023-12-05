const express = require('express');
const {getPersonajes,postPersonajes,deletePersonajes,putPersonajes} = require("../controllers/personaje.controller")
const personajesRouter = express.Router();
const { uploadToCloudinary } = require('../middleware/file.middleware');
const {upload} = require('../middleware/file.middleware');
const Personaje =  require('../models/personaje.model')

personajesRouter.get("/",getPersonajes)
personajesRouter.post("/",postPersonajes)
personajesRouter.delete("/:id",deletePersonajes)
personajesRouter.put("/:id",putPersonajes)
personajesRouter.put('/add-photo/:id', [upload.single('picture'), uploadToCloudinary], async (req, res, next) => {
    try {
      const personajeId = req.params.id; // Obtén el ID de la casa de los parámetros de ruta
      const personajePicture = req.file_url ? req.file_url : null; // Verifica si hay una URL de imagen
  
      const updatedPersonaje = await Personaje.findByIdAndUpdate(personajeId, { picture: personajePicture }, { new: true });
  
      if (!updatedPersonaje) {
        return res.status(404).json({ error: 'Personaje no encontrada' });
      }
  
      return res.status(200).json(updatedPersonaje);
    } catch (err) {
      next(err);
    }
  });

module.exports = personajesRouter;