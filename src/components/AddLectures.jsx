// import {useState} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const AddLectures = () =>{
//   const navigate = useNavigate()
//     const { courseId } = useParams(); // ✅ courseId URL se
//   console.log("Course ID:", courseId);
  
 

//   const [formData,setFormData] = useState({
//     sectionTitle :"",
//     lectureTitle:"",
//     duration:"",
//     isPreview:false,
//   });
//   const [video,setVideo]=useState(null);
//   const [loading,setLoading] = useState(false);


//   //text/checkbox handler

//   const handleChange = (e) =>{
//     const{name,value,type,checked} = e.target;

//     setFormData({
//       ...formData,
//       [name]:type==="checkbox"?checked:value,
//     });
//   };
//   // video handler
//   const handleFileChange = (e)=>{
//     setVideo(e.target.files[0]);
//   };

//   const handleSubmit = async (e) =>{
//     e.preventDefault();
//     if(!courseId){
//       alert("course id missing");
//       return;
//     }

//     if(!formData.sectionTitle || !formData.lectureTitle){

//       alert("Section title & Lecture title required")
//       navigate(`/becomeaninstructor/show-lectures/${courseId}`);
//       return;
//     }

//     const data = new FormData();
//      data.append("sectionTitle", formData.sectionTitle);
//     data.append("lectureTitle", formData.lectureTitle);
//     data.append("duration", formData.duration);
//     data.append("courseId", courseId);
//     data.append("isPreview", formData.isPreview);

//     if (video){
//       data.append("file",video);//multer field name=file
//     }
//     try{
//       setLoading(true);
//       const res = await axios.post(
//         "http://localhost:5000/api/section-lecture/add",
//         data,
//         {
//           headers:{
//             "Content-Type": "multipart/form-data",

//           },
//         }
//       );

//       alert("section & lecture added successfully");
//       console.log(res.data);

//       // reset
//       setFormData({
//         sectionTitle: "",
//         lectureTitle: "",
//         duration: "",
//         isPreview: false,
//       });
//       setVideo(null);
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//     }

//     return(
//        <div className="max-w-xl mx-auto mt-10 bg-gray-900 text-white p-6 rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">
//         Add Section & Lecture
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* Section Title */}
//         <input
//           type="text"
//           name="sectionTitle"
//           placeholder="Section Title (Basic / Advanced)"
//           value={formData.sectionTitle}
//           onChange={handleChange}
//           className="w-full p-2 rounded bg-gray-800"
//           required
//         />

//          {/* Lecture Title */}
//         <input
//           type="text"
//           name="lectureTitle"
//           placeholder="Lecture Title"
//           value={formData.lectureTitle}
//           onChange={handleChange}
//           className="w-full p-2 rounded bg-gray-800"
//           required
//         />


//          {/* Duration */}
//         <input
//           type="number"
//           name="duration"
//           placeholder="Duration (minutes)"
//           value={formData.duration}
//           onChange={handleChange}
//           className="w-full p-2 rounded bg-gray-800"
//         />

//          {/* Video */}
//         <input
//           type="file"
//           accept="video/*"
//           onChange={handleFileChange}
//           className="w-full"
//         />

//         {/* Preview */}
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             name="isPreview"
//             checked={formData.isPreview}
//             onChange={handleChange}
//           />
//           Free Preview Lecture
//         </label>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-yellow-400 text-black py-2 rounded font-semibold"
//         >
//           {loading ? "Uploading..." : "Add Lecture"}
//         </button>
//       </form>
//     </div>

//     )
// }
// export default AddLectures


import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddLectures = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);

  const [formData, setFormData] = useState({
    sectionTitle: "",
    lectureTitle: "",
    duration: "",
    isPreview: false,
  });

  // 🔹 Fetch course details
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/course/${courseId}`
        );
        setCourse(res.data.course);
      } catch (err) {
        console.error(err);
      }
    };

    if (courseId) fetchCourse();
  }, [courseId]);

  // 🔹 Input handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  // 🔹 Submit lecture
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.sectionTitle || !formData.lectureTitle) {
      alert("Section title & Lecture title required");
      return;
    }

    const data = new FormData();
    data.append("sectionTitle", formData.sectionTitle);
    data.append("lectureTitle", formData.lectureTitle);
    data.append("duration", formData.duration);
    data.append("courseId", courseId);
    data.append("isPreview", formData.isPreview);

    if (video) data.append("file", video);

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/section-lecture/add",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Lecture added successfully");

      setFormData({
        sectionTitle: "",
        lectureTitle: "",
        duration: "",
        isPreview: false,
      });
      setVideo(null);
      navigate(`/becomeaninstructor/show-lectures/${courseId}`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 text-white">

      {/* 🔹 COURSE HEADER */}
      {course && (
        <div className="bg-gray-800 p-5 rounded-lg mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{course.title}</h2>
            <p className="text-sm text-gray-400">
              Category: {course.category}
            </p>
            <p className="text-sm">
              Status:{" "}
              <span className="text-yellow-400 font-semibold">
                {course.status}
              </span>
            </p>
          </div>

          <button
            onClick={() =>
              navigate(`/becomeaninstructor/publish-course/${courseId}`)
            }
            className="bg-green-500 text-black px-4 py-2 rounded font-semibold"
          >
            Publish Course
          </button>
        </div>
      )}

      {/* 🔹 ADD LECTURE FORM */}
      <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Add Section & Lecture</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="sectionTitle"
            placeholder="Section Title"
            value={formData.sectionTitle}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800"
            required
          />

          <input
            type="text"
            name="lectureTitle"
            placeholder="Lecture Title"
            value={formData.lectureTitle}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800"
            required
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration (minutes)"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800"
          />

          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isPreview"
              checked={formData.isPreview}
              onChange={handleChange}
            />
            Free Preview Lecture
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black py-2 rounded font-semibold"
          >
            {loading ? "Uploading..." : "Add Lecture"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLectures;
