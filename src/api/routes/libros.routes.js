const express = require('express');
const {getLibros, postLibros, deleteLibros, putLibros} = require("../controllers/libro.controller")
const librosRouter = express.Router();

librosRouter.get("/",getLibros)
librosRouter.post("/",postLibros)
librosRouter.delete("/",deleteLibros)
librosRouter.put("/",putLibros)

module.exports = librosRouter;