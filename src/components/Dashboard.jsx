// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import DashboardCard from "./DashboardCard";


// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [openCourses, setOpenCourses] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">

//       {/* ================= Sidebar ================= */}
//       <div className="w-64 bg-gray-800 text-white p-5">

//         <h2 className="text-2xl font-bold mb-8">Instructor</h2>

//         <ul className="space-y-4">

//           <li
//             className="cursor-pointer hover:text-yellow-400"
//             onClick={() => navigate("/becomeanInstructor/dashboard")}
//           >
//             Dashboard
//           </li>

//           <li
//             className="cursor-pointer hover:text-yellow-400"
//             onClick={() => navigate("/becomeanInstructor/my-profile")}
//           >
//             My Account
//           </li>

//           <li>
//             <div
//               className="cursor-pointer hover:text-yellow-400 flex justify-between"
//               onClick={() => setOpenCourses(!openCourses)}
//             >
//               <span>My Courses</span>
//               <span>{openCourses ? "−" : "+"}</span>
//             </div>

//             {openCourses && (
//               <ul className="ml-4 mt-2 space-y-2 text-sm">
//                 <li
//                   className="cursor-pointer hover:text-yellow-400"
//                   onClick={() => navigate("/becomeanInstructor/newcourse")}
//                 >
//                   Add New Course
//                 </li>
//                 <li
//                   className="cursor-pointer hover:text-yellow-400"
//                   onClick={() => navigate("/becomeanInstructor/edit-course")}
//                 >
//                   Edit Course
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li
//             className="cursor-pointer hover:text-yellow-400"
//             onClick={() => navigate("/becomeanInstructor/manage-students")}
//           >
//             Manage Students
//           </li>

//           <li
//             className="cursor-pointer text-red-400 hover:text-red-500"
//             onClick={handleLogout}
//           >
//             Logout
//           </li>

//         </ul>
//       </div>

//       {/* ================= Main Content ================= */}
//       <div className="flex-1 p-8">

//         <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <DashboardCard title="Total Courses" value="12" />
//           <DashboardCard title="Total Students" value="320" />
//           <DashboardCard title="Active Courses" value="8" />
//           <DashboardCard title="Pending Reviews" value="5" />
//           <DashboardCard title="Total Earnings" value="₹45,000" />
//           <DashboardCard title="New Enrollments" value="24" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import img1 from "../assets/pop1.png";
import img2 from "../assets/pop2.png";
import img3 from "../assets/pop3.png";
import img4 from "../assets/pop4.jpg";
import img5 from "../assets/pop5.png";
import img6 from "../assets/pop6.png";

import CourseCard from "./CourseCard";


const courses = [
  {
    image: img1,
    courseName: "React for Beginners",
    instructor: "Shivani Chaurasiya",
    price: 999,
  },
  {
    image: img2,
    courseName: "Advanced JavaScript",
    instructor: "Shivani Chaurasiya",
    price: 1299,
  },
  {
    image: img3,
    courseName: "MERN Stack Development",
    instructor: "Shivani Chaurasiya",
    price: 1999,
  },
  {
    image: img4,
    courseName: "Node.js Complete Guide",
    instructor: "Shivani Chaurasiya",
    price: 1499,
  },
  {
    image: img5,
    courseName: "MongoDB Mastery",
    instructor: "Shivani Chaurasiya",
    price: 899,
  },
  {
    image: img6,
    courseName: "Full Stack Web Development",
    instructor: "Shivani Chaurasiya",
    price: 2499,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCourses, setOpenCourses] = useState(false);
  const [activePage, setActivePage] = useState("dashboard"); // 👈 important

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex  min-h-screen bg-gray-100">

      {/* ================= Sidebar ================= */}
      <div className="w-64 bg-gray-800 text-white p-5">

        <h2 className="text-2xl font-bold mb-8">Instructor</h2>

        <ul className="space-y-4">

          <li
            className={`cursor-pointer hover:text-yellow-400 ${
              activePage === "dashboard" ? "text-yellow-400" : ""
            }`}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </li>

          <li
            className={`cursor-pointer hover:text-yellow-400 ${
              activePage === "myaccount" ? "text-yellow-400" : ""
            }`}
            onClick={() => setActivePage("myaccount")}
          >
            My Account
          </li>

          <li>
            <div
              className="cursor-pointer hover:text-yellow-400 flex justify-between"
              onClick={() => setOpenCourses(!openCourses)}
            >
              <span>My Courses</span>
              <span>{openCourses ? "−" : "+"}</span>
            </div>

            {openCourses && (
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                <li
                  className="cursor-pointer hover:text-yellow-400"
                  onClick={() => navigate("/becomeanInstructor/newcourse")}
                >
                  Add New Course
                </li>
                <li
                  className="cursor-pointer hover:text-yellow-400"
                  onClick={() => navigate("/becomeanInstructor/edit-course")}
                >
                  Edit Course
                </li>
              </ul>
            )}
          </li>

          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => navigate("/becomeanInstructor/manage-students")}
          >
            Manage Students
          </li>

          <li
            className="cursor-pointer text-red-400 hover:text-red-500"
            onClick={handleLogout}
          >
            Logout
          </li>

        </ul>
      </div>

      {/* ================= Main Content ================= */}
      <div className="flex-1 p-8">

        {/* ---------- DASHBOARD ---------- */}
        {activePage === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-4">
              Welcome to Instructor Dashboard
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {courses.map((course, index) => (
    <CourseCard
      key={index}
      image={course.image}
      courseName={course.courseName}
      instructor={course.instructor}
      price={course.price}
      onEnroll={() => alert(`Enrolled in ${course.courseName}`)}
      onView={() => navigate(`/course-details/${index}`)}
    />
  ))}
</div>

          </>
        )}

        {/* ---------- MY ACCOUNT (cards here) ---------- */}
        {activePage === "myaccount" && (
          <>
            <h1 className="text-2xl font-bold mb-6">My Account Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DashboardCard title="Total Courses" value="12" />
              <DashboardCard title="Total Students" value="320" />
              <DashboardCard title="Active Courses" value="8" />
              <DashboardCard title="Pending Reviews" value="5" />
              <DashboardCard title="Total Earnings" value="₹45,000" />
              <DashboardCard title="New Enrollments" value="24" />
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Dashboard;

