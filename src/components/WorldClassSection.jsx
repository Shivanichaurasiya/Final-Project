const WorldClassSection = () => {
  return (
    <div className="bg-[#020617] py-28">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-white leading-snug">
            World-Class Learning for{" "}
            <span className="text-cyan-400">Anyone</span>,{" "}
            <span className="text-cyan-400">Anywhere</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Studynotion partners with more than 275+ leading universities and
            companies to bring flexible, affordable, job-relevant online
            learning to individuals and organizations worldwide.
          </p>

          <button
            className="mt-10 bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold 
                       hover:scale-105 hover:font-bold transition duration-300"
          >
            Learn more
          </button>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1E222B] p-6 ">
            <h4 className="text-white font-semibold text-lg">
              Curriculum Based on Industry Needs
            </h4>
            <p className="mt-4 text-gray-400 text-sm">
              Save time and money! The Belajar curriculum is made to be easier
              to understand and in line with industry needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1E293B] p-6 ">
            <h4 className="text-white font-semibold text-lg">
              Our Learning Methods
            </h4>
            <p className="mt-4 text-gray-400 text-sm">
              Studynotion partners with more than 275+ leading universities and
              companies to bring.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1E293B] p-6 ">
            <h4 className="text-white font-semibold text-lg">Certification</h4>
            <p className="mt-4 text-gray-400 text-sm">
              Studynotion partners with more than 275+ leading universities and
              companies to bring.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1E222B] p-6 ">
            <h4 className="text-white font-semibold text-lg">
              Rating "Auto-grading"
            </h4>
            <p className="mt-4 text-gray-400 text-sm">
              Studynotion partners with more than 275+ leading universities and
              companies to bring.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#1E222B] p-6  sm:col-span-2">
            <h4 className="text-white font-semibold text-lg">Ready to Work</h4>
            <p className="mt-4 text-gray-400 text-sm">
              Studynotion partners with more than 275+ leading universities and
              companies to bring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldClassSection;

