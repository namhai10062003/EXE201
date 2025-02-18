import axios from 'axios'; // Ensure axios is imported
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import jwt from 'jsonwebtoken';
import { Server } from 'socket.io';
import connectToDatabase from './db/db.js';
import authRouter from './routes/auth.js';
import bookingRoutes from './routes/booking.js';
import doctorRouters from './routes/doctor.js';

dotenv.config(); // Load environment variables

// Ensure necessary environment variables are set
if (!process.env.DAILY_API_KEY || !process.env.JWT_KEY) {
  console.error('Missing necessary environment variables: DAILY_API_KEY or JWT_KEY');
  process.exit(1);
}

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

// MongoDB connection
connectToDatabase();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Allow frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Create HTTP server
const server = http.createServer(app);

// Initialize socket.io with the server
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

let meetingData = null; // Lưu thông tin cuộc họp hiện tại

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Khi nhân viên tạo cuộc họp
  socket.on('create-meeting', async (_, callback) => {
    try {
      const apiKey = process.env.DAILY_API_KEY;
      if (!apiKey) {
        throw new Error('Missing DAILY_API_KEY in environment variables');
      }

      const response = await axios.post(
        'https://api.daily.co/v1/rooms',
        {
          name: `meeting-${Date.now()}`,
          privacy: 'public',
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.data || !response.data.url) {
        throw new Error('Invalid response from Daily.co API');
      }

      const meetingId = response.data.url.split('/').pop();
      meetingData = { meetingId, meetingUrl: response.data.url };

      io.emit('meeting-created', meetingData); // Gửi đến tất cả user
      callback(meetingData);
    } catch (error) {
      console.error('Error creating meeting:', error?.response?.data || error.message);
      socket.emit('error', { message: `Failed to create meeting: ${error.message}` });
    }
  });

  // Gửi lại thông tin phòng nếu có user mới kết nối
  if (meetingData) {
    socket.emit('meeting-created', meetingData);
  }
});

// API to generate JWT token
const generateToken = () => {
  return jwt.sign(
    { permissions: ['allow_join', 'allow_mod'] },
    process.env.JWT_KEY,
    { expiresIn: '356d' }
  );
};

// API to get token
app.get('/get-token', (req, res) => {
  try {
    const token = generateToken();
    res.json({ token });
  } catch (error) {
    console.error('Error generating token:', error.message);
    res.status(500).json({ error: `Unable to generate token: ${error.message}` });
  }
});

// Routes for authentication, bookings, and doctors
app.use('/api/auth', authRouter);
app.use('/api/bookings', bookingRoutes);
app.use('/api/doctors', doctorRouters);

// Start the server
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
