import { useState } from "react";

const CatalogDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative flex items-center gap-2 cursor-pointer  text-lg font-medium hover:text-yellow-500"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      Catalog
      {/* Arrow circle */}
      <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white text-black text-[10px]">
        ▼
      </span>
      {open && (
        <div className="absolute top-[120%] left-0 w-[220px] bg-white rounded-xl shadow-xl border border-gray-200 z-50">
          <p
            className="px-4 py-3 m-2 rounded-lg text-black 
                        hover:bg-black hover:text-yellow-400 transition"
          >
            Blockchain
          </p>

          <p
            className="px-4 py-3 m-2 rounded-lg text-black 
                        hover:bg-black hover:text-yellow-400 transition"
          >
            Machine Learning
          </p>

          <p
            className="px-4 py-3 m-2 rounded-lg text-black 
                        hover:bg-black hover:text-yellow-400 transition"
          >
            AI & Data Science
          </p>
        </div>
      )}
    </li>
  );
};

export default CatalogDropdown;
