const CTASection = () => {
  return (
    <section className="w-full h-80 py-24 flex justify-center items-center bg-gray-100 relative overflow-hidden">
      {/* background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.03)_50%,rgba(0,0,0,0.03)_75%,transparent_75%,transparent)] bg-[length:20px_20px]" />

      <div className="relative flex gap-4">
        {/* Button 1 */}
        <button
          className="
          group
          px-6 py-3
          bg-yellow-400 text-black
          rounded-md
          transition-all duration-200
          hover:scale-105
        "
        >
          <span
            className="
            relative
            font-semibold
            after:content-['Explore_Full_Catalog_→']
            after:absolute after:left-0 after:top-0
            after:font-bold
            after:opacity-0
            after:pointer-events-none
          "
          >
            <span className="group-hover:font-bold">
              Explore Full Catalog →
            </span>
          </span>
        </button>

        {/* Button 2 */}
        <button
          className="
          group
          px-6 py-3
          bg-gray-900 text-white
          rounded-md
          transition-all duration-200
          hover:scale-105
        "
        >
          <span
            className="
            relative
            font-semibold
            after:content-['Learn_more']
            after:absolute after:left-0 after:top-0
            after:font-bold
            after:opacity-0
            after:pointer-events-none
          "
          >
            <span className="group-hover:font-bold">Learn more</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
