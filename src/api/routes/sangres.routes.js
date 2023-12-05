const express = require('express');
const {getSangres,postSangres} = require("../controllers/sangre.controller")
const sangresRouter = express.Router();

sangresRouter.get("/", getSangres)
sangresRouter.post("/", postSangres)

module.exports = sangresRouter;