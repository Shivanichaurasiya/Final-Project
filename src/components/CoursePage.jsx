
import { useState } from "react";
import { courses } from "../data/courses";   // ✅ USE YOUR DATA
import NotesSection from "../components/NotesSection";
import CodeEditor from "../components/CodeEditor";
import jsPDF from "jspdf";

const CoursePage = () => {
  // ✅ DIRECTLY LOAD FIRST COURSE (HTML)
  const course = courses[0];

  const [activeCode, setActiveCode] = useState(
    course.notes[0].code
  );

  const [completed, setCompleted] = useState([]);
  const [quizDone, setQuizDone] = useState(false);

  // ✅ CERTIFICATE
  const downloadCertificate = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: "a4",
    });

    doc.setFontSize(36);
    doc.text("Certificate of Completion", 420, 100, { align: "center" });

    doc.setFontSize(22);
    doc.text("Student Name", 420, 170, { align: "center" });

    doc.setFontSize(18);
    doc.text(
      `For successfully completing: ${course.title}`,
      420,
      230,
      { align: "center" }
    );

    doc.save("Certificate.pdf");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#020617] text-white">

      {/* LEFT SIDE */}
      <div className="md:w-1/2 w-full border-r border-gray-700 p-5 overflow-y-auto">
        <NotesSection
          course={course}                // ✅ FULL COURSE (notes + quiz)
          onLoadCode={setActiveCode}
          completed={completed}
          setCompleted={setCompleted}
          onQuizComplete={setQuizDone}   // ✅ QUIZ FINISH CALLBACK
        />

        {quizDone && course.certificate && (
          <div className="mt-6 bg-green-900 p-4 rounded text-center">
            🎉 Congratulations!
            <br />
            <button
              onClick={downloadCertificate}
              className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded"
            >
              Download Certificate
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 w-full p-5">
        <CodeEditor />
      </div>
    </div>
  );
};

export default CoursePage;


