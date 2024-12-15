"use client";

import React, { useEffect, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { setupMirageServer } from "./mirage/server";

import axios from "axios";

import './styles/globals.scss';
import './styles/home.scss';

export default function Home() {
  useEffect(() => {
    setupMirageServer();
  }, []);

  const [language, setLanguage] = useState<"javascript" | "python">("javascript");
  const [code, setCode] = useState<string>("console.log(1 + 22);");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunCode = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await axios.post("/api/execute", { language, code }, {
        headers: { "Content-Type": "application/json" }
      });

      const data = response.data;
      if (data.status === "success") {
        setResult(data.output);
      } else {
        setResult(data.error || "An error occurred.");
      }
    } catch (error) {
      setResult("Failed to execute the code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="task-container">
        <h1>Task: Sum of Two Numbers</h1>
        <p>
          Write a function that takes two numbers and returns their sum.
          <br />
          Example:
          <br />
          <code>sum(1, 2) = 3</code>
        </p>
      </div>

      <div className="editor-container">
        <div className="language-select">
          <label htmlFor="language">Choose Language: </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value as "javascript" | "python")}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
        <CodeEditor language={language} code={code} onChange={setCode} />
        <button
          onClick={handleRunCode}
          disabled={isLoading}
          className="run-button"
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>

        {result && (
          <div className="result-container">
            <strong>Result:</strong>
            <pre>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
