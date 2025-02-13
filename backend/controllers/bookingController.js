import Booking from "../models/Booking.js";
import Doctor from "../models/Doctor.js";

// Tạo lịch hẹn với bác sĩ
const createBooking = async (req, res) => {
    try {
        const { customerName, doctorId, startTime, endTime } = req.body;

        if (!customerName || !doctorId || !startTime || !endTime) {
            return res.status(400).json({ success: false, message: "Thiếu thông tin bắt buộc" });
        }

        // Kiểm tra xem bác sĩ có tồn tại không
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Không tìm thấy bác sĩ" });
        }

        // Tính tổng tiền dựa trên phí tư vấn của bác sĩ
        const totalAmount = doctor.consultationFee;

        // Tạo booking mới
        const newBooking = new Booking({
            customerName,
            doctor: doctor._id, // Lưu ID của bác sĩ
            startTime,
            endTime,
        });

        await newBooking.save();

        res.status(201).json({ success: true, message: "Đặt lịch thành công", booking: newBooking });
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi khi tạo lịch hẹn", error: error.message });
    }
};
// Lấy danh sách lịch hẹn
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({ success: true, bookings });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching bookings", error: error.message });
    }
};

// Lấy lịch hẹn theo ID
const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }
        res.status(200).json({ success: true, booking });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching booking", error: error.message });
    }
};

// Xóa lịch hẹn
const deleteBooking = async (req, res) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }
        res.status(200).json({ success: true, message: "Booking deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting booking", error: error.message });
    }
};


export { createBooking, deleteBooking, getAllBookings, getBookingById };

