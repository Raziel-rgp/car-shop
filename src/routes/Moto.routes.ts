import { Router } from 'express';
import MotoController from '../Controllers/Motorcycle.controller';

const router = Router();

router.post('/', (req, res, next) => new MotoController(req, res, next).createMoto());
router.get('/', (req, res, next) => new MotoController(req, res, next).getAllMoto());
router.get('/:id', (req, res, next) => new MotoController(req, res, next).getByIdMoto());
router.put('/:id', (req, res, next) => new MotoController(req, res, next).updateMoto());

export default router;