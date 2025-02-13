import React from 'react';
import courseImage from '../../public/images/b1.jpg'; // Đảm bảo thay đúng đường dẫn ảnh của bạn
import './CourseDetails.css';

const CourseContent = () => {
  return (
    <div className="course-container">
      <header>
        <h1>Khóa học Quản lý Cân Nặng - Nền Tảng Dinh Dưỡng Khoa Học</h1>
        <img src={courseImage} alt="Khóa học Quản lý Cân Nặng" className="course-image" />
      </header>

      <section>
        <h2>Mục tiêu khóa học</h2>
        <ul>
          <li>Học viên nắm được các thành phần cấu tạo cơ thể như cơ, xương, mỡ nước, và cách lựa chọn thực phẩm, thảo dược, thực phẩm chức năng hỗ trợ giảm cân.</li>
          <li>Biết cách phối hợp chế độ ăn uống và tập luyện để giữ cơ thể cân đối.</li>
        </ul>
      </section>

      <section>
        <h2>Nội dung khóa học</h2>
        <ul>
          <li>Cung cấp kiến thức cơ bản về cấu tạo cơ thể, đánh giá tình trạng thừa cân, béo phì ở người trưởng thành.</li>
          <li>Hướng dẫn các phương pháp, nguyên tắc dinh dưỡng, lựa chọn thực phẩm, thảo dược, và tập luyện cho người muốn giảm cân, tăng cân, tăng cơ, giảm mỡ.</li>
        </ul>
      </section>

      <section>
        <h2>Đội ngũ giảng viên</h2>
        <ul>
          <li>BS.CK1. Nguyễn Thị Kim Hải – Giảng viên Viện Nghiên cứu và Tư vấn Dinh dưỡng</li>
          <li>ThS. BS Đặng Ngọc Hùng – Viện trưởng Viện Nghiên cứu và Tư vấn Dinh dưỡng</li>
          <li>BS.CKI. Đinh Trần Ngọc Mai – Khoa Dinh dưỡng, tiết chế Bệnh viện Đại Học Y Dược TP. HCM</li>
          <li>BS. Phan Thái Tân – Công ty TNHH Homefit Academy</li>
          <li>BS. Bùi Thành Ngân – Giảng viên dinh dưỡng Viện đào tạo nghiên cứu thể thao Getfit Academy</li>
        </ul>
      </section>

      <section>
        <h2>Đối tượng học viên</h2>
        <ul>
          <li>Người đang bị mất khả năng kiểm soát về cân nặng.</li>
          <li>Cá nhân hoặc tổ chức đang kinh doanh các sản phẩm hỗ trợ giảm cân.</li>
          <li>Khóa học phù hợp với huấn luyện viên kiểm soát cân nặng: Gym, Yoga…</li>
          <li>Spa, trung tâm chăm sóc sức khoẻ cần nâng cao kiến thức cho nhân viên về giảm cân.</li>
        </ul>
      </section>

      <section>
        <h2>Nội dung khóa học Quản lý Cân Nặng Online</h2>
        <h3>Bài 1: Phân tích thành phần cơ thể</h3>
        <p>Phân loại suy dinh dưỡng, thừa cân béo phì theo BMI (Người lớn, trẻ em), vai trò của cơ, xương, mỡ nước đối với cơ thể người, và quá trình ly giải cơ & mỡ.</p>

        <h3>Bài 2: Nguyên tắc dinh dưỡng khi giảm cân</h3>
        <p>Lộ trình giảm cân an toàn, nguyên tắc can thiệp giảm cân: Dinh dưỡng, vận động, dùng thuốc, phẫu thuật, và các trường phái ăn uống giảm cân phổ biến hiện nay.</p>

        <h3>Bài 3: Dinh dưỡng trong giảm cân</h3>
        <p>Mindset khi giảm cân, tính toán nhu cầu năng lượng & các chất dinh dưỡng, lựa chọn thực phẩm và chế biến thực phẩm giảm cân, phân bổ các bữa ăn khi giảm cân.</p>

        <h3>Bài 4: Bổ sung thực phẩm chức năng trong giảm cân</h3>
        <p>Những sản phẩm có thể sử dụng trong quá trình giảm cân như bữa ăn thay thế, vitamin, khoáng chất, chất xơ, tinh bột kháng, men vi sinh… Cách sử dụng và lưu ý khi sử dụng.</p>

        <h3>Bài 5: Tập luyện thể thao tăng cơ, giảm mỡ</h3>
        <p>Vai trò của tập luyện trong giảm cân, các bài tập chuyên sâu giúp giảm cân, tăng cơ và duy trì cơ thể cân đối.</p>
      </section>

      <section>
        <h2>Nội dung khóa học Quản lý Cân Nặng Offline</h2>
        <ul>
          <li>Bài 1: Phân tích thành phần cơ thể</li>
          <li>Bài 2: Nguyên tắc dinh dưỡng khi giảm cân</li>
          <li>Bài 3: Dinh dưỡng trong giảm cân</li>
          <li>Bài 4: Bổ sung thực phẩm chức năng</li>
          <li>Bài 5: Tập luyện thể thao tăng cơ, giảm mỡ</li>
        </ul>
      </section>
    </div>
  );
};

export default CourseContent;
