import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const router = Router();

router.post('/', (req, res, next) => new CarController(req, res, next).createCar());
router.get('/', (req, res, next) => new CarController(req, res, next).getAllCar());
router.get('/:id', (req, res, next) => new CarController(req, res, next).getByIdCar());
router.put('/:id', (req, res, next) => new CarController(req, res, next).updateCar());

export default router;