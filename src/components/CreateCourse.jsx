import React, { useState } from "react";

const CreateCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const [overview, setOverview] = useState("");
  const [sections, setSections] = useState([{ title: "", lectures: "" }]);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const finalPrice = price - (price * discount) / 100;

  const handleAddSection = () => {
    setSections([...sections, { title: "", lectures: "" }]);
  };

  const handleSectionChange = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };

  const handlePreview = () => {
    const courseData = {
      courseTitle,
      category,
      overview,
      sections,
      price,
      discount,
      finalPrice,
    };
    console.log("Preview Course:", courseData);
    alert("Check console for course preview!");
  };

  const handleAddCourse = () => {
    const courseData = {
      courseTitle,
      category,
      overview,
      sections,
      price,
      discount,
      finalPrice,
    };

    // Example: yaha aap backend API call kar sakte ho
    console.log("Course Added:", courseData);
    alert("Course Added Successfully!");
    
    // Reset form (optional)
    setCourseTitle("");
    setCategory("");
    setOverview("");
    setSections([{ title: "", lectures: "" }]);
    setPrice(0);
    setDiscount(0);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg mt-6">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>

      {/* Course Title */}
      <input
        type="text"
        placeholder="Course Title"
        className="w-full p-3 rounded-md bg-gray-800 mb-4"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />

      {/* Select Category */}
      <select
        className="w-full p-3 rounded-md bg-gray-800 mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="web">Web Development</option>
        <option value="mobile">Mobile Development</option>
        <option value="data">Data Science</option>
        <option value="design">Design</option>
      </select>

      {/* Course Overview */}
      <textarea
        placeholder="Course Overview"
        className="w-full p-3 rounded-md bg-gray-800 mb-4"
        rows={4}
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
      />

      {/* Course Sections */}
      <h2 className="text-lg font-semibold mb-2">Course Sections</h2>
      {sections.map((section, idx) => (
        <div key={idx} className="flex gap-3 mb-2">
          <input
            type="text"
            placeholder="Section Title"
            className="flex-1 p-2 rounded-md bg-gray-800"
            value={section.title}
            onChange={(e) =>
              handleSectionChange(idx, "title", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Lectures (comma separated)"
            className="flex-1 p-2 rounded-md bg-gray-800"
            value={section.lectures}
            onChange={(e) =>
              handleSectionChange(idx, "lectures", e.target.value)
            }
          />
        </div>
      ))}
      <button
        onClick={handleAddSection}
        className="bg-green-500 px-4 py-2 rounded-md mb-4 hover:bg-green-600"
      >
        Add Section
      </button>

      {/* Price */}
      <input
        type="number"
        placeholder="Course Price (₹)"
        className="w-full p-3 rounded-md bg-gray-800 mb-4"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      {/* Discount */}
      <input
        type="number"
        placeholder="Discount (%)"
        className="w-full p-3 rounded-md bg-gray-800 mb-2"
        value={discount}
        onChange={(e) => setDiscount(Number(e.target.value))}
      />

      {/* Final Price */}
      <p className="mb-4 font-semibold text-green-400">
        Final Price: ₹ {finalPrice}
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handlePreview}
          className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Preview
        </button>

        <button
          onClick={handleAddCourse}
          className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500"
        >
          Add Course
        </button>
      </div>
    </div>
  );
};

export default CreateCourse;
