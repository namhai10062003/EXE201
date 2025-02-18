import Doctor from "../models/Doctor.js";

// Tạo bác sĩ mới
export const createDoctor = async (req, res) => {
    try {
        const { name, specialization, contact, availability, experience, consultationFee, workingHours } = req.body;

        if (!name || !specialization || !contact || !experience || !consultationFee || !workingHours) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const newDoctor = new Doctor({
            name,
            specialization,
            contact,
            availability: availability || 'available',
            experience,
            consultationFee,
            workingHours
        });

        await newDoctor.save();
        res.status(201).json({ success: true, message: "Doctor created successfully", doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating doctor", error: error.message });
    }
};

// Lấy danh sách tất cả bác sĩ
export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({ success: true, doctors });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching doctors", error: error.message });
    }
};

// Lấy thông tin bác sĩ theo ID
export const getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }
        res.status(200).json({ success: true, doctor });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching doctor", error: error.message });
    }
};
