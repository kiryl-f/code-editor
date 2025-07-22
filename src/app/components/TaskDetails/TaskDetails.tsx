import React from "react";

interface TaskDetailsProps {
  id: number;
  nameText: string;
  descriptionText: string;
  showDescription: boolean;
  example: string;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ id, nameText, descriptionText, showDescription, example }) => (
  <article className="task-container">
    <h1>
      Task {id}: {nameText}
    </h1>
    <p style={{ marginTop: '14px', marginBottom: '24px' }}>
      <strong>{showDescription && descriptionText}</strong>
    </p>
    <p>
      <strong>Example:</strong>
      <br />
    </p>
    <code>{example}</code>
  </article>
);

export default TaskDetails; 