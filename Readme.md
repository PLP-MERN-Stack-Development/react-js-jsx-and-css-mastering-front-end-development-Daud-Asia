Task Manager — React + Tailwind Project

📘 Overview
This is a simple Task Manager web application built with React (Vite) and styled using Tailwind CSS.
It was developed as part of my learning project to understand how modern web apps are built, how React components interact, and how data can persist using the browser’s local storage.

The app allows users to add, view, mark complete, and delete tasks — all saved automatically in their browser.



🎯 Project Objectives
This project was designed to help me:
- Learn the structure and setup of a React app using Vite.
- Create reusable components (Button, Navbar, Footer, Layout, TaskManager).
- Manage data using React Hooks (`useState`, `useEffect`).
- Store and retrieve data using localStorage.
- Style the project using Tailwind CSS.
- Debug and organize a real React project structure.



⚙️ Technologies Used
- React.js (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- LocalStorage API
- Replit (for development environment)



📂 Folder Structure
After cleaning up and merging duplicate files, the final structure looks like this:

src/ │ ├── App.jsx ├── App.css ├── index.css ├── index.jsx │ ├── components/ │   ├── Button.jsx │   ├── Navbar.jsx │   ├── Footer.jsx │   ├── Layout.jsx │   └── TaskManager.jsx │ └── assets/ (optional)



🧩 Component Breakdown

1. App.jsx
- The main entry component of the app.
- Imports all other components (Navbar, Footer, TaskManager, Button).
- Uses a counter example with `useState`.
- Displays the overall layout and connects everything.

2. TaskManager.jsx
- Handles task creation, deletion, filtering, and completion
.- Uses a custom hook for task management and localStorage persistence.
- Includes filters for All, Active, and Completed tasks.

3. Button.jsx
- A reusable button with different styles: `primary`, `secondary`, `danger`, etc.
- Uses Tailwind utility classes for consistent styling.

4. Navbar.jsx & Footer.jsx
- Navbar provides simple navigation links.
- Footer displays a copyright.

5. Layout.jsx
- Wraps the main content between Navbar and Footer for a consistent layout.



💻 How to Run the Project

Step 1: Install Dependencies
bash
npm install

Step 2: Install Tailwind CSS

If not already installed, run:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Then open your tailwind.config.js file and make sure it includes:

content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
theme: { extend: {} },
plugins: [],

Step 3: Add Tailwind to index.css

In your index.css, include these lines:

@tailwind base;
@tailwind components;
@tailwind utilities;

Step 4: Run the App

npm run dev

Then open the link shown in your terminal. 


🧠 What I Learned

React Concepts

Structuring React apps into reusable components.

Passing data with props.

Using useState and useEffect hooks.

Persisting data in localStorage.


Tailwind CSS

Using utility classes for fast, responsive design.

Dark/light theme compatibility.

Maintaining clean and consistent UI components.


Debugging & Problem Solving

Fixed issues from having two src folders and duplicate App.jsx files.

Learned to organize files properly for imports to work.

Solved a blank white page issue caused by wrong file imports.

Set up and linked Tailwind CSS correctly.



✅ Final Outcome

The final app:

Allows users to add, complete, and delete tasks.

Saves data automatically in localStorage.

Uses a clean React + Tailwind interface.

Demonstrates practical understanding of React components, props, hooks, and styling.



📚 Conclusion

Through this project, I learned how to:

Build, structure, and debug a real React app.

Combine multiple components to create a full user interface.

Persist data in the browser using localStorage.

Apply Tailwind CSS effectively.
