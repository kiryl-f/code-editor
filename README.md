# Code Editor Application

This project is a simple web-based code editor that allows users to choose between two programming languages (JavaScript and Python), write code, and execute it. The application provides a set of predefined tasks, which users can solve by writing code in the editor. The code is then sent to the backend to be executed, and the result is displayed.

## Features

- **Task-based Approach**: Predefined tasks that users can solve by writing code.
- **Language Selection**: Users can choose between JavaScript and Python for coding.
- **Code Execution**: Users can run their code and see the output.
- **Task Navigation**: After completing a task, users can move on to the next one.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces. It allows creating reusable components and managing the app state efficiently.
- **Next.js**: A React framework that provides server-side rendering, static site generation, and other features like API routes.
- **React Icons**: A library that provides popular icons as React components, used for language icons in the language selector dropdown.
- **Axios**: A promise-based HTTP client used for making requests to the backend API.
- **SCSS**: A preprocessor for CSS, which allows using variables, nested rules, and more, to style the app.
- **Mirage.js**: A library for creating a mock API to simulate backend interactions for development purposes.

### Backend

- **Mirage.js**: This is also used on the server-side for mocking API calls. The backend of this app executes code on the server based on the selected programming language (Python or JavaScript) and returns the result.

### Other Libraries

- **FontAwesome**: Used for adding icons to the dropdown, though modified to be compatible with custom dropdowns.
- **pyodide**: A library that allows running Python code in the browser by compiling the Python interpreter to WebAssembly.

### Key Components

- **Code Editor**: A custom code editor component that supports syntax highlighting and code editing for JavaScript and Python. 
- **Language Selector**: A custom dropdown component for selecting between JavaScript and Python, using icons to visually represent each language.
- **Task List**: A series of coding tasks that guide the user through solving problems.
- **Code Execution**: An API that receives the code and runs it on the server or in the browser (via pyodide for Python).

## Setup

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/code-editor.git
    ```

2. Navigate to the project directory:
    ```bash
    cd code-editor
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Folder Structure

```bash
├── components/              # React components (e.g., CodeEditor, Header, Footer)
├── mirage/                  # Mock API (Mirage.js)
├── pages/                   # Pages and routing (Next.js pages)
├── public/                  # Static assets (images, icons, etc.)
├── styles/                  # Global and component styles (SCSS)
├── .gitignore               # Git ignore configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
