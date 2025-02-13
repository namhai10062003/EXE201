import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detial_nutri1 from "./detail-nutri/detail-nuti1"
import Detial_nutri2 from "./detail-nutri/detail-nutri2"
import Detial_nutri3 from "./detail-nutri/detail-nutri3"
import Detial_nutri4 from "./detail-nutri/detail-nutri4"
import BookingDoctor from "./doctors/bookingdoctor"
import DetailDoctor from "./doctors/detail-doctor"
import Doctor from "./doctors/doctor"
import Home from "./home/Home"
import AdminDashboard from "./pages/AdminDashBoard"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {


  return (
   <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Nagivate to="/admin-dashboard"/>}></Route> */}

        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/doctors" element={<Doctor />}></Route>
        <Route path="/detail-nutri1" element={<Detial_nutri1/>}></Route>
        <Route path="/detail-nutri2" element={<Detial_nutri2/>}></Route>
        <Route path="/detail-nutri3" element={<Detial_nutri3/>}></Route>
        <Route path="/detail-nutri4" element={<Detial_nutri4/>}></Route>
        <Route path="/bookingdoctor" element={<BookingDoctor/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard/>}></Route>
        <Route path="/detail-doctor/:id" element={<DetailDoctor />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
