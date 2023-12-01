const express = require('express');
const {getCasas,postCasas,deleteCasas,putCasas} = require("../controllers/casa.controller")
const casasRouter = express.Router();

casasRouter.get("/",getCasas)
casasRouter.post("/",postCasas)
casasRouter.delete("/",deleteCasas)
casasRouter.put("/",putCasas)

module.exports = casasRouter;