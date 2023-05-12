import express from 'express';
import carRoutes from './routes/Car.routes';

const app = express();
app.use('/cars', carRoutes);

export default app;