
// import express from 'express';

// import connectToDatabase from './db/db.js';


// connectToDatabase();
// const app = express();

// // Middleware



// app.listen(process.env.PORT, () => {
//     console.log(`Server is Running on port ${process.env.PORT}`);
// });
import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import connectToDatabase from "./db/db.js";
import authRouter from './routes/auth.js';
import bookingRoutes from './routes/booking.js';
import doctorRouters from './routes/doctor.js';

dotenv.config(); // Load biến môi trường

const app = express();
app.use(express.json());
const PORT = process.env.PORT ; // Lấy PORT từ .env, nếu không có thì mặc định là 5000


// Kết nối MongoDB
connectToDatabase();
app.use(cors());


app.use('/api/auth', authRouter)
app.use('/api/bookings', bookingRoutes);
app.use('/api/doctors', doctorRouters); 
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
