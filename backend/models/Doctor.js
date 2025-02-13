import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contact: { type: String, required: true },
  availability: { 
    type: String, 
    enum: ['available', 'unavailable'], 
    default: 'available' 
  },
  experience: { type: Number, required: true }, // Số năm kinh nghiệm
  consultationFee: { type: Number, required: true }, // Phí tư vấn
  workingHours: { type: Array, required: true } // Lịch làm việc
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
  