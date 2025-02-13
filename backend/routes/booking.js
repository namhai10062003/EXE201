import express from 'express';
import { createBooking, deleteBooking, getAllBookings } from '../controllers/bookingController.js';

const router = express.Router();

// Protect the booking routes with authMiddleware (except the 'getAllBookings' route)
// Only logged-in users should be able to create, update, or delete bookings.


// Get all bookings
router.get('/', getAllBookings);

// Create a new booking
router.post('/create', createBooking);

// // Get the list of bookings and available rooms (for creating a booking)
// router.get('/create', getBookingList);

// // Get the update booking form
// router.get('/update/:id', getUpdateBookingForm);

// // Update booking
// router.put('/update/:id', updateBooking);

// Delete booking
router.delete('/delete/:id', deleteBooking);

export default router;
