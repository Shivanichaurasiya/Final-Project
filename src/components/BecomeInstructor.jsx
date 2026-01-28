import instructorImg from "../assets/instructor.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const BecomeInstructor = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
const [showImage, setShowImage] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
     
        setShowImage(entry.isIntersecting);
      
    },
    { threshold: 0.3 }
  );

  if (imageRef.current) observer.observe(imageRef.current);

  return () => observer.disconnect();
}, []);



  return (
    <section className="bg-gradient-to-r from-[#050B17] to-[#020617] pt-24 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-80 items-center px-6">
        {/* LEFT IMAGE */}
      <div
  ref={imageRef}
  className={`flex-shrink-0 transition-all duration-500 ease-out
  ${showImage ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
>


          <img
  src={instructorImg}
  alt="Instructor"
  className="w-[560px] rounded-md"
/>

        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white max-w-md">
          <h2 className="text-4xl font-bold leading-tight">
            Become an <br />
            <span className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent">
              Instructor
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/signup")}
            className="
              mt-8
              bg-yellow-400
              text-black
              px-8
              py-3
              rounded-lg
              font-semibold
              flex
              items-center
              gap-2
              transition-all
              duration-300
              hover:scale-105
              hover:font-bold
              hover:bg-yellow-300
            "
          >
            Start Teaching Today
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
      <div className="mt-20 flex justify-center gap-6 pb-6">
        <p className="text-white/70 tracking-widest text-lg font-semibold uppercase">
          ReviewSlider
        </p>
      </div>
    </section>
  );
};

export default BecomeInstructor;
