import React from 'react'
import logo from '../assets/Logo/Logo-Full-Light.png'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const InstrucNavbar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-14 px-10 shadow-sm shadow-gray-600">
        
        {/* Logo */}
        <div className='text-2xl font-bold'>
          <img
            src={logo}
            className='h-8 cursor-pointer'
            alt="logo"
            onClick={() => navigate("/")}
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
         
        </ul>

      </div>
    </div>
  )
}

export default InstrucNavbar
