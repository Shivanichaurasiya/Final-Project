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
  "Python for ML",
  "Statistics",
  "Machine Learning",
  "Deep Learning",
  "Projects",
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
    { title: "Python Basics", price: "FREE", img: img1 },
    { title: "Intro to ML", price: "FREE", img: img2 },
    { title: "Maths for ML", price: "FREE", img: img3 },
  ],

  "Python for ML": [
    { title: "Python Numpy", price: "₹499", img: img4 },
    { title: "Pandas & Data Analysis", price: "₹699", img: img5 },
    { title: "Data Visualization", price: "₹799", img: img6 },
  ],

  Statistics: [
    { title: "Probability Basics", price: "₹599", img: img7 },
    { title: "Statistics for ML", price: "₹899", img: img8 },
  ],

  "Machine Learning": [
    { title: "Supervised Learning", price: "₹1499", img: img4 },
    { title: "Unsupervised Learning", price: "₹1699", img: img5 },
    { title: "Model Evaluation", price: "₹1799", img: img6 },
  ],

  "Deep Learning": [
    { title: "Neural Networks", price: "₹1999", img: img7 },
    { title: "CNN & RNN", price: "₹2299", img: img8 },
  ],

  Projects: [
    { title: "ML Prediction System", price: "₹2499", img: img1 },
    { title: "Spam Detection Project", price: "₹2699", img: img2 },
    { title: "Recommendation System", price: "₹2999", img: img3 },
  ],
};

const MachineLearning = () => {
    const [selectedCategory, setSelectedCategory] = useState("Dashboard");
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      {/* 🔹 SIDEBAR */}
      <div className="w-64 bg-[#020617] border-r border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-6 text-yellow-400">
          Machine Learning
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
              <img src={course.img} className="object-cover h-40 w-100" />
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


export default MachineLearning;
