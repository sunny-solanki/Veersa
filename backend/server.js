import express from 'express';
import cors from "cors";
import dotenv from "dotenv"
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';
import userRoutes from "./routes/userroutes.js"
import authRoutes from "./routes/authRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
