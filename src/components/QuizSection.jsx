
import { useState } from "react";

const QuizSection = ({ quiz, onComplete }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  if (!quiz || quiz.length === 0) return null;

  const question = quiz[current];

  const handleNext = () => {
    if (selected === question.answer) {
      setScore(score + 1);
    }

    setSelected(null);

    if (current + 1 < quiz.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
      onComplete(true); // 🔥 certificate unlock signal
    }
  };

  return (
    <div className="mt-8 bg-[#020617] border border-gray-700 rounded-lg p-5">
      <h2 className="text-xl font-bold text-yellow-400 mb-4">
        📝 Quiz
      </h2>

      {!finished ? (
        <>
          <p className="mb-4 text-gray-200">
            {current + 1}. {question.question}
          </p>

          <div className="space-y-2">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`block w-full text-left px-4 py-2 rounded border
                  ${
                    selected === i
                      ? "bg-yellow-400 text-black"
                      : "border-gray-600 hover:bg-gray-800"
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selected === null}
            className="mt-4 px-5 py-2 bg-green-500 text-black font-semibold rounded disabled:opacity-40"
          >
            {current + 1 === quiz.length ? "Finish Quiz" : "Next"}
          </button>
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold text-green-400">
            ✅ Quiz Completed!
          </p>
          <p className="mt-2 text-gray-300">
            Score: {score} / {quiz.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
