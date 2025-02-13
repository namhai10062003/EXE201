
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
<<<<<<< HEAD
import bookingRoutes from './routes/booking.js';
import doctorRouters from './routes/doctor.js';
=======
>>>>>>> 30f841b091f7a2d444928781372046aeef050d22

dotenv.config(); // Load biến môi trường

const app = express();
<<<<<<< HEAD
app.use(express.json());
const PORT = process.env.PORT ; // Lấy PORT từ .env, nếu không có thì mặc định là 5000


// Kết nối MongoDB
connectToDatabase();
app.use(cors());


app.use('/api/auth', authRouter)
app.use('/api/bookings', bookingRoutes);
app.use('/api/doctors', doctorRouters); 
=======
const PORT = process.env.PORT ; // Lấy PORT từ .env, nếu không có thì mặc định là 5000

// Kết nối MongoDB
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter)

>>>>>>> 30f841b091f7a2d444928781372046aeef050d22
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
