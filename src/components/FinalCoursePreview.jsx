import { useLocation, useNavigate } from "react-router-dom";

const FinalCoursePreview = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // safety check (direct URL open kare to crash na ho)
  if (!state) {
    return (
      <div className="text-white text-center mt-10">
        No course data found
      </div>
    );
  }

  const handleEdit = () => {
    navigate("/becomeanInstructor/course-builder", {
      state: state,
    });
  };

  const handleAddLecture = () => {
    navigate("/becomeanInstructor/course-builder", {
      state: state,
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-gray-900 p-6 rounded-lg text-white">
      <h1 className="text-2xl font-bold mb-4">{state.courseTitle}</h1>

      <p className="mb-2">{state.overview}</p>
      <p>Category: {state.category}</p>
      <p className="text-green-400 font-semibold">
        Final Price: ₹{state.finalPrice}
      </p>

      <hr className="my-4 border-gray-700" />

      <h2 className="text-xl font-semibold mb-2">Course Content</h2>

      {state.sections.map((sec, i) => (
        <div key={i} className="mb-4 bg-gray-800 p-4 rounded">
          <h3 className="font-bold">{sec.sectionTitle}</h3>
          <ul className="list-disc ml-6 mt-2">
            {sec.lectures.map((lec, j) => (
              <li key={j}>{lec}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleEdit}
          className="bg-gray-600 px-6 py-2 rounded-md hover:bg-gray-700"
        >
          Edit
        </button>

        {/* <button
          onClick={handleAddLecture}
          className="bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Add Lectures
        </button> */}
      </div>
    </div>
  );
};

export default FinalCoursePreview;
