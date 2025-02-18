import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import abs from "../../public/images/anh-bac-si.jpg";

const DetailDoctor = () => {
  const { id } = useParams(); // Lấy ID bác sĩ từ URL
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Thêm state để xử lý lỗi

  useEffect(() => {
    setLoading(true); // Đảm bảo là đang tải lại khi ID thay đổi
    setError(null); // Reset lỗi cũ nếu có

    console.log("Fetching doctor with ID:", id); // Kiểm tra ID

    axios.get(`http://localhost:4000/api/doctors/${id}`)
      .then(response => {
        console.log("API response:", response.data); // Kiểm tra dữ liệu trả về
        if (response.data.success && response.data.doctor) {
          setDoctor(response.data.doctor);
        } else {
          setError("Không tìm thấy bác sĩ với ID này.");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Lỗi khi lấy thông tin bác sĩ:", error);
        setError("Lỗi khi lấy dữ liệu. Vui lòng thử lại sau.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-6">Đang tải...</p>;
  }

  if (error) {
    return <p className="text-center mt-6 text-red-500">{error}</p>; // Hiển thị lỗi nếu có
  }

  if (!doctor) {
    return <p className="text-center mt-6">Không tìm thấy bác sĩ.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{doctor.name || "Không có tên"}</h1>

      <div className="flex gap-6">
        <img
          src={doctor.image || abs}  // Dùng ảnh API nếu có, nếu không thì ảnh mặc định
          alt={doctor.name}
          className="w-48 h-48 object-cover rounded shadow"
        />

        <div>
          <p><strong>Chuyên khoa:</strong> {doctor.specialization || "Không có thông tin"}</p>
          <p><strong>Kinh nghiệm:</strong> {doctor.experience ? `${doctor.experience} năm` : "Không có thông tin"}</p>
          <p><strong>Giờ làm việc:</strong> {doctor.workingHours ? doctor.workingHours.join(", ") : "Không có thông tin"}</p>
          <p><strong>Liên hệ:</strong> {doctor.contact || "Không có thông tin"}</p>
          <p><strong>Trạng thái:</strong> {doctor.availability === 'available' ? "Sẵn sàng" : "Không có sẵn"}</p> {/* Dữ liệu availability */}
        </div>
      </div>

      <button 
        onClick={() => window.history.back()} 
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Quay lại
      </button>
    </div>
  );
};

export default DetailDoctor;
