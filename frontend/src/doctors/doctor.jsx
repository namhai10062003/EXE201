import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import abs from "../../public/images/anh-bac-si.jpg";

const Doctor = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State để lưu trữ từ khóa tìm kiếm

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialization: "",
    contact: "",
    availability: "available",
    experience: "",
    consultationFee: "",
    workingHours: [],
  });

  // Lấy danh sách bác sĩ từ backend
  useEffect(() => {
    axios.get("http://localhost:4000/api/doctors")
      .then(response => {
        setDoctors(response.data.doctors);
        setFilteredDoctors(response.data.doctors); // Đặt danh sách bác sĩ ban đầu là tất cả
      })
      .catch(error => console.error("Lỗi khi lấy danh sách bác sĩ:", error));
  }, []);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
  };

  // Xử lý thay đổi ô tìm kiếm
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredDoctors(doctors); // Nếu không có từ khóa, hiển thị tất cả bác sĩ
    } else {
      const filtered = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase()) || // Tìm kiếm theo tên bác sĩ
        doctor.specialization.toLowerCase().includes(query.toLowerCase()) // Tìm kiếm theo chuyên khoa
      );
      setFilteredDoctors(filtered);
    }
  };

  // Xử lý thêm bác sĩ
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/doctors", newDoctor);
      setDoctors([...doctors, response.data.doctor]); // Cập nhật danh sách bác sĩ
      setNewDoctor({ name: "", specialization: "", contact: "", availability: "available", experience: "", consultationFee: "", workingHours: [] });
    } catch (error) {
      console.error("Lỗi khi thêm bác sĩ:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4" style={{fontSize:"40px"}}>Danh sách bác sĩ</h1>

      {/* Tìm kiếm bác sĩ */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm bác sĩ theo tên hoặc chuyên khoa..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded w-1/3"  // Thu nhỏ chiều rộng
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredDoctors.map((doctor) => (
          <div key={doctor._id} className="p-4 border rounded shadow">
            <img
              src={abs}
              alt={doctor.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold">{doctor.name}</h2>
            <p><strong>Chuyên khoa:</strong> {doctor.specialization}</p>
            <p><strong>Kinh nghiệm:</strong> {doctor.experience} năm</p>
            <p><strong>Giờ làm việc:</strong> {doctor.workingHours.join(", ")}</p>

            {/* Nút Xem Chi Tiết */}
            <button
              onClick={() => navigate(`/detail-doctor/${doctor._id}`)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Xem Chi Tiết
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Doctor;
