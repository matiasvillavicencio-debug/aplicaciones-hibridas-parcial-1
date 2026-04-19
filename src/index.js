import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import discoRouter from './routes/discoRouter.js';
import artistaRouter from './routes/artistaRouter.js';
import userRouter from './routes/userRouter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.static('public'));

app.use('/api/discos', discoRouter);
app.use('/api/artistas', artistaRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});