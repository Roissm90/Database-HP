const express = require('express');
const {getLibros, postLibros, deleteLibros, putLibros} = require("../controllers/libro.controller")
const librosRouter = express.Router();
const { uploadToCloudinary } = require('../middleware/file.middleware');
const {upload} = require('../middleware/file.middleware');
const Libro =  require('../models/libro.model')

librosRouter.get("/",getLibros)
librosRouter.post("/",postLibros)
librosRouter.delete("/:id",deleteLibros)
librosRouter.put("/:id",putLibros)
librosRouter.put('/add-photo/:id', [upload.single('picture'), uploadToCloudinary], async (req, res, next) => {
    try {
      const libroId = req.params.id; // Obtén el ID de la casa de los parámetros de ruta
      const libroPicture = req.file_url ? req.file_url : null; // Verifica si hay una URL de imagen
  
      const updatedLibro = await Libro.findByIdAndUpdate(libroId, { picture: libroPicture }, { new: true });
  
      if (!updatedLibro) {
        return res.status(404).json({ error: 'Libro no encontrada' });
      }
  
      return res.status(200).json(updatedLibro);
    } catch (err) {
      next(err);
    }
  });

module.exports = librosRouter;