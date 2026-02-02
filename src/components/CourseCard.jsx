import React from "react";

const CourseCard = ({
  image,
  courseName,
  instructor,
  price,
  onEnroll,
  onView,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">

      <img
        src={image}
        alt={courseName}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{courseName}</h3>

        <p className="text-sm text-gray-500 mt-1">
          Instructor: <span className="font-medium">{instructor}</span>
        </p>

        <p className="text-lg font-bold text-green-600 mt-2">
          ₹ {price}
        </p>

        <div className="flex gap-3 mt-4">
          <button
            onClick={onEnroll}
            className="flex-1 bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-500"
          >
            Enroll Now
          </button>

          <button
            onClick={onView}
            className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100"
          >
            View Details
          </button>
        </div>
      </div>

    </div>
  );
};

export default CourseCard;
