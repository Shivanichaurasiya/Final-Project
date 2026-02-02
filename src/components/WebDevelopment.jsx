import img1 from "../assets/pop1.png";
import img2 from "../assets/pop2.png";
import img3 from "../assets/pop3.png";
import img4 from "../assets/pop4.jpg";
import img5 from "../assets/pop5.png";
import img6 from "../assets/pop6.png";
import img7 from "../assets/pop7.png";
import img8 from "../assets/pop8.png";
import img9 from "../assets/pop9.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const sidebarLinks = [
  "Dashboard",
  "Free Content",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "jQuery",
  "React",
  "Express",
  "MongoDb",
];

const courseData = {
   Dashboard: [
    { title: "HTML Beginner", price: "₹299", img1: img4 },
    { title: "JS Basics", price: "₹499", img1: img3 },
    { title: "jQuery Advanced", price: "₹499", img1: img6 },
    { title: "MongoDB Beginner", price: "₹1499", img1: img4 },
    { title: "MongoDB Advance", price: "₹1799", img1: img8 },
    { title: "Express-WebSocket", price: "₹1999", img1: img2 },
  ],

  "Free Content": [
    { title: "HTML Basics", price: "FREE", img1: img1 },
    { title: "CSS Basics", price: "FREE", img1: img2 },
    { title: "JavaScript Intro", price: "FREE", img1: img3 },
  ],
  HTML: [
    { title: "HTML Beginner", price: "₹299",img1: img4 },
    { title: "HTML Forms & SEO", price: "₹399",img1: img5 },
    { title: "HTML Advanced", price: "₹499",img1: img6},
  ],
  CSS: [
    { title: "CSS Flexbox", price: "₹399",img1: img7},
    { title: "CSS Grid", price: "₹499",img1: img8},
    { title: "CSS Animations", price: "₹599" ,img1: img9},
  ],
  JavaScript: [
    { title: "JS Basics", price: "₹499",img1: img3 },
    { title: "ES6+", price: "₹799",img1: img7 },
    { title: "Async JS", price: "₹999",img1: img1 },
  ],
  Bootstrap: [
    { title: "Bootstrap 5", price: "₹399",img1: img2 },
    { title: "Bootstrap Projects", price: "₹599",img1: img3 },
  ],
  jQuery: [
    { title: "jQuery Basics", price: "₹299",img1: img5 },
    { title: "jQuery Advanced", price: "₹499",img1: img6 },
  ],
  React: [
    { title: "React Beginner", price: "₹1499",img1: img7 },
    { title: "React Hooks", price: "₹1799",img1: img8 },
    { title: "React Projects", price: "₹1999",img1: img9 },
  ],
  Express: [
    { title: "Express", price: "₹1499" ,img1: img3},
    { title: "Express-Authentication", price: "₹1799",img1: img6 },
    { title: "Express-WebSocket", price: "₹1999",img1: img2 },
  ],
  MongoDb: [
    { title: "MongoDb Beginner", price: "₹1499",img1: img4 },
    { title: "MongoDB Advance", price: "₹1799",img1: img8 },
    { title: "MongoDB Project", price: "₹1999",img1: img7 },
  ],
};

const WebDevelopment = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dashboard");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      {/* 🔹 SIDEBAR */}
      <div className="w-64 bg-[#020617] border-r border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-6 text-yellow-400">
          Web Development
        </h2>

        <ul className="space-y-3">
          {sidebarLinks.map((item) => (
            <li
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`cursor-pointer px-3 py-2 rounded-md transition
                ${
                  selectedCategory === item
                    ? "bg-yellow-400 text-black font-semibold"
                    : "hover:bg-gray-800 hover:text-yellow-400"
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">{selectedCategory} Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData[selectedCategory].map((course, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl p-6 hover:scale-105 transition shadow-md"
            >
              <img src={course.img1} className="object-cover h-40 w-100" />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>

              <p className="text-yellow-400 font-bold mb-4">{course.price}</p>

              <div className="flex gap-3">
                <button onClick={()=>{
                    if(selectedCategory === "Free Content"){
                        navigate("/free-learning");
                    }
                }}
                  className={`flex-1 py-2 rounded-md font-semibold
      ${
        selectedCategory === "Free Content"
          ? "bg-yellow-500 text-black hover:bg-yellow-300"
          : "bg-yellow-400 text-black hover:bg-yellow-300"
      }`}
                >
                  {selectedCategory === "Free Content"
                    ? "Start Learning"
                    : "Enroll Now"}
                </button>

                <button 
                 onClick={() => setSelectedCourse(course)}
                 className="flex-1 border border-yellow-400 text-yellow-400 py-2 rounded-md hover:bg-yellow-400 hover:text-black">

                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* 🔸 COURSE DETAIL MODAL */}
{selectedCourse && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    
    <div className="bg-[#020617] text-white w-[90%] max-w-md rounded-xl p-6 relative">

      {/* Close Button */}
      <button
        onClick={() => setSelectedCourse(null)}
        className=" top-1 font-bold ml-100 text-2xl text-white hover:text-red-500"
      >
        ✕
      </button>

      {/* Course Image */}
      <img
        src={selectedCourse.img1}
        alt="course"
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      {/* Course Title */}
      <h2 className="text-2xl font-bold mb-2">
        {selectedCourse.title}
      </h2>

      {/* Price */}
      <p className="text-yellow-400 font-semibold mb-3">
        Price: {selectedCourse.price}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-5">
        This course will help you learn <b>{selectedCourse.title}</b> from
        beginner to advanced level with practical examples and projects.
      </p>

      {/* Action Button */}
      {selectedCategory === "Free Content" ? (
  <button
    onClick={() => {
      setSelectedCourse(null);
      navigate("/free-learning");
    }}
    className="w-full bg-green-400 text-black py-2 rounded-md font-semibold hover:bg-green-300"
  >
    Start Learning
  </button>
) : (
  <button
    className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-300"
  >
    Enroll Now
  </button>
)}

    </div>
  </div>
)}




    </div>
  );
};

export default WebDevelopment;
