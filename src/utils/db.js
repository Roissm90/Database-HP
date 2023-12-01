const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const connect = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI);
        const {name,host} = db.connection;

        console.log(`conectado a ${name}DB en host ${host}`);
    } catch (error) {
        console.log("error conectado a nuestra BBDD",error);
    }
}
module.exports = {connect}