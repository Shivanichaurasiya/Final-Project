import React, { useState } from 'react'
import logo from '../assets/Logo/Logo-Full-Light.png'
import { NavLink, useNavigate } from "react-router-dom";

const InstrucNavbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");
  const userName = localStorage.getItem("name") || "U";
  const firstLetter = userName.charAt(0).toUpperCase();
  const [openProfile, setOpenProfile] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-14 px-10 shadow-sm shadow-gray-600">
        
        {/* Logo */}
        <div className='text-2xl font-bold'>
          <img
            src={logo}
            className='h-8 cursor-pointer'
            alt="logo"
            onClick={() => navigate("/becomeanInstructor/dashboard")}
          />
        </div>

        {/* Menu */}
        <ul className='flex gap-8 font-semibold'>
          
          <NavLink
            to="/becomeanInstructor/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/becomeanInstructor/newcourse"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
              }`
            }
          >
            Add new courses
          </NavLink>

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/becomeanInstructor/signup"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
                  }`
                }
              >
                Signup
              </NavLink>

              <NavLink
                to="/becomeanInstructor/login"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-yellow-400 text-black" : "text-white text-lg"
                  }`
                }
              >
                Login
              </NavLink>
            </>
          ) : (
            <>
              {/* 🔽 ONLY LOGIC ADDED – NO STYLE CHANGE */}
              <div className="relative">

                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="px-4 py-2 text-white text-lg font-semibold flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                    {firstLetter}
                  </div>
                  My Profile
                </button>

                {openProfile && (
                  <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg">

                    <NavLink
                      to="/becomeanInstructor/my-profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenProfile(false)}
                    >
                      My Account
                    </NavLink>

                    <NavLink
                      to="/becomeanInstructor/settings"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenProfile(false)}
                    >
                      Settings
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>

                  </div>
                )}
              </div>
              <button
                      onClick={handleLogout}
                      className="text-left text-lg   hover:text-red-600"
                    >
                      Logout
                    </button>

              
            </>
            
          )}
        </ul>
      </div>
    </div>
  );
};

export default InstrucNavbar;




