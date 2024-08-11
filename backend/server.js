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

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173/',
    credentials: true
};
app.use(cors(corsOptions));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
