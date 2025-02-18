import axios from "axios";
import { useEffect, useState } from "react";

const BookingDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Lấy danh sách bác sĩ từ backend
  useEffect(() => {
    axios.get("http://localhost:4000/api/doctors")
      .then(response => setDoctors(response.data.doctors))
      .catch(error => console.error("Lỗi khi lấy danh sách bác sĩ:", error));
    
    fetchBookings();
  }, []);

  // Lấy danh sách booking từ backend
  const fetchBookings = () => {
    axios.get("http://localhost:4000/api/bookings")
      .then(response => setBookings(response.data.bookings))
      .catch(error => console.error("Lỗi khi lấy danh sách đặt lịch:", error));
  };

  // Xử lý đặt lịch
  const handleBooking = async (e) => {
    e.preventDefault();
  
    if (!customerName || !selectedDoctor || !startTime || !endTime) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
  
    try {
      const bookingData = {
        customerName,
        doctorId: selectedDoctor, // Chỉ gửi ID của bác sĩ
        startTime,
        endTime,
      };
  
      await axios.post("http://localhost:4000/api/bookings/create", bookingData);
      alert("Đặt lịch thành công!");
  
      // Reset form
      setCustomerName("");
      setSelectedDoctor("");
      setStartTime("");
      setEndTime("");
  
      // Refresh danh sách đặt lịch
      fetchBookings();
    } catch (error) {
      console.error("Lỗi khi đặt lịch:", error);
      alert("Lỗi khi đặt lịch. Vui lòng thử lại!");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Đặt lịch tư vấn với bác sĩ</h1>

      <form onSubmit={handleBooking} className="bg-white p-4 shadow rounded mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Tên của bạn" required className="border p-2 rounded"/>

          <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required className="border p-2 rounded">
            <option value="">Chọn bác sĩ</option>
            {doctors.map(doctor => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>

          <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required className="border p-2 rounded"/>
          <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required className="border p-2 rounded"/>
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Đặt lịch
        </button>
      </form>

      <h2 className="text-xl font-bold mb-2">Danh sách lịch hẹn</h2>
      <div className="bg-white p-4 shadow rounded">
        {bookings.length > 0 ? (
          <ul>
            {bookings.map((booking, index) => (
              <li key={index} className="border-b py-2">
                <strong>{booking.customerName}</strong> đặt lịch với <strong>{booking.doctor.name}</strong> từ <strong>{new Date(booking.startTime).toLocaleString()}</strong> đến <strong>{new Date(booking.endTime).toLocaleString()}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p>Chưa có lịch hẹn nào.</p>
        )}
      </div>
    </div>
  );
};

export default BookingDoctor;
