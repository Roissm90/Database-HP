const Sangre = require('../models/sangre.model');

const getSangres = async (req, res) => {
    try {
        const allSangres = await Sangre.find();
        return res.status(200).json(allSangres);
      } catch (error) {
        return res.status(500).json(error);
      }
};

const postSangres = async (req, res) => {
    try {
      const newSangre = new Sangre(req.body);
      const createdSangre = await newSangre.save();
      return res.status(201).json(createdSangre);
    } catch (error) {
      return res.status(500).json(error);
    }
};

module.exports = { getSangres, postSangres };