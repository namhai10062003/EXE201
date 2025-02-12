import React from 'react';
import logowelcome from '../../public/images/logo.png';
  
      const NutritionPage = () => {
        return (
          <div className="bg-pattern">
            <header className="bg-white shadow-md">
              <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <img
                  src={logowelcome}
                  alt="Institute Logo"
                  className="h-12"
                  width="150"
                  height="150"
                />
                <nav className="flex space-x-6">
                  <div className="relative group">
                    <button className="text-gray-700 font-semibold">
                      Về BRANDI <i className="fas fa-chevron-down"></i>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                     
                      </a>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="text-gray-700 font-semibold">
                      Hoạt Động <i className="fas fa-chevron-down"></i>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                       
                      </a>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="text-gray-700 font-semibold">
                      Phòng Ban <i className="fas fa-chevron-down"></i>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      
                      </a>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="text-gray-700 font-semibold">
                      Tài Liệu <i className="fas fa-chevron-down"></i>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                     
                      </a>
                    </div>
                  </div>
                  <a href="#" className="text-gray-700 font-semibold">
                    Tin Tức
                  </a>
                  <a href="#" className="text-gray-700 font-semibold">
                    Đặt Lịch
                  </a>
                </nav>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Tìm kiếm tài liệu, bài viết"
                    className="border rounded-full px-4 py-2"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                    Khóa học dinh dưỡng
                  </button>
                  <button 
  className="bg-green-600 text-white px-4 py-2 rounded-full" 
  onClick={() => window.location.href = "/login"}
>
  Đăng nhập
</button>
<button 
  className="bg-red-600 text-white px-4 py-2 rounded-full" 
  onClick={() => window.location.href = "/register"}
>
  Đăng Ký
</button>
                </div>
              </div>
              
            </header>
            <div className="text-white" style={{ backgroundColor: '#1b4d3e', backgroundImage: 'url(https://placehold.co/1920x1080/1b4d3e/1b4d3e.png?text=Background+Pattern)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto p-4">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src="https://storage.googleapis.com/a1aa/image/Y9VO1GKW_SNVA2yj6De7x-ce7v9sFP0EVhw1rkw9Zvo.jpg"
              alt="People attending a nutrition course"
              className="w-full h-64 object-cover"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <img
                  src={logowelcome}
                  alt="Institute Logo"
                  className="mx-auto mb-4"
                  width="100"
                  height="100"
                />
                <h1 className="text-4xl font-bold text-white">LỊCH KHAI GIẢNG</h1>
                <h2 className="text-2xl font-bold text-yellow-400">KHÓA HỌC THÁNG 2</h2>
              </div>
            </div>
          </div>
          <div className="p-4 bg-teal-700">
            <ul>
              <li className="flex items-center justify-between p-2 bg-teal-600 rounded-lg mb-2">
                <div className="flex items-center">
                  <span className="bg-white text-teal-700 rounded-full p-2 mr-2">+</span>
                  <span>Dinh Dưỡng Cơ Bản (17/02/2025)</span>
                </div>
                <span className="bg-white text-teal-700 rounded-full p-2">T2</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-teal-600 rounded-lg mb-2">
                <div className="flex items-center">
                  <span className="bg-white text-teal-700 rounded-full p-2 mr-2">+</span>
                  <span>Tư Vấn Viên Dinh Dưỡng &amp; Sức Khỏe (Chặng Thực Hành) (17/02/2025)</span>
                </div>
                <span className="bg-white text-teal-700 rounded-full p-2">T2</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-teal-600 rounded-lg mb-2">
                <div className="flex items-center">
                  <span className="bg-white text-teal-700 rounded-full p-2 mr-2">+</span>
                  <span>Toàn Khóa Tư Vấn Viên Dinh Dưỡng &amp; Sức Khỏe (26/02/2025)</span>
                </div>
                <span className="bg-white text-teal-700 rounded-full p-2">T4</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-teal-600 rounded-lg mb-2">
                <div className="flex items-center">
                  <span className="bg-white text-teal-700 rounded-full p-2 mr-2">+</span>
                  <span>Dinh Dưỡng Mẹ &amp; Bé (28/02/2025)</span>
                </div>
                <span className="bg-white text-teal-700 rounded-full p-2">T6</span>
              </li>
            </ul>
            <div className="flex items-center justify-between mt-4">
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">Liên Hệ Ngay</button>
              <div className="flex items-center space-x-4">
                <span>088 884 47 32</span>
                <span>www.nreci.org</span>
              </div>
            </div>
          </div>
        </div>
        {/* Courses Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center mb-4">KHÓA HỌC DINH DƯỠNG</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://storage.googleapis.com/a1aa/image/f_eWzqkQnMaeenFSs2sFa5shPGi1MEH2eZcc12WKdR8.jpg"
                alt="Course 1"
                className="w-full h-48 object-cover"
                width="400"
                height="300"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-700">Tư Vấn Viên Dinh Dưỡng &amp; Sức Khỏe</h3>
                <p className="text-teal-600">Giảng dạy bởi các bác sĩ chuyên môn, giảng viên thỉnh giảng giàu kinh nghiệm</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://storage.googleapis.com/a1aa/image/Rd_nkiwFihZEzwOCJ75aCoI9SVuetp5JvCwBm98W8Tg.jpg"
                alt="Course 2"
                className="w-full h-48 object-cover"
                width="400"
                height="300"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-700">Khóa Học Tư Vấn Dinh Dưỡng</h3>
                <p className="text-teal-600">Giảng dạy bởi các bác sĩ chuyên môn, giảng viên thỉnh giảng giàu kinh nghiệm</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://storage.googleapis.com/a1aa/image/sk4i3--rbmTk3UMM8wwbu2-JUD1oryFgAF07GsFfB3E.jpg"
                alt="Course 3"
                className="w-full h-48 object-cover"
                width="400"
                height="300"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-700">Khóa Học Dinh Dưỡng Mẹ &amp; Bé</h3>
                <p className="text-teal-600">Giảng dạy bởi các bác sĩ chuyên môn, giảng viên thỉnh giảng giàu kinh nghiệm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          

            <div className="p-4" style={{ backgroundColor: '#245237' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/LxIuWpdarWXlVGR07XikHoctyXMqMlVl4DXEdvu3zl8.jpg"
              alt="A female doctor with a green background and text about medical nutrition consultation"
              className="rounded-t-lg"
              width="600"
              height="400"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                TƯ VẤN SỮA &amp; THỰC PHẨM DINH DƯỠNG Y HỌC
              </h2>
              <p className="text-gray-700 mb-4">
                Khóa học Tư vấn Sữa và Thực phẩm dinh dưỡng y học: Nâng tầm kiến thức, kỹ năng, chăm sóc sức khỏe; Cơ hội trở thành chuyên gia dinh dưỡng uy tín, mở rộng cơ hội nghề nghiệp.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Nhận tư vấn
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/FgvmBaNHDq3opOY1tumDqCRpEZbD1bsBnBgIhm-SFdw.jpg"
              alt="A female doctor with a laptop and text about health food consultation"
              className="rounded-t-lg"
              width="600"
              height="400"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                TƯ VẤN THỰC PHẨM BẢO VỆ SỨC KHOẺ
              </h2>
              <p className="text-gray-700 mb-4">
                Khóa học Tư vấn Thực phẩm Bảo vệ Sức khỏe trang bị kỹ năng tư vấn TPBVSK, TPBS, TPBVSK chuyên nghiệp; Nắm được cách lựa chọn và kết hợp sản phẩm đạt hiệu quả tốt nhất cho khách hàng.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Nhận tư vấn
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/aKmkBuHOGFfnjG3GV7aW-gxfc1_ME9WuSChEcsAOKlg.jpg"
              alt="A group of doctors with text about menu building"
              className="rounded-t-lg"
              width="600"
              height="400"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                XÂY DỰNG THỰC ĐƠN
              </h2>
              <p className="text-gray-700 mb-4">
                Khóa thực hành Xây dựng thực đơn giúp bạn hiểu được thế nào là thực đơn chuẩn chỉnh và có được những nguyên tắc, phương pháp xây dựng hiệu quả cho từng đối tượng.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Nhận tư vấn
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/ZPGnPXMl-1vNv0ppSdTloHoon0QiljqdP0S0roVnXuE.jpg"
              alt="A group of doctors with text about weight management"
              className="rounded-t-lg"
              width="600"
              height="400"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                QUẢN LÝ CÂN NẶNG
              </h2>
              <p className="text-gray-700 mb-4">
                Khóa học Quản lý cân nặng giúp học viên hiểu đúng về ưu/nhược điểm các chế độ ăn kiêng phổ biến cũng như nắm rõ về nhu cầu dinh dưỡng, để kiểm soát cân nặng của từng trường hợp.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Nhận tư vấn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#245237', fontFamily: 'Arial, sans-serif' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-white text-3xl font-bold mb-8">TƯ VẤN DINH DƯỠNG</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/kdP7dGOfCd4xmut_cbrFHxZcmtADNEkdBt8PUUwmt3w.jpg"
              alt="Doctor providing 1:1 nutrition consultation"
              className="w-full"
              width="400"
              height="300"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Tư Vấn Dinh Dưỡng 1:1</h2>
              <p className="text-gray-700 mb-4">Đánh giá dinh dưỡng Nhận thực đơn mẫu</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Xem chi tiết</button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/mzcTiZ4k0dDoYW7DIt85n8woQSn-dSC2bVTZZypwAIM.jpg"
              alt="Doctor providing 1-month nutrition care package"
              className="w-full"
              width="400"
              height="300"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Gói Chăm sóc Dinh Dưỡng 01 tháng</h2>
              <p className="text-gray-700 mb-4">Duy trì thể trạng Khởi nguồn thói quen</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Xem chi tiết</button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/lPFuq2mOzpaakZrx0YCxACrOblKLIJ89mUWmtqORzy8.jpg"
              alt="Doctor providing 3-month nutrition care package"
              className="w-full"
              width="400"
              height="300"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Gói Chăm sóc Dinh Dưỡng 03 tháng</h2>
              <p className="text-gray-700 mb-4">Hỗ trợ điều trị Bảo tồn chức năng</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="bg-gray-800 text-white py-6 mt-12">
              <div className="container mx-auto text-center">
                <p>© 2025 Nutrition Research &amp; Consulting Institute. All rights reserved.</p>
              </div>
            </footer>
          </div>
          
    );
};


  
  
export default NutritionPage;
