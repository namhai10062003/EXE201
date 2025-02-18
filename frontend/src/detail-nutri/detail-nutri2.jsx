import React from "react";
import './CourseDetails.css';
import courseImage from '../../public/images/b1.jpg'; // Đảm bảo thay đúng đường dẫn ảnh của bạn

const CourseDetails = () => {
  return (
    <div className="course-container">
      <h1 className="course-title">Khóa học “TƯ VẤN THỰC PHẨM BẢO VỆ SỨC KHỎE”</h1>
      <header>
        <h1>Khóa học Xây dựng thực đơn</h1>
        <img src={courseImage} alt="Khóa học Xây dựng thực đơn" className="course-image" />
      </header>
      <p className="course-intro">
        Khóa học “TƯ VẤN THỰC PHẨM BẢO VỆ SỨC KHỎE” của Viện Nghiên cứu và Tư vấn Dinh dưỡng (NRECI) sẽ giúp bạn hiện thực hóa mục tiêu đó chỉ trong 6 buổi chuyên sâu!
      </p>
      
      <section className="course-description">
        <h2>Mục tiêu khoá học</h2>
        <ul>
          <li>Hiểu rõ về các loại TPBVSK, TPBS và sản phẩm bảo vệ sức khỏe, từ thành phần đến công dụng.</li>
          <li>Học kỹ năng tư vấn chuyên nghiệp cho từng đối tượng khách hàng.</li>
          <li>Biết cách tối ưu hóa hiệu quả sản phẩm cho sức khỏe khách hàng.</li>
        </ul>
      </section>

      <section className="course-target">
        <h2>Đối tượng học viên</h2>
        <ul>
          <li>Cá nhân hoặc tổ chức đang kinh doanh các loại thực phẩm chức năng, sữa, chế phẩm bổ sung dinh dưỡng.</li>
          <li>Người có nhu cầu nâng cao kiến thức về chất dinh dưỡng để chăm sóc sức khoẻ.</li>
        </ul>
      </section>

      <section className="course-content">
        <h2>Nội dung khoá học</h2>
        <table>
          <thead>
            <tr>
              <th>Thời gian</th>
              <th>Nội dung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Buổi 1</td>
              <td>Acid amin, acid béo, chất tạo ngọt nhân tạo, whey, BCAA, DHA, Omega 3-6-9...</td>
            </tr>
            <tr>
              <td>Buổi 2</td>
              <td>Canxi, Sắt, Kẽm, Magie: Vai trò, liều bổ sung, yếu tố ảnh hưởng hấp thu...</td>
            </tr>
            <tr>
              <td>Buổi 3</td>
              <td>Vitamin A, D, E, K: Vai trò, liều bổ sung, yếu tố ảnh hưởng hấp thu...</td>
            </tr>
            <tr>
              <td>Buổi 4</td>
              <td>Vitamin B, C, khoáng chất tổng hợp: Chỉ định, liều bổ sung, yếu tố hấp thu...</td>
            </tr>
            <tr>
              <td>Buổi 5</td>
              <td>Men vi sinh, men tiêu hóa, chất xơ: Vai trò, liều bổ sung...</td>
            </tr>
            <tr>
              <td>Buổi 6</td>
              <td>Chất có hoạt tính sinh học: Vai trò, liều bổ sung, thời gian bổ sung...</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="course-instructors">
        <h2>Đội ngũ giảng viên</h2>
        <ul>
          <li>ThS.BS. Đặng Ngọc Hùng – Viện trưởng Viện Nghiên cứu và Tư vấn Dinh dưỡng (NRECI)</li>
          <li>ThS.BS. Lê Thị Thu Huyền – Phó Viện trưởng Viện Nghiên cứu và Đào tạo Y học Cộng đồng</li>
          <li>BS.CKI. Nguyễn Thị Kim Hải – Trưởng khoa Dinh dưỡng người lớn Viện Nghiên cứu và Tư vấn Dinh dưỡng (NRECI)</li>
          <li>BS.CKI. Đinh Trần Ngọc Mai</li>
          <li>ThS.BS. Võ Thanh Phong</li>
        </ul>
      </section>
    </div>
  );
};

export default CourseDetails;
