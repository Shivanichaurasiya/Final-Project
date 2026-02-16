
// import { useState } from "react";
// import { courses } from "../data/courses";   // ✅ USE YOUR DATA
// import NotesSection from "../components/NotesSection";
// import CodeEditor from "../components/CodeEditor";
// import jsPDF from "jspdf";

// const CoursePage = () => {
//   // ✅ DIRECTLY LOAD FIRST COURSE (HTML)
//   const course = courses[0];

//   const [activeCode, setActiveCode] = useState(
//     course.notes[0].code
//   );

//   const [completed, setCompleted] = useState([]);
//   const [quizDone, setQuizDone] = useState(false);

//   // ✅ CERTIFICATE
//   const downloadCertificate = () => {
//     const doc = new jsPDF({
//       orientation: "landscape",
//       unit: "pt",
//       format: "a4",
//     });

//      const pageWidth = doc.internal.pageSize.getWidth();
//   const pageHeight = doc.internal.pageSize.getHeight();


//     // 🎨 BORDER
//   doc.setLineWidth(4);
//   doc.rect(20, 20, pageWidth - 40, pageHeight - 40);

//      // 🎓 TITLE
//    doc.setFont("times", "bold");
//   doc.setFontSize(40);
//   doc.text("Certificate of Completion", pageWidth / 2, 120, {
//     align: "center",
//   });

//   // 🧑 STUDENT NAME
//   doc.setFontSize(28);
//   doc.setFont("times", "bolditalic");
//   doc.text("Student Name", pageWidth / 2, 200, {
//     align: "center",
//   });


//    // 📝 COMPLETION TEXT
//   doc.setFontSize(18);
//   doc.setFont("times", "normal");
//   doc.text(
//     "This certificate is proudly presented for successfully completing the course",
//     pageWidth / 2,
//     260,
//     { align: "center" }
//   );

//    // 📘 COURSE NAME
//   doc.setFont("times", "bold");
//   doc.setFontSize(22);
//   console.log(course.title)
//   doc.text(course.title, pageWidth / 2, 310, {
//     align: "center",
//   });

//     // 📅 DATE
//    doc.setFontSize(14);
//   doc.setFont("times", "normal");
//   doc.text(
//     `Date: ${new Date().toLocaleDateString()}`,
//     100,
//     pageHeight - 100
//   );


//    // ✍️ SIGNATURE
//   doc.text("Instructor Signature", pageWidth - 250, pageHeight - 100);
//   doc.line(
//     pageWidth - 320,
//     pageHeight - 120,
//     pageWidth - 80,
//     pageHeight - 120
//   );

//   // 🏁 SAVE
//   doc.save("Course-Certificate.pdf");
// };
    
//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-[#020617] text-white">

//       {/* LEFT SIDE */}
//       <div className="md:w-1/2 w-full border-r border-gray-700 p-5 overflow-y-auto">
//         <NotesSection
//           course={course}                // ✅ FULL COURSE (notes + quiz)
//           onLoadCode={setActiveCode}
//           completed={completed}
//           setCompleted={setCompleted}
//           onQuizComplete={setQuizDone}   // ✅ QUIZ FINISH CALLBACK
//         />

//         {quizDone && course.certificate && (
//           <div className="mt-6 bg-green-900 p-4 rounded text-center">
//             🎉 Congratulations!
//             <br />
//             <button
//               onClick={downloadCertificate}
//               className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded"
//             >
//               Download Certificate
//             </button>
//           </div>
//         )}
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="md:w-1/2 w-full p-5">
//         <CodeEditor />
//       </div>
//     </div>
//   );
// };

// export default CoursePage;

import { useState } from "react";
import { courses } from "../data/courses";
import NotesSection from "../components/NotesSection";
import CodeEditor from "../components/CodeEditor";
import jsPDF from "jspdf";

const CoursePage = () => {
  // ✅ load first course
  const course = courses[0];

  const [activeCode, setActiveCode] = useState(course.notes[0].code);
  const [completed, setCompleted] = useState([]);
  const [quizDone, setQuizDone] = useState(false);

  // 🎓 DOWNLOAD CERTIFICATE
  const downloadCertificate = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const sanitizeText = (text = "") => {
  return text
    .replace(/[^\x00-\x7F]/g, "") // ❗ removes all non-ASCII chars
    .replace(/\s+/g, " ")         // extra spaces clean
    .trim();
};


    /* ================= BORDER ================= */
    doc.setDrawColor(184, 134, 11); // gold
    doc.setLineWidth(6);
    doc.rect(30, 30, pageWidth - 60, pageHeight - 60);

    doc.setLineWidth(1);
    doc.rect(45, 45, pageWidth - 90, pageHeight - 90);
    doc.setDrawColor(0, 0, 0);

    /* ================= WATERMARK ================= */
    doc.setFontSize(60);
    doc.setTextColor(220, 220, 220);
    doc.setFont("times", "bold");
    doc.text(
      "CERTIFIED",
      pageWidth / 2,
      pageHeight / 2,
      { align: "center", angle: 30 }
    );
    doc.setTextColor(0, 0, 0);

    /* ================= TITLE ================= */
    doc.setFont("times", "bold");
    doc.setFontSize(40);
    doc.text("Certificate of Completion", pageWidth / 2, 120, {
      align: "center",
    });

    /* ================= STUDENT NAME ================= */
    doc.setFontSize(28);
    doc.setFont("times", "bolditalic");
    doc.text("Student Name", pageWidth / 2, 200, {
      align: "center",
    });

    /* ================= DESCRIPTION ================= */
    doc.setFontSize(18);
    doc.setFont("times", "normal");
    doc.text(
      "This certificate is proudly presented for successfully completing the course",
      pageWidth / 2,
      260,
      { align: "center" }
    );

    /* ================= COURSE NAME ================= */
    doc.setFont("times", "bold");
    doc.setFontSize(22);
    doc.text(course.title, pageWidth / 2, 310, {
      align: "center",
      maxWidth: pageWidth - 200, // 🔥 overflow fix
    });

    /* ================= DATE ================= */
    doc.setFontSize(14);
    doc.text(
      `Date: ${new Date().toLocaleDateString()}`,
      100,
      pageHeight - 100
    );

    /* ================= SIGNATURE ================= */
    doc.text("Instructor Signature", pageWidth - 250, pageHeight - 100);
    doc.line(
      pageWidth - 320,
      pageHeight - 120,
      pageWidth - 80,
      pageHeight - 120
    );

    /* ================= CERTIFICATE ID ================= */
    const certId = `CERT-${Date.now()}`;
    doc.setFontSize(12);
    doc.text(`Certificate ID: ${certId}`, 100, pageHeight - 70);

    doc.save("Course-Certificate.pdf");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#020617] text-white">
      {/* LEFT */}
      <div className="md:w-1/2 w-full border-r border-gray-700 p-5 overflow-y-auto">
        <NotesSection
          course={course}
          onLoadCode={setActiveCode}
          completed={completed}
          setCompleted={setCompleted}
          onQuizComplete={setQuizDone}
        />

        {quizDone && course.certificate && (
          <div className="mt-6 bg-green-900 p-4 rounded text-center">
            🎉 Congratulations!
            <br />
            <button
              onClick={downloadCertificate}
              className="mt-3 px-5 py-2 bg-yellow-400 text-black rounded font-semibold"
            >
              Download Certificate
            </button>
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 w-full p-5">
        <CodeEditor code={activeCode} />
      </div>
    </div>
  );
};

export default CoursePage;



