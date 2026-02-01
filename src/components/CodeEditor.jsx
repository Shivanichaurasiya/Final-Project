import { useEffect, useRef, useState } from "react";
const CodeEditor = () => {
  const [html, setHtml] = useState("<h1>Hello VS Code 🚀</h1>");
  const [css, setCss] = useState("h1 { color: #22c55e; }");
  const [js, setJs] = useState("console.log('JS Running');");

  const [activeTab, setActiveTab] = useState("html");
  const [srcDoc, setSrcDoc] = useState("");
  const [consoleLogs, setConsoleLogs] = useState([]);

  // 🔥 AUTOSAVE (localStorage)
  useEffect(() => {
    localStorage.setItem("editor-html", html);
    localStorage.setItem("editor-css", css);
    localStorage.setItem("editor-js", js);
  }, [html, css, js]);

  useEffect(() => {
    setHtml(localStorage.getItem("editor-html") || html);
    setCss(localStorage.getItem("editor-css") || css);
    setJs(localStorage.getItem("editor-js") || js);
    // eslint-disable-next-line
  }, []);

  // 🔥 RUN CODE
  const runCode = () => {
    setConsoleLogs([]);

    const source = `
<!DOCTYPE html>
<html>
<head>
<style>${css}</style>
</head>
<body>
${html}

<script>
(function () {
  const oldLog = console.log;
  console.log = function (...args) {
    parent.postMessage(
      { type: "log", data: args.join(" ") },
      "*"
    );
    oldLog(...args);
  };

  try {
    ${js}
  } catch (err) {
    parent.postMessage(
      { type: "error", data: err.message },
      "*"
    );
  }
})();
</script>

</body>
</html>
    `;

    setSrcDoc(source);
  };

  // 🔥 CONSOLE LISTENER
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "log") {
        setConsoleLogs((prev) => [...prev, "✔ " + e.data.data]);
      }
      if (e.data?.type === "error") {
        setConsoleLogs((prev) => [...prev, "❌ " + e.data.data]);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  // 🔥 CTRL + ENTER
  useEffect(() => {
    const runShortcut = (e) => {
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        runCode();
      }
    };
    window.addEventListener("keydown", runShortcut);
    return () => window.removeEventListener("keydown", runShortcut);
  }, []);

  return (
    <div className="h-screen bg-[#1e1e1e] text-white flex flex-col relative">

      {/* HEADER */}
      <div className="h-10 bg-[#333] flex items-center px-4 text-sm">
        🧠 Mini VS Code Editor
        <span className="ml-auto text-gray-400">
          Ctrl + Enter to Run
        </span>
      </div>

      {/* TABS */}
      <div className="flex bg-[#252526] text-sm">
        {["html", "css", "js"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-r border-[#333] transition
              ${activeTab === tab ? "bg-[#1e1e1e] text-yellow-400" : "text-gray-300"}
            `}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* EDITOR + OUTPUT */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">

        {/* EDITOR */}
        <textarea
          value={
            activeTab === "html"
              ? html
              : activeTab === "css"
              ? css
              : js
          }
          onChange={(e) =>
            activeTab === "html"
              ? setHtml(e.target.value)
              : activeTab === "css"
              ? setCss(e.target.value)
              : setJs(e.target.value)
          }
          className="md:w-1/2 w-full p-4 bg-[#1e1e1e] text-green-400 font-mono resize-none outline-none"
          spellCheck="false"
        />

        {/* OUTPUT */}
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          className="md:w-1/2 w-full bg-white"
        />
      </div>

      {/* CONSOLE */}
      <div className="h-40 bg-black p-2 text-sm overflow-auto border-t border-gray-700">
        <div className="flex justify-between mb-1">
          <span className="text-yellow-400 font-semibold">
            Console
          </span>
          <button
            onClick={() => setConsoleLogs([])}
            className="text-red-400 text-xs"
          >
            Clear
          </button>
        </div>

        {consoleLogs.length === 0 && (
          <div className="text-gray-500">
            No logs yet…
          </div>
        )}

        {consoleLogs.map((log, i) => (
          <div key={i} className="text-gray-300">
            {log}
          </div>
        ))}
      </div>

      {/* RUN BUTTON (same place, polished) */}
      <button
        onClick={runCode}
        className="
          fixed bottom-4 right-6 z-50
          px-5 py-2
          rounded-xl
          bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500
          text-black font-bold text-sm
          shadow-lg shadow-yellow-500/40
          transition-all duration-300
          hover:scale-105 hover:shadow-pink-500/60
          active:scale-95
        "
      >
        ▶ Run Code
      </button>

    </div>
  );
};

export default CodeEditor;
