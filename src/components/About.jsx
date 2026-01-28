import about1 from "../assets/about-1.webp";
import about2 from "../assets/about-2.webp";
import about3 from "../assets/about-3.webp";
import AboutStatsSection from "../components/AboutStatsSection";
import WorldClassSection from "../components/WorldClassSection";
import ContactFormSection from "../components/ContactFormSection";
import Review from "./Review";

const About = () => {
  return (
    <div className="bg-[#020617] pt-30 pb-40 relative">
      {/* ===== MAIN BOX ===== */}
      <div
        className="relative max-w-7xl mx-auto bg-[#0F172A] 
             rounded-1xl px-12 pt-24 pb-40 shadow-xl -mt-20 z-10"
      >
        {/* TOP CONTENT */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white">
            Driving Innovation in Online Education for a{" "}
            <span className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent">
              Brighter Future
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </p>
        </div>
      </div>

      {/* ===== FLOATING IMAGES UNDER BOX ===== */}
      <div className="relative z-20 -mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={about1}
                alt=""
                className="w-full h-[260px] object-cover hover:scale-105 transition"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={about2}
                alt=""
                className="w-full h-[260px] object-cover hover:scale-105 transition"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={about3}
                alt=""
                className="w-full h-[260px] object-cover hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM TEXT ===== */}
      <p className="mt-24 text-center text-xl text-gray-300 max-w-5xl mx-auto px-2">
        We are passionate about revolutionizing the way we learn. Our innovative
        platform{" "}
        <span className="text-cyan-400 font-semibold">combines technology</span>
        ,<span className="text-yellow-400 font-semibold"> expertise</span> and{" "}
        <span className="text-orange-400 font-semibold">community</span> to
        create an{" "}
        <span className="text-orange-400 font-semibold">
          unparalleled educational experience
        </span>
        .
      </p>
      <AboutStatsSection />
      <WorldClassSection />
      <ContactFormSection />
      <Review/>
    </div>
  );
};

export default About;
