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
  "Arrays",
  "Linked List",
  "Stack & Queue",
  "Trees",
  "Graphs",
  "Algorithms",
  "Projects",
];

/* 🔹 COURSE DATA */
const courseData = {
  Dashboard: [
    { title: "DSA Roadmap", price: "₹299", img: img1 },
    { title: "Time & Space Complexity", price: "₹499", img: img2 },
    { title: "Problem Solving Basics", price: "₹399", img: img3 },
  ],

  "Free Content": [
    { title: "Intro to Data Structures", price: "FREE", img: img4 },
    { title: "Big-O Notation", price: "FREE", img: img5 },
    { title: "Basic Arrays", price: "FREE", img: img6 },
  ],

  Arrays: [
    { title: "Arrays in C++", price: "₹699", img: img7 },
    { title: "Arrays in Java", price: "₹799", img: img8 },
    { title: "Arrays in JavaScript", price: "₹899", img: img1 },
  ],

  "Linked List": [
    { title: "Singly Linked List", price: "₹999", img: img2 },
    { title: "Doubly Linked List", price: "₹1099", img: img3 },
  ],

  "Stack & Queue": [
    { title: "Stack Implementation", price: "₹899", img: img4 },
    { title: "Queue & Deque", price: "₹999", img: img5 },
  ],

  Trees: [
    { title: "Binary Tree", price: "₹1199", img: img6 },
    { title: "Binary Search Tree", price: "₹1399", img: img7 },
    { title: "AVL Tree", price: "₹1599", img: img8 },
  ],

  Graphs: [
    { title: "Graph Basics", price: "₹1499", img: img1 },
    { title: "BFS & DFS", price: "₹1699", img: img2 },
  ],

  Algorithms: [
    { title: "Sorting Algorithms", price: "₹1799", img: img3 },
    { title: "Searching Algorithms", price: "₹1599", img: img4 },
    { title: "Dynamic Programming", price: "₹1999", img: img5 },
  ],

  Projects: [
    { title: "DSA Problem Solver", price: "₹2499", img: img6 },
    { title: "Path Finder using Graphs", price: "₹2799", img: img7 },
    { title: "Algorithm Visualizer", price: "₹2999", img: img8 },
  ],
};

const DataStructures = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dashboard");
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);


  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      {/* 🔹 SIDEBAR */}
      <div className="w-64 bg-[#020617] border-r border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-6 text-yellow-400">
          Data Structures
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

                <button
  onClick={() => setSelectedCourse(course)}
  className="flex-1 border border-yellow-400 text-yellow-400 py-2 rounded-md hover:bg-yellow-400 hover:text-black"
>
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
        src={selectedCourse.img}
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

export default DataStructures;
