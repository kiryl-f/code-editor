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
  const [code, setCode] = useState<string>("console.log(1+22)");
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
        console.log('data output: ' + data.output);
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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Online Code Editor</h1>

      <div style={{ marginBottom: "10px" }}>
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
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#000",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <strong>Result:</strong>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}
