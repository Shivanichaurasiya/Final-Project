import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* 🔹 DUMMY IMAGES */
import img1 from "../assets/pop1.png";
import img2 from "../assets/pop2.png";
import img3 from "../assets/pop3.png";
import img4 from "../assets/pop4.jpg";
import img5 from "../assets/pop5.png";
import img6 from "../assets/pop6.png";
import img7 from "../assets/pop7.png";
import img8 from "../assets/pop8.png";

/* 🔹 SIDEBAR LINKS */
const sidebarLinks = [
  "Dashboard",
  "Free Content",
  "UI Basics",
  "UX Design",
  "Design Tools",
  "Design Systems",
  "Projects",
];

/* 🔹 COURSE DATA */
const courseData = {
  Dashboard: [
    { title: "UI/UX Roadmap", price: "₹299", img: img1 },
    { title: "Design Thinking", price: "₹499", img: img2 },
    { title: "User Research Basics", price: "₹399", img: img3 },
  ],

  "Free Content": [
    { title: "Intro to UI Design", price: "FREE", img: img4 },
    { title: "Intro to UX Design", price: "FREE", img: img5 },
    { title: "Color Theory Basics", price: "FREE", img: img6 },
  ],

  "UI Basics": [
    { title: "Typography & Colors", price: "₹699", img: img7 },
    { title: "Layout & Grids", price: "₹799", img: img8 },
  ],

  "UX Design": [
    { title: "User Personas", price: "₹899", img: img1 },
    { title: "Wireframing & Prototyping", price: "₹1099", img: img2 },
  ],

  "Design Tools": [
    { title: "Figma Basics", price: "₹999", img: img3 },
    { title: "Adobe XD", price: "₹1199", img: img4 },
    { title: "Design with Canva", price: "₹599", img: img5 },
  ],

  "Design Systems": [
    { title: "Atomic Design", price: "₹1299", img: img6 },
    { title: "Component-Based Design", price: "₹1499", img: img7 },
  ],

  Projects: [
    { title: "Mobile App UI Project", price: "₹2499", img: img8 },
    { title: "Website Redesign Project", price: "₹2799", img: img1 },
    { title: "UX Case Study", price: "₹2999", img: img2 },
  ],
};

const UIDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      {/* 🔹 SIDEBAR */}
      <div className="w-64 bg-[#020617] border-r border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-6 text-yellow-400">
          UI / UX Design
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
        <h1 className="text-3xl font-bold mb-8">
          {selectedCategory} Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData[selectedCategory]?.map((course, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl p-6 hover:scale-105 transition shadow-md"
            >
              <img
                src={course.img}
                alt={course.title}
                className="object-cover h-40 w-full rounded-md"
              />

              <h3 className="text-xl font-semibold mt-3 mb-2">
                {course.title}
              </h3>

              <p className="text-yellow-400 font-bold mb-4">
                {course.price}
              </p>

              <div className="flex gap-3">
                {selectedCategory === "Free Content" ? (
                  <button
                    onClick={() => navigate("/free-learning")}
                    className="flex-1 py-2 rounded-md font-semibold bg-yellow-500 text-black hover:bg-yellow-300"
                  >
                    Start Learning
                  </button>
                ) : (
                  <button
                    className="flex-1 py-2 rounded-md font-semibold bg-yellow-400 text-black hover:bg-yellow-300"
                  >
                    Enroll Now
                  </button>
                )}

                <button className="flex-1 border border-yellow-400 text-yellow-400 py-2 rounded-md hover:bg-yellow-400 hover:text-black">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIDesign;
