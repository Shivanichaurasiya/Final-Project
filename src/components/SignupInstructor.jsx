
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signupimg from "../assets/signupimg.webp";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupInstructor = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);

  const [showImage, setShowImage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    avtarUrl: "",
    qualification: "",
    experience: "",
    expertise: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowImage(true);
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/signup/instructor",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Instructor signup successful");
        navigate("/becomeanInstructor/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-7">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT FORM */}
        <div className="text-white w-full">
          <h1 className="text-3xl font-semibold mb-6">
            Signup for Instructor
          </h1>

          <form onSubmit={submitHandler} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 cursor-pointer text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <textarea
              placeholder="Bio"
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
              rows="3"
            />

            <input
              type="text"
              placeholder="Avtar URL"
              value={formData.avtarUrl}
              name="avtarUrl"
              onChange={(e) =>
                setFormData({ ...formData, avtarUrl: e.target.value })
              }
              className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
            />

            <input
              type="text"
              placeholder="Qualification"
              value={formData.qualification}
              onChange={(e) =>
                setFormData({ ...formData, qualification: e.target.value })
              }
              className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
            />

            <input
              type="text"
              placeholder="Experience"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
              className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
            />

            <input
              type="text"
              placeholder="Expertise (comma separated)"
              value={formData.expertise}
              onChange={(e) =>
                setFormData({ ...formData, expertise: e.target.value })
              }
              className="w-full p-3 rounded-md bg-[#1e293b] outline-none"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold hover:scale-105 transition"
            >
              Create Account
            </button>

            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/becomeanInstructor/login")}
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
          className={`transition-all duration-500 ease-out
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

export default SignupInstructor;

