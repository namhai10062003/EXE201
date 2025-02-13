import React from 'react';
import './CourseDetails.css';
// Import hình ảnh
import courseImage from '../../public/images/b1.jpg'; // Đảm bảo thay đúng đường dẫn ảnh của bạn

const CourseContent = () => {
  return (
    <div className="course-container">
      <header>
        <h1>Khóa học Xây dựng thực đơn</h1>
        <img src={courseImage} alt="Khóa học Xây dựng thực đơn" className="course-image" />
      </header>
      
      <section>
        <h2>Mục tiêu khóa học</h2>
        <ul>
          <li>Học viên biết được nguồn gốc & nguyên lý của các phương pháp xây dựng thực đơn hiện nay đang được áp dụng</li>
          <li>Nắm được các quy tắc chuyển đổi đơn vị thực phẩm, các bước tiến hành, hiểu được nguyên tắc cơ bản trong xây dựng thực đơn</li>
          <li>Học viên có thể xây dựng thực đơn chuẩn dựa trên nhu cầu năng lượng và biết cách điều chỉnh thực đơn trên các đối tượng bệnh lý, linh hoạt trong việc chọn món theo sở thích của khách hàng</li>
        </ul>
      </section>

      <section>
        <h2>Nội dung khóa học</h2>
        <ul>
          <li>Cung cấp những phương pháp, nguyên lý cơ bản trong việc xây dựng thực đơn</li>
          <li>Hướng dẫn thực hành chi tiết trong việc tính toán nhu cầu năng lượng, chỉ số hoạt động, nguyên tắc tăng giảm năng lượng tuỳ thuộc đối tượng khách hàng như tăng cân, giảm cân, bệnh lý như đái tháo đường, mỡ máu, suy thận, tăng huyết áp,…</li>
        </ul>
      </section>

      <section>
        <h2>Đối tượng tham gia khóa học</h2>
        <ul>
          <li>Cá nhân có nhu cầu học để tự lên thực đơn dinh dưỡng, chăm sóc sức khoẻ cho bản thân & gia đình</li>
          <li>Nhân viên y tế cần biết xây dựng thực đơn để phục vụ cho quá trình khám chữa bệnh</li>
          <li>Huấn luyện viên chăm sóc sức khoẻ: gym, yoga để tư vấn thực đơn cho khách hàng</li>
          <li>Các công ty có nhu cầu thay đổi thực đơn ăn uống & nâng cao chất lượng chăm sóc sức khoẻ nhân viên</li>
          <li>Trường mầm non hoặc mẫu giáo cần thiết kế thực đơn dinh dưỡng chăm sóc sức khoẻ cho trẻ em</li>
          <li>Đầu bếp, nhà hàng muốn định lượng mức năng lượng trong các suất ăn phục vụ cho khách hàng</li>
        </ul>
      </section>

      <section>
        <h2>Đội ngũ giảng viên</h2>
        <ul>
          <li>ThS.BS. Nguyễn Phương Anh – Trưởng khoa Dinh dưỡng Bệnh Viện An Bình</li>
          <li>BS. Vi Thị Tươi – Giảng viên thỉnh giảng Viện Nghiên cứu và Tư vấn Dinh dưỡng</li>
          <li>CN. Bùi Thị Kim Huế – Dinh dưỡng viên Bệnh viện K Hà Nội</li>
          <li>BS. Nguyễn Thị Hoà – Trưởng khoa Dinh dưỡng nhi Viện Nghiên cứu và Tư vấn Dinh dưỡng</li>
        </ul>
      </section>

      <section>
        <h2>Nội dung khóa học Xây dựng thực đơn Online</h2>
        <h3>Bài 1: Tổng quan về phương pháp xây dựng thực đơn</h3>
        <p> Tổng quan về các phương pháp xây dựng thực đơn, ưu nhược điểm của từng phương pháp, ý nghĩa của việc xây dựng thực đơn. </p>

        <h3>Bài 2: Phương pháp xây dựng thực đơn nhanh</h3>
        <p> Phân nhóm thực phẩm và sự khác nhau giữa các hệ thống chuyển đổi đơn vị thực phẩm </p>

        <h3>Bài 3: Xây dựng thực đơn nhanh cho đối tượng thông thường</h3>
        <p> Xây dựng thực đơn cho trẻ em khỏe mạnh, người lớn khỏe mạnh, phụ nữ mang thai, cho con bú… </p>

        <h3>Bài 4: Xây dựng thực đơn nhanh cho đối tượng tăng cân, giảm cân</h3>
        <p> Đánh giá tình trạng dinh dưỡng, nguyên lý dinh dưỡng hỗ trợ tăng cân, giảm cân ở trẻ em và người lớn </p>

        <h3>Bài 5: Xây dựng thực đơn nhanh cho đối tượng có bệnh lý</h3>
        <p> Xây dựng thực đơn cho người bị bệnh thận, tăng huyết áp, rối loạn mỡ máu </p>

        <h3>Bài 6: Xây dựng thực đơn nhanh cho đối tượng có bệnh lý Gout, bệnh lý gan, đái tháo đường</h3>
        <p> Những lưu ý khi xây dựng thực đơn nhanh cho đối tượng có bệnh lý Gout, bệnh lý gan, đái tháo đường </p>
      </section>

      <section>
        <h2>Nội dung khóa học Xây dựng thực đơn Offline</h2>
        <ul>
          <li>Bài 1: Phương pháp xây dựng thực đơn nhanh</li>
          <li>Bài 2: Thực hành xây dựng thực đơn nhanh cho đối tượng thông thường</li>
          <li>Bài 3: Thực hành xây dựng thực đơn nhanh cho bệnh nhân có bệnh lý mạn tính</li>
          <li>Bài 4: Thực hành nấu tại bếp ăn</li>
        </ul>
      </section>
    </div>
  );
};

export default CourseContent;
