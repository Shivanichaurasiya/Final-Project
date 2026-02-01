import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signupimg from "../assets/signupimg.webp";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupInstructor = () => {
  const navigate = useNavigate();

  const firstNameRef = useRef(null);
  const scaleRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio:"",
    avtarUrl:"",
    qualification:"",
    experience:"",
    expertise:""

  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowImage(true);
      },
      { threshold: 0.3 },
    );
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

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
    const res = await fetch("http://localhost:5000/api/signup/instrutor",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
       body:JSON.stringify(formData)
    })
    const data = await res.json();
    if(res.ok){
      alert("instructor signup success full")
      navigate('/becomeanInstructor/login')
    }
    else{
      alert(data.message || "Signup failed")
    }
    
    if (!validate()) return;
    console.log("Signup data:", formData, role);
  };
  return (
    <div>
      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-7">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT FORM */}
          <div className="text-white w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
              Signp for Instructor
            </h1>

            {/* <p className="text-gray-400 mb-2 leading-relaxed">
              <span className="block text-xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent">
               Signup for Instructor
              </span>
            </p> */}

            <form onSubmit={submitHandler} className="space-y-4">
              {/* NAME */}
              <div >
                <div>
                  <input
                    ref={firstNameRef}
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>

               
              </div>

              {/* EMAIL */}
              <div>
                
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
              <div>
                <div className="relative">
                  
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
                    className="absolute right-3 top-[20px] cursor-pointer text-gray-400 hover:text-yellow-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>

                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                </div>
                
              </div>

              {/* Bio */}

              <textarea placeholder="Bio"
              name="bio"
              value={formData.bio}
              onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
              >Bio</textarea>

              {/*Avtar url  */}

              <div>
                <div className="relative">
                 
                  <input
                    type="text"
                    placeholder="Avtar URL"
                    name="avtarUrl"
                    value={formData.avtarUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, avtarUrl: e.target.value })
                    }
                    className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
                  />
                  
                </div>
                
              </div>

              {/* qulification */}

              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Qualification"
                    name="qulification"
                    value={formData.qualification}
                    onChange={(e) =>
                      setFormData({ ...formData, qualification: e.target.value })
                    }
                    className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
                  />
                </div>
              </div>

               {/* Experience */}

              <div>
                <div className="relative">
                  
                  <input
                    type="text"
                    placeholder="Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
                  />
                </div>
              </div>



              {/* Expertiese */}

              <div>
                <div className="relative">
                  
                  <input
                    type="text"
                    placeholder="Expertise (comma seprated)"
                    name="expertise"
                    value={formData.expertise}
                    onChange={(e) =>
                      setFormData({ ...formData, expertise: e.target.value })
                    }
                    className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
                  />
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
            className={`flex-shrink-0 transition-all ml-30 duration-500 ease-out
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
    </div>
  );
};

export default SignupInstructor;
