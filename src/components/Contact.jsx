import { useRef, useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

import Review from "./Review";



const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const refs = {
    firstName: useRef(),
    lastName: useRef(),
    email: useRef(),
    phone: useRef(),
    message: useRef(),
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10 digit number";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    // auto focus first error
    const firstErrorKey = Object.keys(newErrors)[0];
    if (firstErrorKey) refs[firstErrorKey].current.focus();

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Message sent successfully 🚀");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#020617] px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT INFO BOX */}
        <div
          className="
    bg-[#111827]
    border border-gray-700
    rounded-3xl
    p-6
    mt-25
    w-[400px]
    h-[320px]
    transition-all duration-300
    hover:scale-105
    hover:shadow-2xl
    hover:border-cyan-400
    space-y-6
  "
        >
          <Info
            title="💬 Chat with us"
            text="Our friendly team is here to help."
          />
          <Info
            title="📍 Visit us"
            text="Come and say hello at our office HQ."
          />
          <Info
            title="📞 Call us"
            text="Mon–Fri from 8am to 5pm · +123 456 7890"
          />
        </div>

        {/* RIGHT FORM */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Got a Idea? We've got the skills. Let's team up
          </h2>
          <p className="text-gray-400 mb-8 px-12">
            Tell us more about yourself and what you're got in mind.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 text-white p-8 rounded-2xl w-full max-w-2xl shadow-lg border border-gray-700"
          >
            {/* Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400">
                  First Name
                </label>
                <Input
                  refEl={refs.firstName}
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  error={errors.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 ">
                  Last Name
                </label>
                <Input
                  refEl={refs.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  error={errors.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm pt-2 text-gray-400 ">Email</label>
              <Input
                refEl={refs.email}
                name="email"
                placeholder="Email"
                value={formData.email}
                error={errors.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm pt-2 text-gray-400 ">
                Phone Number
              </label>
              <div className="flex gap-2 mt-2">
                <select className="bg-[#1E293B] text-white px-3 rounded-md">
                  <option>+91</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`flex-1 rounded-md bg-[#1E293B] px-4 py-3 text-white
              outline-none focus:ring-2 ${
                errors.phone ? "ring-red-500" : "focus:white"
              }`}
                  placeholder="Phone Number"
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="blocktext-sm pt-3 text-gray-400">Message</label>
              <Textarea
                refEl={refs.message}
                name="message"
                placeholder="Enter message"
                value={formData.message}
                error={errors.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-yellow-400 py-3 text-lg font-semibold
              text-black transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Review/>
    </div>
  );
};

export default Contact;

/* COMPONENTS */

const Info = ({ title, text }) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-400">{text}</p>
  </div>
);

const Input = ({ refEl, name, placeholder, value, error, onChange }) => (
  <div>
    <input
      ref={refEl}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input mt-2 w-full rounded-md bg-[#1E293B] px-4 py-3 text-white
              outline-none focus:ring-2 ${error ? "border-red-500" : ""}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const Textarea = ({ refEl, name, placeholder, value, error, onChange }) => (
  <div>
    <textarea
      ref={refEl}
      name={name}
      rows="5"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input resize-none mt-2 w-full rounded-md bg-[#1E293B] px-4 py-3 text-white
              outline-none focus:ring-2 ${error ? "border-red-500" : ""}`}
    ></textarea>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
