
import React from "react";
import "./EmployeeDashboard.css";
const stats = [
  { id: 1, title: "Total Employees", value: 128 },
  { id: 2, title: "Active Projects", value: 15 },
  { id: 3, title: "Pending Tasks", value: 42 },
];

const employees = [
  { id: 1, name: "Nguyễn Văn A", role: "Software Engineer" },
  { id: 2, name: "Trần Thị B", role: "Product Manager" },
  { id: 3, name: "Lê Văn C", role: "UI/UX Designer" },
];

const tasks = [
  { id: 1, task: "Fix login issue", assignedTo: "Nguyễn Văn A" },
  { id: 2, task: "Prepare sprint meeting", assignedTo: "Trần Thị B" },
  { id: 3, task: "Design landing page", assignedTo: "Lê Văn C" },
];

const EmployeeDashboard = () => {
  return (
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
                  src="https://storage.googleapis.com/a1aa/image/v9Oap6r8nL1SBwWxR1dV97JQB-tlzn9JzaepRma8Z5Y.jpg"
                  alt="Institute Logo"
                  className="mx-auto mb-4"
                  width="100"
                  height="100"
                />
                <h1 className="text-4xl font-bold text-white">Employee Dashboard</h1>
              </div>
            </div>
          </div>
          <div className="p-4 bg-teal-700">
            <ul>
              {stats.map((stat) => (
                <li key={stat.id} className="flex items-center justify-between p-2 bg-teal-600 rounded-lg mb-2">
                  <div className="flex items-center">
                    <span className="bg-white text-teal-700 rounded-full p-2 mr-2">+</span>
                    <span>{stat.title} ({stat.value})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Employee and Task Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center mb-4">Employee and Task Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-700">Employee List</h3>
                <ul>
                  {employees.map((emp) => (
                    <li key={emp.id} className="flex justify-between p-2 border-b border-teal-200">
                      <span>{emp.name}</span>
                      <span className="text-teal-600">{emp.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-700">Recent Tasks</h3>
                <ul>
                  {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between p-2 border-b border-teal-200">
                      <span>{task.task}</span>
                      <span className="text-teal-600">{task.assignedTo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Button Section */}
        <div className="flex justify-center mt-8">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">View More Details</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;