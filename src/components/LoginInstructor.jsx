import { useState, useRef ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginimg from "../assets/loginimg.webp";

export default function logininstructor() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const [showImage, setShowImage] = useState(false);
const imageRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowImage(true);
      }
    },
    { threshold: 0.3 }
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



  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      emailRef.current.focus();
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT FORM */}
        <div className="text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400 mb-8">
            Build skills for today, tomorrow, and beyond.
            <span className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent">
              {" "}
              Education to future-proof your career.
            </span>
          </p>

          <form onSubmit={submitHandler} className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="text-sm">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full mt-2 p-3 rounded-md bg-[#1e293b] outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type= "password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full mt-2 p-3 rounded-md bg-[#1e293b] outline-none"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-5 cursor-pointer text-yellow-400"
                >
                  {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold
                         hover:scale-105 transition-transform"
            >
              Sign in
            </button>

            <p className="text-right text-sm text-cyan-400 cursor-pointer">
              Forgot Password?
            </p>

            <div className="text-center text-gray-400">OR</div>

            <button
              type="button"
              className="w-full bg-yellow-400 text-black py-3 rounded-md
                         flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="google"
                className="w-5"
              />
              Sign in with Google
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div ref={imageRef}
  className={`hidden md:flex justify-center transform transition-all duration-500 ease-out
  ${showImage ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
          <img
            src={loginimg}
            alt="login"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
