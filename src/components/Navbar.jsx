
import logo from '../assets/Logo/Logo-Full-Light.png'
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


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
   const navigate =useNavigate();


    const isLoggedIn = !!localStorage.getItem("token");



 const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(); // 🔑 force navbar refresh
  };

  return (
    <div className=" w-full sticky top-0 bg-gray-800/70 text-white z-50 ">
      <div className="flex justify-between items-center  h-14 shadow-sm shadow-gray-600 xl:px-20 md:px-10 sm:px-5 px-2">
        <div className="text-2xl font-bold  ">
            <img src={logo} alt="logo" className="h-8"  onClick={() => navigate("/")}/>
        </div>

        <ul className="flex gap-8 font-semibold ">
          {/* <li className='hover:text-teal-400'> <a href="/">Home</a></li> */}

          <NavLink to="/" className={({isActive})=>
            `text-lg font-medium cursor-pointer ${
                isActive ? "text-yellow-400" : "text-[#DBDDEA]" 
            } hover:text-yellow-500`
            
            }> Home </NavLink>
          {/* <li className='hover:text-teal-400'> <a href="/about">About</a></li> */}

           <NavLink to="/about" className={({isActive})=>
            `text-lg font-medium cursor-pointer ${
                isActive ? "text-yellow-400" : "text-[#DBDDEA]" 
            } hover:text-yellow-500`
            
            }> About </NavLink>
           <div className="relative">
          
           <NavLink to="/" onClick={() => setOpen(!open)} className={({isActive})=>
            `text-lg font-medium cursor-pointer ${
                isActive ? "text-yellow-400" : "text-[#DBDDEA]" 
            } hover:text-yellow-500`
            
            }> Courses </NavLink>
            <span className="text-xs hover:text-yellow-500">▼</span>

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
          {/* <li className='hover:text-teal-400'><a href="/contact">Contact</a></li> */}
           <NavLink to="/contact" className={({isActive})=>
            `text-lg font-medium cursor-pointer ${
                isActive ? "text-yellow-400" : "text-[#DBDDEA]" 
            } hover:text-yellow-500`
            
            }> Contact </NavLink>
        </ul>

        <div className="flex gap-8 font-semibold">

          {/* Buttons */}

      <div className='flex flex-wrap justify-center sm:justify-end gap-3 w-full sm:w-auto'>
        
        {!isLoggedIn ? (
          <>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
              }`
            }
          >
            Signup
          </NavLink> 

           <NavLink to="/login" className={({isActive})=>
        `px-4 py-2 rounded-md ${
            isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
        }`
        }>
            Login
        </NavLink>
        
          <NavLink
            to="/becomeanInstructor/signup"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
              }`
            }
          >
            Become an Istructor
          </NavLink>
          </>
        ): (
          <>
          <NavLink to="/mybatch" className={({isActive})=>
        `px-4 py-2 rounded-md ${
            isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
        }`
        }>
            MyBatch
        </NavLink>

        <button onClick={handleLogout}
        className="px-4 py-2 rounded-md bg-red-500">Logout</button>
          
          </>

        )}

      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;  

