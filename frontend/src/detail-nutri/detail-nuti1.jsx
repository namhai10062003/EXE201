import React from 'react';
import courseImage from '../../public/images/b1.jpg'; // Đảm bảo thay đúng đường dẫn ảnh của bạn
import './CourseDetails.css';

const CourseDescription = () => {
  return (
    <div className="course-description">
      <h1 className="text-2xl font-bold mb-4">Khóa học “Tư vấn Sữa & Thực phẩm dinh dưỡng Y học”</h1>
      <header>
        <h1>Khóa học Xây dựng thực đơn</h1>
        <img src={courseImage} alt="Khóa học Xây dựng thực đơn" className="course-image" />
      </header>
      <p className="mb-4">
        Khóa học này sẽ giúp bạn đạt được điều đó chỉ trong 8 giờ đồng hồ!
      </p>

      <p className="mb-4">
        Được chắt lọc tinh gọn từ kinh nghiệm thực tiễn của các bác sĩ dinh dưỡng hàng đầu, khóa học cung cấp cho bạn:
      </p>

      <ul className="list-disc pl-5 mb-4">
        <li>Hệ thống kiến thức bài bản: Từ các tiêu chuẩn phân biệt sữa, thực phẩm dinh dưỡng y học đến phân tích thành phần dinh dưỡng chi tiết.</li>
        <li>Kỹ năng tư vấn chuyên sâu: Tự tin tư vấn cho đối tượng thông thường và hơn 16 đối tượng bệnh lý.</li>
        <li>Cập nhật xu hướng mới nhất: Nắm bắt các loại sữa và thực phẩm dinh dưỡng y học phổ biến trên thị trường.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Mục tiêu khóa học</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Giúp học viên hiểu rõ & sâu hơn về thành phần sữa, sản phẩm từ sữa, các sản phẩm dinh dưỡng y học.</li>
        <li>Biết cách lựa chọn & sử dụng các loại chất dinh dưỡng đa lượng, vi lượng & các chất khác nhằm hỗ trợ điều trị & phòng ngừa bệnh lý một cách hiệu quả.</li>
        <li>Biết cách tư vấn cho khách hàng khi sử dụng các chất dinh dưỡng, thực phẩm chức năng về liều lượng, thời gian & cách phối hợp với thực phẩm hoặc thuốc.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Đối tượng học viên</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Cá nhân hoặc tổ chức đang kinh doanh các loại thực phẩm chức năng, sữa, chế phẩm bổ sung dinh dưỡng, thực phẩm bảo vệ sức khoẻ.</li>
        <li>Người có nhu cầu nâng cao kiến thức chuyên sâu về chất dinh dưỡng để chủ động chăm sóc sức khoẻ, phòng ngừa, hỗ trợ & điều trị bệnh tật.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Nội dung khóa học</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Thời gian</th>
            <th className="px-4 py-2">Nội dung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Buổi 1: Đọc thành phần dinh dưỡng</td>
            <td className="border px-4 py-2">Khái niệm thực phẩm chức năng, thực phẩm bổ sung, sữa, thực phẩm dinh dưỡng y học...</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Buổi 2: Tư vấn sữa cho đối tượng thông thường</td>
            <td className="border px-4 py-2">Vai trò của sữa và các chế phẩm từ sữa cho đối tượng thông thường...</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Buổi 3: Thực phẩm dinh dưỡng y học cho bệnh lý (P.1)</td>
            <td className="border px-4 py-2">Sản phẩm dinh dưỡng cho trẻ sinh non...</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Buổi 4: Thực phẩm dinh dưỡng y học cho bệnh lý (P.2)</td>
            <td className="border px-4 py-2">Sản phẩm dinh dưỡng cho bệnh nhân ung thư...</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mb-2">Đội ngũ giảng viên</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>BS.CKI. Đinh Trần Ngọc Mai</li>
        <li>BS. Vi Thị Tươi – Phó Viện trưởng Viện Nghiên cứu và Tư vấn Dinh dưỡng (NRECI)</li>
        <li>BS. CKI. Nguyễn Thị Kim Hải – Trưởng khoa Dinh dưỡng người lớn Viện Nghiên cứu và Tư vấn Dinh dưỡng (NRECI)</li>
        <li>ThS.BS.CKII. Trần Thị Kim Chi – Trưởng khoa Dinh dưỡng – BV Nhân Dân Gia Định</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Vì sao nên chọn khóa học tại NRECI?</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Đội ngũ giảng viên là các chuyên gia, bác sĩ dinh dưỡng giàu kinh nghiệm, tâm huyết với nghề.</li>
        <li>Chương trình học được thiết kế bài bản, khoa học, cập nhật kiến thức mới nhất về dinh dưỡng.</li>
        <li>Phương pháp giảng dạy tương tác, khuyến khích thảo luận và trao đổi, giúp bạn hiểu sâu và ghi nhớ kiến thức.</li>
        <li>Đa dạng khoá học từ cơ bản đến chuyên sâu, đáp ứng mọi nhu cầu và mục tiêu học tập.</li>
        <li>Hình thức học tập linh hoạt, giúp bạn chủ động sắp xếp thời gian.</li>
        <li>Giải đáp mọi thắc mắc trong và sau khóa học.</li>
        <li>Tham gia cộng đồng học viên năng động, sẵn sàng chia sẻ và hỗ trợ lẫn nhau.</li>
        <li>Nhận Giấy chứng nhận hoàn thành khóa học sau mỗi khóa học.</li>
      </ul>

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        <a href="https://your-registration-link.com" className="text-white">Đăng ký ngay</a>
      </button>
    </div>
  );
};

export default CourseDescription;
