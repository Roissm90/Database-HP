const Casa = require('../models/casa.model');

const getCasas = async (req, res) => {
    try {
        const allCasas = await Casa.find();
        return res.status(200).json(allCasas);
      } catch (error) {
        return res.status(500).json(error);
      }
};

const postCasas = async (req, res) => {
    try {
      const newCasa = new Casa(req.body);
      const createdCasa = await newCasa.save();
      return res.status(201).json(createdCasa);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const deleteCasas = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCasa = await Casa.findByIdAndDelete(id);
      if (!deletedCasa) {
        return res.status(404).json({ message: "El ID del libro no existe" });
      }
      return res.status(200).json(deletedCasa);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const putCasas = async (req, res) => {
    try {
      const { id } = req.params;
      const putCasa = new Casa(req.body);
      putCasa._id = id;
  
      const updatedCasa = await Casa.findByIdAndUpdate(id, putCasa, {
        new: true,
      });
      if (!updatedCasa) {
        return res.status(404).json({ message: "El ID de este libro no existe" });
      }
      return res.status(200).json(updatedCasa);
    } catch (error) {
      return res.status(500).json(error);
    }
};

module.exports = { getCasas, postCasas, deleteCasas, putCasas };