import { useEffect, useRef, useState } from "react";

import about4 from "../assets/about-4.png";

const AboutStatsSection = () => {
  const leftRef = useRef(null);
const rightRef = useRef(null);
const [show, setShow] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
      }
    },
    { threshold: 0.3 }
  );

  if (leftRef.current) observer.observe(leftRef.current);

  return () => observer.disconnect();
}, []);



  
  return (
    <div className="bg-[#020617] text-white py-24">
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
        {/* LEFT TEXT */}
        <div
  ref={leftRef}
  className={`transition-all duration-500 ease-out
  ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}`}
>
          <h5 className="text-2xl font-semibold mb-4">
            <span className="text-pink-500">Our Founding Story</span>
          </h5>

          <p className="text-gray-400 leading-relaxed">
            Our e-learning platform was born out of a shared vision and passion
            for transforming education. It all began with a group of educators,
            technologists, and lifelong learners who recognized the need for
            accessible, flexible, and high-quality learning opportunities in a
            rapidly evolving digital world.
            <br />
            <br />
            As experienced educators ourselves, we witnessed firsthand the
            limitations and challenges of traditional education systems. We
            believed that education should not be confined to the walls of a
            classroom or restricted by geographical boundaries.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-orange-400">
            Our Vision
          </h2>

          <p className="text-gray-400 leading-relaxed">
            With this vision in mind, we set out on a journey to create an
            e-learning platform that would revolutionize the way people learn.
            Our team of dedicated experts worked tirelessly to develop a robust
            and intuitive platform that combines cutting-edge technology with
            engaging content.
          </p>
        </div>

        {/* RIGHT IMAGE + TEXT */}
        <div
  ref={rightRef}
  className={`transition-all duration-1000 ease-out delay-200
  ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}`}
>

          <img src={about4} alt="RightImg" className="mb-6" />

          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
            Our Mission
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Our mission goes beyond just delivering courses online. We wanted to
            create a vibrant community of learners, where individuals can
            connect, collaborate, and learn from one another. We believe that
            knowledge thrives in an environment of sharing and dialogue.
          </p>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="mt-24 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center py-10">
          <div>
            <h3 className="text-2xl font-bold">5K</h3>
            <p className="text-gray-400 text-sm">Active Students</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-gray-400 text-sm">Mentors</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">200+</h3>
            <p className="text-gray-400 text-sm">Courses</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-gray-400 text-sm">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStatsSection;
