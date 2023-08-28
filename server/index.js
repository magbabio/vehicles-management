import express from 'express';
import {PORT} from './config.js';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js';
import carsRoutes from './routes/cars.routes.js';

const app = express();

app.use(cors());

//Procesar los datoas que vengan del cliente
app.use(express.json());

app.use(indexRoutes);
app.use(carsRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);