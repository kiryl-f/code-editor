import MonacoEditor from '@monaco-editor/react';

import "../styles/components/code-editor.scss";

interface CodeEditorProps {
  language: "javascript" | "python";
  code: string;
  onChange: (newCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, code, onChange }) => {
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onChange(value);
    }
  };

  return (
    <div>
      <MonacoEditor
        className="monaco-editor"
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme="hc-black"
        height="400px"
      />
    </div>
  );
};

export default CodeEditor;
