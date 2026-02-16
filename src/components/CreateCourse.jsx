import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();

  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const [overview, setOverview] = useState("");
  const [section, setSection] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const finalPrice =
    price && discount
      ? Number(price) - (Number(price) * Number(discount)) / 100
      : price || 0;

  const handleSubmit = async () => {
    try {
       const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login again");
        return;
      }
      if (!thumbnail) {
        alert("Please select a thumbnail");
        return;
      }

      const formData = new FormData();

      // 🔑 keys MUST match backend
      formData.append("Course_Title", courseTitle);
      formData.append("Select_Category", category);
      formData.append("Course_Overview", overview);
      formData.append("Course_Section", section);
      formData.append("Course_Price", price);
       // temporary
      formData.append("Course_Thumbnail", thumbnail); // multer key

      const res = await fetch("http://localhost:5000/api/course/create", {
        method: "POST",
        headers:{
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      console.log("Backend Response:", data);
//       const text = await res.text();
// console.log("RAW RESPONSE:", text);

      if (!res.ok) {
        throw new Error(data.message || "Course creation failed");
      }
      alert("your course is created successfully")

      // console.log("Course Created:", data);
      navigate("/becomeanInstructor/view-course");
    } catch (error) {
      console.error("Create course error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg mt-6">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>

      {!isPreview ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsPreview(true);
          }}
        >
          {/* Course Title */}
          <input
            type="text"
            placeholder="Course Title"
            className="w-full p-3 rounded-md bg-gray-800 mb-4"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            required
          />

          {/* Category */}
          <select
            className="w-full p-3 rounded-md bg-gray-800 mb-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="data">Data Science</option>
            <option value="design">Design</option>
          </select>

          {/* Overview */}
          <textarea
            placeholder="Course Overview"
            className="w-full p-3 rounded-md bg-gray-800 mb-4"
            rows={4}
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />

          section

           <input
            type="text"
            placeholder="section"
            className="w-full p-3 rounded-md bg-gray-800 mb-4"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />

          {/* Thumbnail */}
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 flex rounded-md bg-gray-800 mb-4"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setThumbnail(e.target.files[0]);
              }
            }}
            required
          />

          {/* Price */}
          <input
            type="number"
            placeholder="Course Price (₹)"
            className="w-full p-3 rounded-md bg-gray-800 mb-4"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          {/* Discount */}
          <input
            type="number"
            placeholder="Discount (%)"
            className="w-full p-3 rounded-md bg-gray-800 mb-4"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />

          <p className="mb-4 font-semibold text-green-400">
            Final Price: ₹ {finalPrice}
          </p>

          <button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-md"
          >
            Preview
          </button>
        </form>
      ) : (
        /* PREVIEW MODE */
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{courseTitle}</h2>
          <p className="text-gray-300 mb-2">{overview}</p>
          <p>Category: {category.name}</p>
          <p>{JSON.stringify(section)}</p>
          <p>Price: ₹{price}</p>
          <p>Discount: {discount}%</p>
          <p className="text-green-400 font-semibold mb-4">
            Final Price: ₹{finalPrice}
          </p>

          {thumbnail && (
            <img
              src={URL.createObjectURL(thumbnail)}
              alt="Course Thumbnail"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}

          <div className="flex gap-4">
            <button
              onClick={() => setIsPreview(false)}
              className="bg-gray-600 px-4 py-2 rounded-md"
            >
              Edit
            </button>

            <button
              onClick={handleSubmit}
              className="bg-yellow-400 text-black px-6 py-2 rounded-md"
            >
              Create Course
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCourse;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CreateCourse = () => {
//   const navigate = useNavigate();

//   const [courseTitle, setCourseTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [overview, setOverview] = useState("");
//   const [section, setSection] = useState("");
//   const [thumbnail, setThumbnail] = useState(null);
//   const [price, setPrice] = useState("");
//   const [discount, setDiscount] = useState("");
//   const [isPreview, setIsPreview] = useState(false);

//   const finalPrice =
//     price && discount
//       ? Number(price) - (Number(price) * Number(discount)) / 100
//       : price || 0;

//   const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please login again");
//         return;
//       }

//       if (!thumbnail) {
//         alert("Please select thumbnail");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("Course_Title", courseTitle);
//       formData.append("Select_Category", category);
//       formData.append("Course_Overview", overview);
//       formData.append("Course_Section", section);
//       formData.append("Course_Price", price);
//       formData.append("Course_Thumbnail", thumbnail);

//      const res = await fetch("http://localhost:5000/api/course/create", {
//   method: "POST",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//   body: formData,
// });

// const contentType = res.headers.get("content-type");

// // 🔥 SAFETY CHECK
// if (!contentType || !contentType.includes("application/json")) {
//   const raw = await res.text();
//   console.error("NON JSON RESPONSE 👇", raw);
//   throw new Error("Backend did not return JSON");
// }

// const data = await res.json();

// if (!res.ok) {
//   throw new Error(data.message || "Course creation failed");
// }

//       alert("Course created successfully 🎉");
//       navigate("/becomeanInstructor/dashboard");

//     } catch (error) {
//       console.error("Create course error:", error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg mt-6">
//       <h1 className="text-2xl font-bold mb-6">Create New Course</h1>

//       {!isPreview ? (
//         <form onSubmit={(e) => { e.preventDefault(); setIsPreview(true); }}>
//           <input
//             type="text"
//             placeholder="Course Title"
//             className="w-full p-3 rounded-md bg-gray-800 mb-4"
//             value={courseTitle}
//             onChange={(e) => setCourseTitle(e.target.value)}
//             required
//           />

//           <select
//             className="w-full p-3 rounded-md bg-gray-800 mb-4"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="web">Web Development</option>
//             <option value="data">Data Science</option>
//             <option value="design">Design</option>
//           </select>

//           <textarea
//             placeholder="Course Overview"
//             className="w-full p-3 rounded-md bg-gray-800 mb-4"
//             value={overview}
//             onChange={(e) => setOverview(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Section"
//             className="w-full p-3 rounded-md bg-gray-800 mb-4"
//             value={section}
//             onChange={(e) => setSection(e.target.value)}
//             required
//           />

//           <input
//             type="file"
//             accept="image/*"
//             className="w-full p-3 rounded-md bg-gray-800 mb-4"
//             onChange={(e) => setThumbnail(e.target.files[0])}
//             required
//           />

//           <input
//             type="number"
//             placeholder="Price"
//             className="w-full p-3 rounded-md bg-gray-800 mb-4"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />

//           <input
//             type="number"
//             placeholder="Discount (%)"
//             className="w-full p-3 rounded-md bg-gray-800 mb-4"
//             value={discount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />

//           <p className="text-green-400 mb-4">Final Price: ₹{finalPrice}</p>

//           <button className="bg-blue-500 px-6 py-3 rounded-md">
//             Preview
//           </button>
//         </form>
//       ) : (
//         <div className="bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-xl font-bold">{courseTitle}</h2>
//           <p>{overview}</p>

//           <button
//             onClick={handleSubmit}
//             className="bg-yellow-400 text-black px-6 py-2 mt-4 rounded-md"
//           >
//             Create Course
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateCourse;
