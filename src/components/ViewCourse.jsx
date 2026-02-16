import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const handleEdit = (courseId) => {
  navigate(`/becomeanInstructor/edit-course/${courseId}`);
};

const handleDelete = async (courseId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this course?"
  );

  if (!confirmDelete) return;

  try {
    const res = await fetch(
      `http://localhost:5000/api/courses/delete/${courseId}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Delete failed");
    }

    // UI se remove
    setCourses((prev) =>
      prev.filter((course) => course._id !== courseId)
    );

    alert("Course deleted successfully");
  } catch (error) {
    alert(error.message);
  }
};


  // 🔹 GET courses
  const getCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/courses/get");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching courses", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading courses...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-6">
        Your Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-gray-900 text-white rounded-lg shadow-lg p-4"
          >
            {/* Thumbnail */}
            
            <img
              src={course.Course_Thumbnail}
              alt="thumbnail"
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            {/* Info */}
            <h2 className="text-lg font-semibold">
              {course.Course_Title}
            </h2>

            <p className="text-sm text-gray-300 mt-1">
              {course.Course_Overview}
            </p>

            <p className="mt-2 text-yellow-400 font-semibold">
              ₹ {course.Course_Price}
            </p>

            {/* Buttons */}

             {/* Buttons Section */}
<div className="mt-4 space-y-3">

  {/* 1️⃣ Add Lecture - single button */}
  <div className="flex gap-2">
    <button
    onClick={() => navigate(`/becomeaninstructor/add-lecture/${course._id}`)}
    className="bg-green-500 w-full py-2 rounded-md"
  >
    Add Lecture
  </button>
  <button
    onClick={() => navigate(`/becomeaninstructor/show-lectures/${course._id}`)}
    className="bg-green-500 w-full py-2 rounded-md"
  >
    show Lecture
  </button>
  </div>
  

  {/* 2️⃣ Draft | Publish - side by side */}
  {/* <div className="flex gap-2">
    <button
      onClick={() => alert("Course Draft")}
      className="bg-yellow-400 text-black w-1/2 py-2 rounded-md"
    >
      Draft
    </button>

    <button
      onClick={() => alert("Course Published")}
      className="bg-yellow-400 text-black w-1/2 py-2 rounded-md"
    >
      Publish
    </button>
  </div> */}

  {/* 3️⃣ Edit | Delete - side by side */}
  <div className="flex gap-2">
    <button
      onClick={() => handleEdit(course._id)}
      className="bg-blue-500 w-1/2 py-2 rounded-md"
    >
      Edit
    </button>

    <button
      onClick={() => handleDelete(course._id)}
      className="bg-red-500 w-1/2 py-2 rounded-md"
    >
      Delete
    </button>
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCourse;
