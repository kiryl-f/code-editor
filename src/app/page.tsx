"use client"

import React, { useEffect, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { setupMirageServer } from "./mirage/server";
import axios from "axios";
import './styles/globals.scss';
import './styles/home.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageSelect from "./components/LanguageSelect";
import { ThemeProvider } from "./theme/ThemeContext";



interface Task {
  id: number;
  name: string;
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
      name: 'Sum of numbers',
      description: "Write a function that adds two numbers and returns the result.",
      example: "sum(1, 2) => 3"
    },
    {
      id: 2,
      name: 'Result of multiplication',
      description: "Write a function that multiplies two numbers and returns the result.",
      example: "multiply(2, 3) => 6"
    },
    {
      id: 3,
      name: 'Subtraction function',
      description: "Write a function that subtracts two numbers and returns the result.",
      example: "subtract(5, 3) => 2"
    },
    {
      id: 4,
      name: 'Division function',
      description: "Write a function that divides two numbers and returns the result.",
      example: "divide(6, 3) => 2"
    },
    {
      id: 5,
      name: 'Odd / even',
      description: "Write a function that checks if a number is even and returns true or false.",
      example: "isEven(4) => true"
    },
  ];

  const [language, setLanguage] = useState<"javascript" | "python">("javascript");
  const [code, setCode] = useState<string>("console.log(1 + 22);");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const [taskNameText, setTaskNameText] = useState("");
  const [taskDescriptionText, setTaskDescriptionText] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

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

  useEffect(() => {
    const typeText = (text: string, setText: React.Dispatch<React.SetStateAction<string>>) => {
      let index = 0;
      const interval = setInterval(() => {
        setText(text.substring(0, index + 1));
        index++;
        if (index === text.length) clearInterval(interval);
      }, 25);
    };

    typeText(currentTask.name, setTaskNameText);

    const descriptionTimeout = setTimeout(() => {
      setShowDescription(true);
      typeText(currentTask.description, setTaskDescriptionText);
    }, currentTask.name.length * 25 + 500);

    return () => clearTimeout(descriptionTimeout);
  }, [currentTask]);

  return (
    <ThemeProvider>
      <div>
        <Header />
        <div className="container">
          <div className="task-container">
            <h1>
              Task {currentTask.id}: {taskNameText}
            </h1>

            <p style={{ marginTop: '14px', marginBottom: '24px' }}>
              <strong>
                {showDescription && taskDescriptionText}
              </strong>
            </p>
            <p>
              <strong>Example:</strong>
              <br />
            </p>
            <code>{currentTask.example}</code>
          </div>

          <div className="editor-container">
            <LanguageSelect language={language} setLanguage={setLanguage} />
            <CodeEditor language={language} code={code} onChange={setCode} />
            <button
              onClick={handleRunCode}
              disabled={isLoading}
              className="run-button"
            >
              {isLoading ? "Running..." : "Run Code"}
            </button>

            <button onClick={handleNextTask} className="sumbit-button">
              Submit attempt
            </button>

            {result && (
              <div className="result-container">
                <strong>Result:</strong>
                <pre>{result}</pre>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
