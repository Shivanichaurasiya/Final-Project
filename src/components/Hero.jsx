// import React from 'react'
// import { useNavigate } from "react-router-dom"

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className='flex flex-col items-center text-center text-white mt-10 px-4'>
//       <h1 className='text-4xl md:text-5xl font-semibold max-w-[900px] leading-tight'>
//         Empower Your Future with{" "}
//         <span className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent'>
//           Coding skills
//         </span>
//       </h1>
//       {/* Description */}
//       <p className=" mt-7 text-gray-500 max-w-[1200px] text-sm md:text-base text-sm md:text-xl leading-relaxed">
//         With our online coding courses, you can learn at your own pace, from
//         anywhere in the world, and get access to a wealth of resources,
//         including hands-on projects, quizzes, and personalized feedback from
//         instructors.
//       </p>

//       {/* Buttons */}
//       <div className="flex justify-center gap-8 mt-7">
//         <button
//           onClick={() => navigate("/about")}
//           className="text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition bg-yellow-500 font-medium rounded hover:scale-105 hover:font-bold hover:rounded-lg transition-all duration-300"
//         >
//           Learn More
//         </button>

//         <button
//           onClick={() => navigate("/login")}
//           className="border border-[#2C333F] px-6 py-3 rounded-md hover:bg-[#161D29] hover:scale-105 hover:font-bold hover:rounded-lg transition-all duration-300"
//         >
//           Book a Demo
//         </button>
//       </div>
//     </section>
//   )
// }

// export default Hero




import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/Images/random-image/codingbg8.jpeg";
import img2 from "../assets/Images/random-image/codingbg9.jpg";
import img3 from "../assets/Images/random-image/codingbg10.jpg";
import img4 from "../assets/Images/random-image/codingbg11.jpg";
import img5 from "../assets/Images/random-image/codingbg1.jpg";
import img6 from "../assets/Images/random-image/codingbg2.jpg";
import img7 from "../assets/Images/random-image/codingbg3.jpg";
import img8 from "../assets/Images/random-image/codingbg4.jpg";
import img9 from "../assets/Images/random-image/codingbg5.jpg";
import img10 from "../assets/Images/random-image/codingbg6.jpeg";
import img11 from "../assets/Images/random-image/codingbg7.jpg";

const backgroundImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const Hero = () => {
  const [bgImage, setBgImage] = useState(backgroundImages[0]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // random background
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBgImage(backgroundImages[randomIndex]);
  }, []);

  // intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              entry.target.classList.add("animate-leftText");
            }
            if (entry.target === rightRef.current) {
              entry.target.classList.add("animate-rightText");
            }
            entry.target.classList.remove("scroll-hidden");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative text-white flex items-center justify-center h-[700px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center flex flex-col gap-6 px-4">
        <div ref={leftRef} className="scroll-hidden">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Our Platform
            </span>
          </h1>
        </div>

        <div ref={rightRef} className="scroll-hidden">
          <h1 className=" text-3xl font-semibold">
            Learn new skills and advance your career with our expert-led courses.
          </h1>

          <p className=" max-w-6xl mx-auto text-gray-300 mt-2">
            With our online coding courses, you can learn at your own pace, from anywhere in the world,
            and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-yellow-500 px-6 py-2 rounded-xl text-black font-semibold hover:scale-105 transition">
            Learn More
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

