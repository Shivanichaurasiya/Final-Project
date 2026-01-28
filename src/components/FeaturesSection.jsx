import Card1 from "../assets/card-1.png";
import Card2 from "../assets/card-2.png";
import Card3 from "../assets/card-3.png";

const FeaturesSection = () => {
  return (
    <section className=" bg-white min-h-screen relative">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto flex  flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold">
          Your swiss knife for{" "}
          <span className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-teal-400 to-green-400 bg-clip-text text-transparent">
            learning any language
          </span>
        </h1>

        <p className="mt-4 text-black-500">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </p>
      </div>

      {/* Cards */}
      <div className="relative flex justify-center items-center gap-10 mt-10 pb-50  ">
        <img
          src={Card1}
          alt="card-1"
          className=" absolute z-0  left-50 top-15  transition-transform duration-300 hover:scale-110"
        />

        <img
          src={Card2}
          alt="card-2"
          className=" absolute z-10 top-0 object-contain transition-transform duration-300 hover:scale-110"
        />

        <img
          src={Card3}
          alt="card-3"
          className=" absolute z-20 top-5 right-40 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Button */}
       <div className="mt-80 flex justify-center">
    <button className="bg-yellow-500 px-8 py-3 rounded-xl text-black text-sm font-semibold hover:scale-105 transition">
      Learn More
    </button>
    </div>
      {/* <div className="mt-20 text-center">
        <button
          className="bg-yellow-400 
    px-10 py-3 
    rounded-lg 
    font-semibold
    transition-all 
    duration-300 
    hover:scale-105 
    hover:font-bold"
        >
          Learn More
        </button>
      </div> */}
    </section>
  );
};

export default FeaturesSection;
