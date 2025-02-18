import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true }, // Liên kết với Doctor
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking; 