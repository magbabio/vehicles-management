import {Router} from 'express';
import {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} from '../controllers/cars.controllers.js';

const router = Router();

router.get('/cars', getCars);

router.get('/cars/:id', getCar);

router.post('/cars', createCar);

router.put('/cars/:id', updateCar);

router.delete('/cars/:id', deleteCar);

export default router