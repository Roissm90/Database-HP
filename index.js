const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config()

const personajesRouter = require("./src/api/routes/personajes.routes");
const librosRouter = require("./src/api/routes/libros.routes");
const casasRouter = require("./src/api/routes/casas.routes");
const sangresRouter = require('./src/api/routes/sangres.routes');

const {connect} = require('./src/utils/db');
const PORT = process.env.PORT;

const app = express();
connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/personajes', personajesRouter);
app.use('/libros', librosRouter);
app.use('/casas', casasRouter);
app.use('/sangres', sangresRouter);

app.listen(PORT, () => console.log(`escuchando en el puerto: http://localhost:${PORT}`))