import { useSelector } from "react-redux";
import React from "react";


const PreviewCourse = () => {
  const { course, sections, pricing } = useSelector(
    (state) => state.courses
  );

  return (
    <div className="space-y-4">

      <h2 className="text-xl font-bold">{course.title}</h2>
      <p className="text-gray-400">{course.overview}</p>

      <div>
        <h3 className="font-semibold">Course Content</h3>
        {sections.map((sec, i) => (
          <div key={i}>
            <p>📁 {sec.title} ({sec.lectures.length} lectures)</p>
          </div>
        ))}
      </div>

      <div className="text-lg text-teal-400">
        Price: ₹{pricing.price}
      </div>

    </div>
  );
};

export default PreviewCourse;