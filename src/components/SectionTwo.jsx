import LeftCodeBox from "../components/LeftCodeBox";
const SectionTwo = () => {
  return (
    <div className="max-w-[1200px]  mb-20 mx-auto flex justify-between items-center mt-32 text-white">
      <div>
        <div className="p-6  text-sm ">
          <LeftCodeBox />
        </div>
      </div>

      <div className="max-w-[500px]">
        <h2 className="text-4xl font-semibold">
          Start{" "}
          <span className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent">
            coding in seconds
          </span>
        </h2>

        <p className="font-bold text-gray-600 text-lg mt-6">
          Go ahead, give it a try. Our hands-on learning environment means
          you'll be writing real code from your very first lesson.
        </p>

        <div className="flex gap-4 mt-6">
          <button
            className="
    bg-yellow-400 text-black px-6 py-3 rounded-md
    font-semibold
    flex items-center gap-2
    transition-all duration-300
    hover:scale-105 hover:font-bold hover:bg-yellow-500
  "
          >
            Continue Lesson
            <span className="transition-transform duration-300 hover:translate-x-1">
              →
            </span>
          </button>
          <button
            className="border border-[#2C333F] px-6 py-3 rounded-md font-semibold
    flex items-center gap-2
    transition-all duration-300
    hover:scale-105 hover:font-bold hover:bg-gray-500"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
