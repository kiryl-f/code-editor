import React from "react";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import CodeEditor from "../CodeEditor";

interface TaskEditorProps {
  language: "javascript" | "python";
  setLanguage: (lang: "javascript" | "python") => void;
  code: string;
  setCode: (code: string) => void;
  isLoading: boolean;
  onRunCode: () => void;
  onNextTask: () => void;
  result: string | null;
}

const TaskEditor: React.FC<TaskEditorProps> = ({ language, setLanguage, code, setCode, isLoading, onRunCode, onNextTask, result }) => (
  <article className="editor-container">
    <LanguageSelect language={language} setLanguage={setLanguage} />
    <CodeEditor language={language} code={code} onChange={setCode} />
    <button
      onClick={onRunCode}
      disabled={isLoading}
      className="run-button"
    >
      {isLoading ? "Running..." : "Run Code"}
    </button>
    <button onClick={onNextTask} className="sumbit-button">
      Submit attempt
    </button>
    {result && (
      <section className="result-container">
        <strong>Result:</strong>
        <pre>{result}</pre>
      </section>
    )}
  </article>
);

export default TaskEditor; 