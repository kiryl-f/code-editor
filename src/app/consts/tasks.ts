export interface Task {
  id: number;
  name: string;
  description: string;
  example: string;
}

export const TASKS: Task[] = [
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