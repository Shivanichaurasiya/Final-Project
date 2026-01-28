// import React from 'react'
// import { NavLink } from "react-router-dom";
// import DownloadLogo from "../assets/download.png";
// import CatalogDropdown from './CatalogDropdown';

// const Navbar = () => {
//   return (
//     <div className=" absolute w-[90%] bg-black mx-auto border-b border-[#2C333F]">
//       <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-y-4 py-3 text-sm text-white">

//         {/* Logo */}
//         <NavLink to="/" className="w-32 sm:w-40 px-5 flex items-center justify-center sm:justify-start">
//         <img src={DownloadLogo} alt="logo" className="w-full h-full object-contain"/>
//       </NavLink>
//       {/* Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-3xl px-4"
//         >
//           ☰
//         </button>

//       {/* links */}
//       <div className='hidden md:flex items-center justify-between w-ful'>
//         <ul className='flex flex-wrap justify-center sm:justify-start gap-6 text-[#DBDDEA] w-full sm:w-auto'>
//             <NavLink to="/" className={({isActive})=>
//             `text-lg font-medium cursor-pointer ${
//                 isActive ? "text-yellow-400" : "text-[#DBDDEA]" 
//             } hover:text-yellow-500`
            
//             }> Home </NavLink>
        
//         <CatalogDropdown/>

//         <NavLink to="/about" className={({isActive})=>
//         `text-lg font-medium cursor-pointer transiton-colors suration-200
//         ${isActive ? "text-yellow-400" : "text-[#DBDDEA] hover:text-yellow-300"}`
        
//         }> About </NavLink>

//         <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `text-lg font-medium cursor-pointer transition-colors duration-200
//      ${isActive ? "text-yellow-400" : "text-[#DBDDEA] hover:text-yellow-300"}`
//             }
//           >
//             Contact Us
//           </NavLink>
//       </ul>

      
//       </div>


//       {/* Buttons */}
//       <div className='flex flex-wrap justify-center sm:justify-end gap-3 w-full sm:w-auto'>
//         <NavLink to="/login" className={({isActive})=>
//         `px-4 py-2 rounded-md ${
//             isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
//         }`
//         }>
//             Login
//         </NavLink>
//         <NavLink
//             to="/signup"
//             className={({ isActive }) =>
//               `px-4 py-2 rounded-md ${
//                 isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
//               }`
//             }
//           >
//             Signup
//           </NavLink> 
//           <NavLink
//             to="/becomeanInstructor"
//             className={({ isActive }) =>
//               `px-4 py-2 rounded-md ${
//                 isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
//               }`
//             }
//           >
//             Become an Istructor
//           </NavLink>

//       </div>

//       </div>
      
//     </div>
//   )
// }

// export default Navbar;


import logo from '../assets/Logo/Logo-Full-Light.png'
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


// data/categories.js
export const categories = [
  { id: 1, name: "Web Development", slug: "web-development" },
  { id: 2, name: "Full Stack", slug: "full-stack" },
  { id: 3, name: "Machine Learning", slug: "machine-learning" },
  { id: 4, name: "Data Science", slug: "data-science" },
  { id: 5, name: "Algorithms", slug: "algorithms" },
  { id: 6, name: "UI/UX Design", slug: "ui-ux" },
];

const Navbar = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className=" w-full sticky top-0 bg-gray-800/70 text-white z-50 ">
      <div className="flex justify-between items-center  h-14 shadow-sm shadow-gray-600 xl:px-20 md:px-10 sm:px-5 px-2">
        <div className="text-2xl font-bold  ">
            <img src={logo} alt="logo" className="h-8" />
        </div>

        <ul className="flex gap-8 font-semibold ">
          <li className='hover:text-teal-400'> <a href="/">Home</a></li>
          <li className='hover:text-teal-400'> <a href="/about">About</a></li>
           <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 hover:text-teal-400"
          >
            Categories
            <span className="text-xs">▼</span>
          </button>

          {open && (
            <div className="absolute top-8 left-0 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-52 z-50">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
          <li className='hover:text-teal-400'><a href="/contact">Contact</a></li>
        </ul>

        <div className="flex gap-8 font-semibold">
          <button className=" hover:text-teal-400 ">Become Instructor</button>
          <button className=" hover:text-teal-400 "> <a href="/login">Login</a></button>
          <button className=" hover:text-teal-400 " > <a href="/signup">SignUp</a></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

