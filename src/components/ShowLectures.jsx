
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowLectures = () => {
  const { courseId } = useParams();

  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/lectures/course/${courseId}`
        );

        const data = await res.json();
         console.log("FULL API RESPONSE 👉", data);
    console.log("LECTURES ARRAY 👉", data.lectures);

        setLectures(data.lectures || []);
      } catch (error) {
        console.error("Error fetching lectures", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLectures();
  }, [courseId]);

  if (loading) {
    return (
      <p className="text-white text-center mt-10">
        Loading lectures...
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">
        Course Lectures
      </h2>

      {lectures.length === 0 ? (
        <p className="text-gray-400 text-center">
          No lecture added yet
        </p>
      ) : (
        <div className="space-y-6">
          {lectures.map((lecture, index) => (
            <div
              key={lecture._id}
              className="bg-gray-900 p-5 rounded-lg shadow-md"
            >
              {/* Lecture Title */}
              <h3 className="text-lg font-semibold mb-1">
                {index + 1}. {lecture.lectureTitle}
              </h3>

              {/* Section */}
              <p className="text-sm text-gray-400 mb-2">
                Section: {lecture.sectionTitle}
              </p>

              {/* Duration */}
              <p className="text-sm mb-2">
                Duration: {lecture.duration} minutes
              </p>

              {/* Preview Badge */}
              {lecture.isPreview && (
                <span className="inline-block text-xs bg-green-600 px-2 py-1 rounded mb-3">
                  Free Preview
                </span>
              )}
              <div className="flex justify-between items-center mb-6">
  <h2 className="text-2xl font-bold">Course Lectures</h2>

  <button
    onClick={() =>
      navigate(`/becomeaninstructor/add-lecture/${courseId}`)
    }
    className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
  >
    + Add Lecture
  </button>
</div>


              {/* 🎥 VIDEO PLAYER */}
              {lecture.videoUrl ? (
                <video
                  src={lecture.videoUrl}
                  controls
                  preload="metadata"
                  className="w-full mt-3 h-50 w-100 rounded-md"
                />
              ) : (
                <p className="text-red-400 text-sm mt-3">
                  Video not available
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowLectures;

