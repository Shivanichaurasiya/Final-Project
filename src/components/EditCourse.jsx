import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const [overview, setOverview] = useState("");
  const [section, setSection] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [oldThumbnail, setOldThumbnail] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const finalPrice =
    price && discount
      ? Number(price) - (Number(price) * Number(discount)) / 100
      : price || 0;

  // 🔹 GET COURSE
  useEffect(() => {
    const getCourse = async () => {
      const res = await fetch(
        `http://localhost:5000/api/courses/get/${id}`
      );
      const data = await res.json();

      setCourseTitle(data.Course_Title);
      setCategory(data.Select_Category);
      setOverview(data.Course_Overview);
      setSection(data.Course_Section);
      setPrice(data.Course_Price);
      setDiscount(data.Course_Discount || 0);
      setOldThumbnail(data.Course_Thumbnail);
    };
    getCourse();
  }, [id]);

  // 🔹 UPDATE COURSE
  const handleUpdate = async () => {
    try {
      const formData = new FormData();

      formData.append("Course_Title", courseTitle);
      formData.append("Select_Category", category);
      formData.append("Course_Overview", overview);
      formData.append("Course_Section", section);
      formData.append("Course_Price", price);
      formData.append("Course_Discount", discount);

      if (thumbnail) {
        formData.append("Course_Thumbnail", thumbnail);
      }

      const res = await fetch(
        `http://localhost:5000/api/courses/update/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Course updated successfully");
      navigate("/becomeanInstructor/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  // 🔹 DELETE
  const handleDelete = async () => {
    if (!window.confirm("Delete this course?")) return;

    await fetch(
      `http://localhost:5000/api/courses/delete/${id}`,
      { method: "DELETE" }
    );

    alert("Course deleted");
    navigate("/becomeanInstructor/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg mt-6">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>

      {!isPreview ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsPreview(true);
          }}
        >
          <input
            className="w-full p-3 bg-gray-800 mb-4"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Course Title"
          />

          <select
            className="w-full p-3 bg-gray-800 mb-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
            <option value="data">Data</option>
          </select>

          <textarea
            className="w-full p-3 bg-gray-800 mb-4"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            placeholder="Overview"
          />

          <input
            className="w-full p-3 bg-gray-800 mb-4"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="Section"
          />

          <input
            type="file"
            className="w-full p-3 bg-gray-800 mb-4"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />

          <input
            type="number"
            className="w-full p-3 bg-gray-800 mb-4"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />

          <input
            type="number"
            className="w-full p-3 bg-gray-800 mb-4"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Discount"
          />

          <p className="text-green-400 mb-4">
            Final Price: ₹{finalPrice}
          </p>

          <button className="bg-blue-500 px-6 py-2 rounded">
            Preview
          </button>
        </form>
      ) : (
        <div className="bg-gray-800 p-6 rounded">
          <h2 className="text-xl font-bold">Title : {courseTitle}</h2>
          <p>Overview : {overview}</p>
          <p>Section : {section}</p>
          <p>Category : {category}</p>
          
          <p>Price : {price}</p>

          <img
            src={
              thumbnail
                ? URL.createObjectURL(thumbnail)
                : `http://localhost:5000/${oldThumbnail}`
            }
            className="h-40 w-full object-cover my-4"
          />

          <div className="flex gap-4">
            <button
              onClick={() => setIsPreview(false)}
              className="bg-gray-600 px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleUpdate}
              className="bg-yellow-400 text-black px-4 py-2 rounded"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCourse;
