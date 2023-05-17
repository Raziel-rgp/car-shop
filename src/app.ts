import express from 'express';
import carRoutes from './routes/Car.routes';
import motoRoutes from './routes/Moto.routes';
import VerifyErrors from './Middlewares/VerifyErrors';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motoRoutes);
app.use(VerifyErrors.verify);

export default app;