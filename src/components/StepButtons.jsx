import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../redux/course/courseSlice";
import { createCourse } from "../redux/course/courseSlice";



// const { courseId } = useParams();
// const dispatch = useDispatch();

// const handlePublish = () => {
//   dispatch(publishCourse(courseId));
// };

const StepButtons = ({ courseId }) => {
  const dispatch = useDispatch();
  const { step, course, sections, pricing } = useSelector(
    (state) => state.courses
  );

  // const handlePublish = () => {
  //   dispatch(
  //     createCourse({
  //       ...course,
  //       sections,
  //       price: pricing.price,
  //       discount: pricing.discount,
  //     })
  //   );
  // };

  return (
    <div className="flex justify-between mt-8">

      {step > 1 && (
        <button
          onClick={() => dispatch(prevStep())}
          className="px-6 py-2 bg-gray-700 rounded"
        >
          Back
        </button>
      )}

      {step < 2 && (
        <button
          onClick={() => dispatch(nextStep())}
          className="px-6 py-2 bg-teal-500 rounded"
        >
          Next
        </button>
      )}

      {step === 2 && (
        <button
          onClick={() => dispatch(createCourse())}
          className="px-6 py-2 bg-green-500 rounded"
        >
          Create Course
        </button>
      )}

    </div>
  );
};

export default StepButtons;