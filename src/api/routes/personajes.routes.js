const express = require('express');
const {getPersonajes,postPersonajes,deletePersonajes,putPersonajes} = require("../controllers/personaje.controller")
const personajesRouter = express.Router();

personajesRouter.get("/",getPersonajes)
personajesRouter.post("/",postPersonajes)
personajesRouter.delete("/:id",deletePersonajes)
personajesRouter.put("/:id",putPersonajes)

module.exports = personajesRouter;