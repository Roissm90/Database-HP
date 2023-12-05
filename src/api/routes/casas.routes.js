const express = require('express');
const {getCasas,postCasas,deleteCasas,putCasas} = require("../controllers/casa.controller")
const casasRouter = express.Router();
const { uploadToCloudinary } = require('../middleware/file.middleware');
const {upload} = require('../middleware/file.middleware');
const Casa = require('../models/casa.model');

casasRouter.get("/",getCasas)
casasRouter.post("/",postCasas)
casasRouter.delete("/:id",deleteCasas)
casasRouter.put("/:id",putCasas)
casasRouter.put('/add-photo/:id', [upload.single('picture'), uploadToCloudinary], async (req, res, next) => {
    try {
      const casaId = req.params.id; // Obtén el ID de la casa de los parámetros de ruta
      const casaPicture = req.file_url ? req.file_url : null; // Verifica si hay una URL de imagen
  
      const updatedCasa = await Casa.findByIdAndUpdate(casaId, { picture: casaPicture }, { new: true });
  
      if (!updatedCasa) {
        return res.status(404).json({ error: 'Casa no encontrada' });
      }
  
      return res.status(200).json(updatedCasa);
    } catch (err) {
      next(err);
    }
  });
  

module.exports = casasRouter;