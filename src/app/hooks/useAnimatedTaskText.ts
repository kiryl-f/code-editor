import { useEffect, useState } from "react";
import { Task } from "../consts/tasks";

export function useAnimatedTaskText(task: Task) {
  const [taskNameText, setTaskNameText] = useState("");
  const [taskDescriptionText, setTaskDescriptionText] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    let nameInterval: NodeJS.Timeout;
    let descriptionTimeout: NodeJS.Timeout;

    const typeText = (text: string, setText: React.Dispatch<React.SetStateAction<string>>) => {
      let index = 0;
      nameInterval = setInterval(() => {
        setText(text.substring(0, index + 1));
        index++;
        if (index === text.length) clearInterval(nameInterval);
      }, 25);
    };

    setTaskNameText("");
    setTaskDescriptionText("");
    setShowDescription(false);
    typeText(task.name, setTaskNameText);

    descriptionTimeout = setTimeout(() => {
      setShowDescription(true);
      typeText(task.description, setTaskDescriptionText);
    }, task.name.length * 25 + 500);

    return () => {
      clearInterval(nameInterval);
      clearTimeout(descriptionTimeout);
    };
  }, [task]);

  return { taskNameText, taskDescriptionText, showDescription };
} 