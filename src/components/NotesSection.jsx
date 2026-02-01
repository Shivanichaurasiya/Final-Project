import QuizSection from "./QuizSection";

const NotesSection = ({
  course,
  onLoadCode,
  completed,
  setCompleted,
  onQuizComplete,
}) => {
  // ❌ no course
  if (!course) {
    return <p className="text-gray-400">Course not found</p>;
  }

  // ✅ mark topic completed
  const markCompleted = (index) => {
    if (!completed.includes(index)) {
      setCompleted([...completed, index]);
    }
  };

  const totalTopics = course.notes.length;
  const progressPercent = Math.round(
    (completed.length / totalTopics) * 100
  );

  return (
    <div className="space-y-6 text-sm leading-7">
      {/* ================= TITLE ================= */}
      <h1 className="text-2xl font-bold text-yellow-400">
        {course.title}
      </h1>

      {/* ================= PROGRESS ================= */}
      <div className="bg-black border border-gray-700 rounded p-3">
        <div className="flex justify-between mb-1 text-xs text-gray-300">
          <span>Progress</span>
          <span>{progressPercent}%</span>
        </div>

        <div className="w-full h-2 bg-gray-700 rounded">
          <div
            className="h-2 bg-green-500 rounded transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* ================= NOTES ================= */}
      {course.notes.map((note, index) => (
        <div
          key={index}
          className={`border rounded-lg p-4 transition
            ${
              completed.includes(index)
                ? "border-green-600 bg-green-900/20"
                : "border-gray-700 bg-[#020617]"
            }`}
        >
          <h2 className="text-lg font-semibold text-yellow-300 mb-2">
            {index + 1}. {note.heading}
          </h2>

          <p className="text-gray-300 mb-3">
            {note.description}
          </p>

          {note.code && (
            <>
              {/* CODE BLOCK */}
              <pre
                className="bg-black text-green-400 p-3 rounded-md text-xs overflow-x-auto cursor-pointer hover:ring-1 hover:ring-yellow-400"
                onClick={() => onLoadCode(note.code)}
                title="Click to load in editor"
              >
{note.code}
              </pre>

              {/* ACTIONS */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => onLoadCode(note.code)}
                  className="text-xs px-3 py-1 bg-yellow-400 text-black rounded hover:opacity-90"
                >
                  Practice in Editor
                </button>

                <button
                  onClick={() => markCompleted(index)}
                  className={`text-xs px-3 py-1 rounded
                    ${
                      completed.includes(index)
                        ? "bg-green-600 text-black"
                        : "bg-gray-700 hover:bg-green-600"
                    }`}
                >
                  {completed.includes(index)
                    ? "Completed ✓"
                    : "Mark Completed"}
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      {/* ================= QUIZ ================= */}
      {completed.length === totalTopics && course.quiz && (
        <QuizSection
          quiz={course.quiz}
          onComplete={onQuizComplete}
        />
      )}
    </div>
  );
};

export default NotesSection;
