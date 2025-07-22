
"use client"

import React, { useEffect, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import { setupMirageServer } from "../mirage/server";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguageSelect from "../components/LanguageSelect/LanguageSelect";
import { TASKS } from "../consts/tasks";
import { useAnimatedTaskText } from "../hooks/useAnimatedTaskText";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import TaskEditor from "../components/TaskEditor/TaskEditor";
import { Language } from "../types/language";


export default function Home() {
  useEffect(() => {
    setupMirageServer();
  }, []);

  const [language, setLanguage] = useState<Language>("javascript");
  const [code, setCode] = useState<string>("console.log('Hello, world!');");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const currentTask = TASKS[currentTaskIndex];
  const { taskNameText, taskDescriptionText, showDescription } = useAnimatedTaskText(currentTask);

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
    if (currentTaskIndex < TASKS.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      alert("You have completed all the tasks!");
    }
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>

      <Header />
      <section className="container">
        <TaskDetails
          id={currentTask.id}
          nameText={taskNameText}
          descriptionText={taskDescriptionText}
          showDescription={showDescription}
          example={currentTask.example}
        />
        <TaskEditor
          language={language}
          setLanguage={setLanguage}
          code={code}
          setCode={setCode}
          isLoading={isLoading}
          onRunCode={handleRunCode}
          onNextTask={handleNextTask}
          result={result}
        />
      </section>

      <Footer />
    </main>
  );
}
