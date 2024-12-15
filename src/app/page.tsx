"use client";

import React, { useEffect, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { setupMirageServer } from "./mirage/server";

import axios from "axios";

import './styles/globals.scss';
import './styles/home.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Task {
  id: number;
  description: string;
  example: string;
}

export default function Home() {
  useEffect(() => {
    setupMirageServer();
  }, []);

  const tasks: Task[] = [
    {
      id: 1,
      description: "Write a function that adds two numbers.",
      example: "sum(1, 2) => 3",
    },
    {
      id: 2,
      description: "Write a function that multiplies two numbers.",
      example: "multiply(2, 3) => 6",
    },
    {
      id: 3,
      description: "Write a function that subtracts two numbers.",
      example: "subtract(5, 3) => 2",
    },
    {
      id: 4,
      description: "Write a function that divides two numbers.",
      example: "divide(6, 3) => 2",
    },
    {
      id: 5,
      description: "Write a function that checks if a number is even.",
      example: "isEven(4) => true",
    },
  ];

  const [language, setLanguage] = useState<"javascript" | "python">("javascript");
  const [code, setCode] = useState<string>("console.log(1 + 22);");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

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

  const handleNextTask = () => {
    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      alert("You have completed all the tasks!");
    }
  };

  const currentTask = tasks[currentTaskIndex];

  return (
    <div>
      <Header />

      <div className="container">
        <div className="task-container">
          <h1>Task {currentTask.id}: {currentTask.description}</h1>
          <p>
            <strong>Example:</strong>
            <br />
            <code>{currentTask.example}</code>
          </p>
          <button onClick={handleNextTask} className="next-button">
            Next Task
          </button>
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
      <Footer/>
    </div>
  );
}
