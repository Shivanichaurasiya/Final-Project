

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/pop1.png";
import img2 from "../assets/pop2.png";
import img3 from "../assets/pop3.png";
import img4 from "../assets/pop4.jpg";
import img5 from "../assets/pop5.png";
import img6 from "../assets/pop6.png";
import img7 from "../assets/pop7.png";
import img8 from "../assets/pop8.png";
import img9 from "../assets/pop9.png";

/* 🔹 SIDEBAR LINKS */
const sidebarLinks = [
  "Dashboard",
  "Free Content",
  "Web Development",
  "Data Analytics",
  "Machine Learning",
  "Data Structure & Algorithms",
  "Artificial Intelligence",
  "System Design",
  "IOT",
  "Devops",
];

/* 🔹 COURSE DATA */
const courseData = {
  Dashboard: [
    { title: "HTML Beginner", price: "₹299", img: img4 },
    { title: "JS Basics", price: "₹499", img: img3 },
    { title: "jQuery Advanced", price: "₹499", img: img6 },
    { title: "MongoDB Beginner", price: "₹1499", img: img4 },
    { title: "MongoDB Advance", price: "₹1799", img: img8 },
    { title: "Express-WebSocket", price: "₹1999", img: img2 },
  ],

  "Free Content": [
    { title: "HTML Basics", price: "FREE", img: img1 },
    { title: "CSS Basics", price: "FREE", img: img2 },
    { title: "JavaScript Intro", price: "FREE", img: img3 },
  ],

  "Web Development": [
    { title: "HTML Advanced", price: "₹499", img: img6 },
    { title: "CSS Animations", price: "₹599", img: img9 },
    { title: "React Projects", price: "₹1999", img: img9 },
  ],

  "Data Analytics": [
    { title: "Python Basics", price: "₹399", img: img5 },
    { title: "Data Visualization", price: "₹699", img: img7 },
  ],

  "Machine Learning": [
    { title: "ML Basics", price: "₹999", img: img8 },
    { title: "Deep Learning", price: "₹1499", img: img9 },
  ],

  "Data Structure & Algorithms": [
    { title: "DSA with JS", price: "₹799", img: img1 },
    { title: "DSA Advanced", price: "₹1299", img: img2 },
  ],

  "Artificial Intelligence": [
    { title: "AI Basics", price: "₹899", img: img3 },
    { title: "AI Projects", price: "₹1599", img: img4 },
  ],

  "System Design": [
    { title: "System Design Basics", price: "₹999", img: img5 },
    { title: "High Level Design", price: "₹1499", img: img6 },
  ],

  IOT: [
    { title: "IOT Beginner", price: "₹699", img: img7 },
    { title: "IOT Projects", price: "₹1299", img: img8 },
  ],

  Devops: [
    { title: "Docker Basics", price: "₹999", img: img9 },
    { title: "Kubernetes", price: "₹1499", img: img2 },
  ],
};

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      {/* 🔹 SIDEBAR */}
      <aside className="w-64 bg-[#020617] border-r border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-6 text-yellow-400">
          {selectedCategory}
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
      </aside>

      {/* 🔹 MAIN CONTENT */}
      <main className="flex-1 p-10">
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
                className="h-40 w-full object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                {course.title}
              </h3>

              <p className="text-yellow-400 font-bold mb-4">
                {course.price}
              </p>

              {selectedCategory === "Free Content" ? (
                <button
                  onClick={() => navigate("/free-learning")}
                  className="w-full py-2 rounded-md font-semibold bg-yellow-500 text-black hover:bg-yellow-300"
                >
                  Start Learning
                </button>
              ) : (
                <button
                  className="w-full py-2 rounded-md font-semibold bg-yellow-400 text-black hover:bg-yellow-300"
                >
                  Enroll Now
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
