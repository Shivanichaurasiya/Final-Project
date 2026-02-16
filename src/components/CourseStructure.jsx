import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const CourseStructure = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [sectionTitle, setSectionTitle] = useState("");
  const [lectureTitle, setLectureTitle] = useState("");

  const handleAddCourse = () => {
    navigate("/becomeanInstructor/course-final-preview", {
      state: {
        ...state, // previous course data
        sections: [
          {
            sectionTitle,
            lectures: [lectureTitle],
          },
        ],
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-gray-900 p-6 rounded-lg text-white">
      <h1 className="text-2xl font-bold mb-4">Add Section & Lecture</h1>

      <input
        type="text"
        placeholder="Section Title"
        className="w-full p-3 mb-4 rounded bg-gray-800"
        value={sectionTitle}
        onChange={(e) => setSectionTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Lecture Title"
        className="w-full p-3 mb-6 rounded bg-gray-800"
        value={lectureTitle}
        onChange={(e) => setLectureTitle(e.target.value)}
      />

      <button
        onClick={handleAddCourse}
        className="bg-yellow-400 text-black px-6 py-3 rounded-md"
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseStructure;
