import {useRef,useState} from 'react';

const ContactForm = ()=>{
    const firstNameRef = useRef(null);
    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:"",
    });

    const[errors,setError] = useState({});

    const handleChange =(e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
        setError({...errors,[e.target.name]:""})
    }
    const validate=()=>{
        const newErrors ={};

        if(!formData.firstName.trim()){
            newErrors.firstName = "first name is required";

        }

        if(!formData.email.trim()){
            newErrors.email = "Email is required";

        }else if(!/^\S+@\S+\.\S+$/.test(formData.email)){
            newErrors.email = "Enter a valid email"

        }
        if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if(!formData.message.trim()){
        newErrors.message = "Message is required"
    }

    return newErrors;

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const validationErrors= validate();

        if(Object.keys(validationErrors).length>0){
            setError(validationErrors);

            if(validationErrors.firstName){
                firstNameRef.current.focus();

            }
            return;
        }
        console.log("Form submitted",formData)
    }
    return(
        <div className='bg-[#020617] py-24 px-24'>
            <div className='max-w-xl mx-auto text-center'>
                <h2 className='text-3xl font-bold text-white'>Get in Touch</h2>
                <p className='mt-2 text-gray-400'>We’d love to hear from you. Please fill out this form.</p>
            </div>

            <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-xl mx-auto space-y-6"
      >
        {/* NAME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-300">First Name</label>
            <input
              ref={firstNameRef}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-2 w-full rounded-md bg-[#1E293B] px-4 py-3 text-white
              outline-none focus:ring-2 ${
                errors.firstName ? "ring-red-500" : "focus:ring-cyan-400"
              }`}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="text-gray-300">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 w-full rounded-md bg-[#1E293B] px-4 py-3 text-white
              outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-2 w-full rounded-md bg-[#1E293B] px-4 py-3 text-white
            outline-none focus:ring-2 ${
              errors.email ? "ring-red-500" : "focus:ring-cyan-400"
            }`}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <label className="text-gray-300">Phone Number</label>
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
                errors.phone ? "ring-red-500" : "focus:ring-cyan-400"
              }`}
              placeholder="Phone Number"
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-gray-300">Message</label>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`mt-2 w-full rounded-md bg-[#1E293B] px-4 py-3 text-white
            outline-none focus:ring-2 ${
              errors.message ? "ring-red-500" : "focus:ring-cyan-400"
            }`}
            placeholder="Enter message"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full rounded-md bg-yellow-400 py-3
  text-lg font-semibold text-black
  transition-transform duration-300
  hover:scale-105 hover:bg-yellow-300 active:scale-95"
        >
          Send Message
        </button>
      </form>
        </div>
    )

}

export default ContactForm