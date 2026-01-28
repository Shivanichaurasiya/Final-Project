import { useEffect, useRef, useState } from "react";
import img1 from '../assets/TimeLineLogo/Logo1.svg'
import img2 from '../assets/TimeLineLogo/Logo2.svg'
import img3 from '../assets/TimeLineLogo/Logo3.svg'
import img4 from '../assets/TimeLineLogo/Logo4.svg'
import timeline from '../assets/Images/TimelineImage.png'
import compareImg from '../assets/Images/Compare_with_others.png'
import planTmg from '../assets/Images/Plan_your_lessons.png'
import KnowImg from '../assets/Images/Know_your_progress.png'

import limg from "../assets/limg.svg";
import rimg from "../assets/rimg.svg";
import fimg from "../assets/fimg.svg";
import simg from "../assets/simg.svg";
import rightimg from "../assets/rightimg.png";

const StudyCatalog = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting); // 👈 bar-bar animation ke liye
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* ================= ROW 1 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-4xl font-bold leading-tight">
            Get the skills you need for a{" "}
            <span className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent">
              job that is in demand
            </span>
          </h2>

          <div>
            <p className="text-gray-700 font-bold text-lg mt-6 leading-relaxed">
              The modern StudyNotion dictates its own terms. Today, to be a
              competitive specialist requires more than professional skills.
            </p>

            <button
              className="mt-10 bg-yellow-400 px-6 py-3 rounded-lg font-bold
              transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div
          ref={sectionRef}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          {/* LEFT FEATURES */}
          <div
            className={`space-y-6 transition-all duration-300 ease-out
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div className="flex gap-4">
              <img src={limg} alt="Leadership" className="w-8 h-8" />
              <div>
                <h4 className="text-lg font-bold">Leadership</h4>
                <p className="text-gray-500 text-lg">
                  Fully committed to the success company
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={rimg} alt="Responsibility" className="w-8 h-8" />
              <div>
                <h4 className="text-lg font-bold">Responsibility</h4>
                <p className="text-gray-500 text-lg">
                  Students will always be our top priority
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={fimg} alt="Flexibility" className="w-8 h-8" />
              <div>
                <h4 className="text-lg font-bold">Flexibility</h4>
                <p className="text-gray-500 text-lg">
                  The ability to switch is an important skills
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={simg} alt="Solve" className="w-8 h-8" />
              <div>
                <h4 className="text-lg font-bold">Solve the problem</h4>
                <p className="text-gray-500 text-lg">
                  Code your way to a solution
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative flex justify-center transition-all duration-300 ease-out delay-150 scale-x-[-1]
            ${show ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-20 scale-95"}`}
          >
            <img
              src={timeline}
              alt="Skills"
              className="w-full h-[500px] object-cover rounded-lg"
            />

            {/* GREEN STATS BOX */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-green-900 text-white flex rounded-lg  scale-x-[-1] overflow-hidden w-[85%]">
              <div className="px-10 py-6 flex items-center gap-4 border-r border-green-700">
                <h2 className="text-4xl font-bold">10</h2>
                <p className="text-sm text-green-300 uppercase">
                  YEARS EXPERIENCES
                </p>
              </div>
              <div className="px-10 py-6 flex items-center gap-4 border-green-700">
                <h2 className="text-4xl font-bold">250</h2>
                <p className="text-sm text-green-300">TYPES OF COURSES</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudyCatalog;
