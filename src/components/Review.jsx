import React from "react";

import { PiNotePencilFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    comment:
      "This platform has transformed my career! The courses are top-notch and the instructors are incredibly knowledgeable.",
    DP: "JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Web Developer",
    comment:
      "I love the flexibility of learning at my own pace. The content is engaging and easy to follow.",
    DP: "JS",
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Data Scientist",
    comment:
      "The hands-on projects really helped me solidify my understanding. Highly recommend to anyone looking to upskill!",

    DP: "MJ",
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "UI/UX Designer",
    comment:
      "The community support is fantastic. I always feel motivated to keep learning and growing my skills.",
    DP: "ED",
  },
];

const Review = () => {
  return (
    <div className="py-24 mb- bg-[#020617]">


      <div className=" text-white  flex  justify-center items-center gap-10 mb-15 ">
        <h1 className="text-3xl font-semibold">
          Reviews from other{" "}
          <span className="bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
            learners
          </span>
        </h1>
        <PiNotePencilFill className="text-yellow-400 w-12 h-12" />
      </div>

      <div>
        {/* review */}
        <div className="flex justify-center items-center gap-8 mx-20 pd-20">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-950 rounded-xl border border-gray-750 p-6 w-200 min-h-[320px] flex flex-col"
            >
              {/* Headers */}

              <div className="flex gap-2 items-center mb-2">
                <div className="flex items-center bg-sky-950 w-10 h-10 rounded-full justify-center mr-4 p-2">
                  <h1 className="text-white">{review.DP}</h1>
                </div>

                <div>
                  <h2 className=" font-semibold">{review.name}</h2>
                  <p className="text-gray-500 text-sm">{review.title}</p>
                </div>
              </div>
              {/* Comment */}
              <p className="mt-2 text-white">{review.comment}</p>

              {/* Rating — bottom aligned */}
              <div className="flex mt-auto">
                <FaStar className="text-yellow-400 inline-block mr-1" />
                <FaStar className="text-yellow-400 inline-block mr-1" />
                <FaStar className="text-yellow-400 inline-block mr-1" />
                <FaStar className="text-yellow-400 inline-block mr-1" />
                <FaStar className="text-yellow-400 inline-block mr-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
