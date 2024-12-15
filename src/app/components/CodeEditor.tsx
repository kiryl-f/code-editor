import MonacoEditor from '@monaco-editor/react';

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
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        height="400px"
      />
    </div>
  );
};

export default CodeEditor;
