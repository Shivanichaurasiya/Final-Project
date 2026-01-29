import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signupimg from "../assets/signupimg.webp";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Signup = () => {
  const navigate = useNavigate();

  const firstNameRef = useRef(null);
  const scaleRef = useRef(null);

  const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: ""
});


const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);
const [showImage, setShowImage] = useState(false);
const imageRef = useRef(null);

  const [errors, setErrors] = useState({});

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        
          setShowImage(true);
        
      },
      {threshold:0.3}
    );
    if(imageRef.current){
      observer.observe(imageRef.current);
    }
    return()=>{
      if(imageRef.current){
        observer.unobserve(imageRef.current)
      }
    }
  },[]);

  const validate = () => {

    
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      firstNameRef.current.focus();
    }
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter valid email";

    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10 digit phone number";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Min 6 characters";

    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async(e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    })
    const data = await res.json();
    if(res.ok){
      alert("signup successfull");
      navigate("/login");
    }
    else{
      alert(data.message || "Signup failed")
    }
    if (!validate()) return;
    console.log("Signup data:", formData, role);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT FORM */}
        <div className="text-white w-full">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
            Join the millions learning to code with StudyNotion for free
          </h1>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Build skills for today, tomorrow, and beyond.
            <span className="block text-lg font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent">
              Education to future-proof your career.
            </span>
          </p>

          

          <form onSubmit={submitHandler} className="space-y-4">

            {/* NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400">First Name</label>
                <input
                  ref={firstNameRef}
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={(e) =>
                    setFormData({ ...formData, first_name: e.target.value })
                  }
                  className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs">{errors.first_name}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-400">Last Name</label>

                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  
                  value={formData.last_name}
                  onChange={(e) =>
                    setFormData({ ...formData, last_name: e.target.value })
                  }
                  className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs">{errors.last_name}</p>
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            

            {/* PASSWORD */}
            <div className="flex gap-4 justify-between items-start">
              <div className="relative">
                <label className="text-sm text-gray-400">Password</label>
                <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
              />
               <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-[38px] cursor-pointer text-gray-400 hover:text-yellow-400"
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
              
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
              </div>

              {/* CONFIRM PASSWORD */}
            <div className="relative">
              <label className="text-sm text-gray-400">Confirm Password</label>
              
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={(e) =>
                  setFormData({ ...formData, confirm_password: e.target.value })
                }
                className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
              />

               <span
    onClick={() => setShowConfirm(!showConfirm)}
    className="absolute right-3 top-[38px] cursor-pointer text-gray-400 hover:text-yellow-400"
  >
    {showConfirm ? <FaEyeSlash /> : <FaEye />}
  </span>
              {errors.confirm_password && (
                <p className="text-red-500 text-xs">
                  {errors.confirm_password}
                </p>
              )}
            
            </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold hover:scale-105 transition"
            >
              Create Account
            </button>

            <p className="text-center text-gray-400 mt-4">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-yellow-400 font-semibold hover:underline"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div
  ref={imageRef}
  className={`flex-shrink-0 transition-all duration-500 ease-out
  ${showImage ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
>

          <img
            src={signupimg}
            alt="signup"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
