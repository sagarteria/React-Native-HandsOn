# React.js Onboarding Course

**Objective:**
This course is designed to ramp up new employees (technical, non-technical, or beginners) on React.js. By the end, learners will understand React.js fundamentals, advanced concepts, and related ecosystem tools, and will be able to build, test, and deploy real-world React applications.

---

## Table of Contents
1. [Course Overview](#course-overview)
2. [Section 1: Getting Started with React](#section-1-getting-started-with-react)
3. [Section 2: Foundation Track](#section-2-foundation-track)
4. [Section 3: Advanced Track](#section-3-advanced-track)
5. [Section 4: Training Videos](#section-4-training-videos)
6. [Section 5: Internet Resources](#section-5-internet-resources)
7. [Section 6: Capstone Project Examples](#section-6-capstone-project-examples)
8. [Section 7: Certification Courses](#section-7-certification-courses)
9. [Section 8: Reference](#section-8-reference)

---

## Course Overview

**What you will need:**
- Curriculum: Foundation & Advanced
- Training recordings (see videos)
- Internet resources (see links)
- Assignments for practice (see capstone & practice tasks)
- Certification options (see courses)

**Learning Path:**
1. Complete Foundation Track
2. Progress to Advanced Track
3. Watch recommended training videos
4. Use internet resources for reference
5. Complete practice assignments and capstone project
6. (Optional) Take a certification course



## Common: Web Fundamentals (Pre-requisite)

This section covers the essential web development fundamentals that are a pre-requisite for the React.js course. Learners should be comfortable with these topics before starting the course.

**HTML (HyperText Markup Language):**
  - Structure and semantics of web pages
  - Common tags and attributes
  - Forms and input elements
  - Semantic tags (header, nav, main, footer)
  - Tables for data display
  - Embedding media (images, video, audio)
  - Accessibility basics (alt text, ARIA attributes)

**CSS (Cascading Style Sheets):**
  - Styling basics (selectors, properties, values)
  - Box model and layout techniques
  - Responsive design principles
  - Flexbox and Grid for layout
  - CSS transitions and basic animations
  - CSS variables
  - Media queries for responsiveness
  - Specificity and cascade

**JavaScript:**
  - Variables, data types, and operators
  - Functions, loops, and conditionals
  - Arrays and objects
  - JSON basics
  - DOM manipulation and event handling
  - ES6+ features (let/const, arrow functions, template literals)
  - Event listeners
  - Scope and hoisting
  - Basic error handling (try/catch)
  - Basic debugging (console.log)

---

## Section 1: Getting Started with React

Objective: Equip learners with a solid development environment and foundational knowledge to begin working with React.

Key Focus:
    • What is React? Introduction to React JS and its core philosophy
    • Virtual DOM: How React efficiently updates the UI
    • JavaScript vs JSX: Understanding the difference and why JSX is used
    • Install Node.js, npm, and VS Code
    • NPM & package.json: Managing dependencies and scripts
    • Project scaffolding with Create React App or Vite
    • React DevTools: Inspecting and debugging React apps
    • Build a “Hello React” starter app to validate setup
    • Single Page Application (SPA) concept: How React apps differ from traditional web apps

**Practice Assignments:**
- Set up your environment and create a "Hello React" app using Create React App or Vite. Share a screenshot of your running app.
- Open your app in React DevTools and inspect the component tree.
- Edit the starter app to display your name and a favorite color.
- Experiment with changing some CSS styles in your app.
- Use browser DevTools to inspect HTML/CSS and try changing an element’s style live.


## Section 2: Foundation Track


Objective: Enable learners to understand and build React applications using core concepts like JSX, components, hooks, and routing.
Topics & Goals:
    • ES6+ JavaScript Features:
        ○ Use classes, arrow functions, destructuring, and modules as used in React
    • JSX & Components:
        ○ Build modular UI using reusable React components
        ○ Understand the difference between functional and class components
        ○ Learn best practices for component structure and naming conventions
        ○ Understand basic folder/project structure for React apps
        ○ Containers vs Presentational Components: Understand separation of concerns
        ○ Use React Fragments to group elements without extra DOM nodes
        ○ JS Expressions in JSX: Embedding JavaScript logic in UI
        ○ Default input values in forms and components
    • State & Props:
        ○ Manage component state effectively
        ○ Pass data between components using props
        ○ Understand the concept of lifting state up
        ○ Use default props and destructuring
    • List & Conditional Rendering:
        ○ Render lists of components using map
        ○ Understand the importance of keys in lists and why not to use index as key unless necessary
        ○ Implement conditional rendering (ternary, &&, etc.)
    • Hooks (useState, useEffect, useRef):
        ○ Introduction to React component lifecycle (with hooks)
        ○ Handle component lifecycles and local state
        ○ Explore additional hooks like useContext, useReducer, and useRef
        ○ Learn when and how to use custom hooks
        ○ Use refs and forward refs to access and manipulate DOM nodes
        ○ Use useImperativeHandle to customize instance values exposed to parent components
    • API Calling & Data Fetching:
        ○ Fetch data from APIs using fetch or Axios (in detail)
        ○ Use useEffect for data fetching on mount
        ○ Handle loading and error states
        ○ Use async/await for asynchronous operations
        ○ Understand best practices for separating data fetching logic
    • Events & Forms:
        ○ Implement user interactions and validate inputs
        ○ Understand controlled vs uncontrolled components
        ○ Learn form handling libraries like Formik or React Hook Form
        ○ Sharing events and data between components
    • Routing:
        ○ Navigate across views/pages using React Router v6
        ○ Understand dynamic routing and route parameters
        ○ Learn about nested routes and route guards
        ○ Single Page Application (SPA) navigation and history
    • Styling:
        ○ Apply styles using multiple approaches for clean design
        ○ Explore CSS-in-JS libraries like Emotion or Styled Components
        ○ Learn about CSS modules and their benefits
        ○ Use Sass for advanced styling
        ○ Material-UI/Ant Design Framework: Leverage Material-UI/Ant Design for pre-designed components and consistent theming (in detail)

    • Redux/Context API:
        ○ Manage global state and structure application flow
        ○ Understand prop drilling and strategies to avoid it (e.g., Context API)
        ○ Use createContext, Provider, and Consumer for context management
        ○ Introduction to Redux: concepts of store, actions, reducers
        ○ Setting up Redux in a React app (basic example)
        ○ Using Redux DevTools for debugging
        ○ When to use Redux vs Context API

    • Performance Optimization (Intro):
        ○ Understand the basics of React.memo for optimizing component rendering (details in Advanced Track)

    • Tools for Performance Optimisation:
        ○ Explore tools like React Profiler, Chrome DevTools, Lighthouse, and Web Vitals for measuring and improving app performance
        ○ Analyze bundle size with Webpack Bundle Analyzer
        ○ Use code-splitting and lazy loading for better performance

    • Websockets & SSE (Server-Sent Events):
        ○ Understand real-time data communication in React apps
        ○ Use Websockets (e.g., socket.io-client) for bidirectional communication
        ○ Use Server-Sent Events for one-way real-time updates
        ○ Implement a simple chat or live notification feature

    • Visualisation:
        ○ Integrate charting and visualization libraries (e.g., Chart.js, Recharts, Victory, Nivo.Rocks)
        ○ Display data visually using charts, graphs, and dashboards
        ○ Best practices for visualizing large datasets

    • Type Checking:
        ○ Use PropTypes or TypeScript for type safety
    • Error Handling:
        ○ Understand and use Error Boundaries for catching errors in components (including getDerivedStateFromError)
        ○ Use React.StrictMode to identify unsafe lifecycle methods and potential issues
    • Accessibility (a11y):
        ○ Learn and apply basic accessibility practices in React apps

**Practice Assignments:**
    - Build a simple counter app using state and props.
    - Create a form with validation using controlled components.
    - Implement navigation between two pages using React Router.
    - Render a list of items with unique keys and add conditional rendering for empty states.
    - Add PropTypes or TypeScript to a component for type checking.
    - Fetch data from a public API and display it in a list, showing loading and error states.
    - Refactor a class component to a functional component using hooks.
    - Use Context API to manage theme (light/dark) across the app.
    - Style a component using both CSS modules and a CSS-in-JS library.
    - Write a custom hook for toggling a boolean value.
    - Add accessibility features (aria-labels, keyboard navigation) to your form.
    - Build a simple Redux-powered counter or todo app (actions, reducers, store, connect to React components).
    - Use React Profiler or Chrome DevTools to measure and optimize the performance of a component.
    - Analyze your app’s bundle size using Webpack Bundle Analyzer and identify large dependencies.
    - Implement a simple real-time chat or notification feature using Websockets or Server-Sent Events (SSE).
    - Add a chart or graph to your app using a visualization library (e.g., Chart.js, Recharts, Victory, or Nivo).
    - Add internationalization (i18n) to your app using react-i18next or FormatJS, and implement a language switcher.


## Section 3: Advanced Track

Objective: Equip learners with advanced patterns and tooling for scalable, performant, and testable applications.
Topics & Goals:
    • Custom Hooks: Abstract business logic into reusable functions
        ○ Learn how to create and use custom hooks effectively
        ○ Explore real-world examples of custom hooks
    • Performance Optimization: Use memoization and lazy loading to speed up rendering
        ○ Understand React.memo and useMemo for optimizing component rendering, including custom comparison functions
        ○ Optimize performance using useCallback and useMemo hooks
        ○ Implement code splitting using React.lazy and Suspense for dynamic imports
        ○ Implement lazy loading for components and assets
        ○ Explore techniques for reducing re-renders
    • Redux Toolkit:
        ○ Use Redux Toolkit for advanced Redux state management patterns and best practices
    • GraphQL:
        ○ Integrate React with GraphQL APIs for efficient data querying

    • Internationalization (i18n) & Multi-language Support:
        ○ Implement internationalization (i18n) and localization in React apps
        ○ Use libraries like react-i18next or FormatJS for multi-language support
        ○ Set up language switchers and manage translations
    • Firebase:
        ○ Integrate React applications with third-party backends such as Firebase for authentication and real-time databases
    • Webpack & Babel:
        ○ Understand manual React project setup using Webpack and Babel for custom configurations
    • TypeScript:
        ○ Use TypeScript with React for static type checking, including typing props, state, and components
    • Animations:
        ○ Add animations using libraries like Framer Motion or React Spring
    • Testing (Jest & RTL): Write robust unit and integration tests
        ○ Learn the basics of Jest and React Testing Library
        ○ Write test cases for components, hooks, and Redux
        ○ Understand mocking and testing asynchronous code
        ○ (Optional) Use Enzyme for testing legacy class components
    • Server-Side Rendering (SSR): Understand how Next.js improves SEO and performance
        ○ Learn the basics of SSR and its benefits
        ○ Explore Next.js features like static site generation (SSG) and incremental static regeneration (ISR)
        ○ Implement SSR in a sample project
    • Animations: Basic introduction to adding animations in React (CSS transitions, libraries like Framer Motion)
    • Portals: Render components outside the main DOM hierarchy using React Portals
    • Higher-Order Components (HOC): Implement HOCs for code reuse and abstraction
    • Render Props: Use the render props pattern for sharing code between components
    • PureComponent: Use React.PureComponent for optimizing class-based components
    • Portals: Render components outside the main DOM hierarchy using React Portals
    • Higher-Order Components (HOC): Implement HOCs for code reuse and abstraction
    • Render Props: Use the render props pattern for sharing code between components
    • PureComponent: Use React.PureComponent for optimizing class-based components
    • StrictMode: Use React.StrictMode to identify unsafe lifecycle methods and potential issues
    • Deployment: Host projects confidently using Netlify, Vercel or GitHub Pages
        ○ Learn the steps for deploying React applications
        ○ Understand CI/CD pipelines for automated deployment
        ○ Use environment variables for configuration and secrets
        ○ Deploy React apps using Vercel or Netlify
        ○ Explore deployment strategies for different hosting platforms

**Practice Assignments:**
- Refactor a component to use a custom hook.
- Optimize a list rendering with React.memo and useMemo.
- Write unit tests for a component using Jest and React Testing Library.
- Integrate Redux Toolkit for global state and add a feature (e.g., counter, todo list).
- Set up a simple GraphQL query using Apollo Client.
- Deploy your app to Netlify or Vercel and share the live link.
- Add an animation to a component using Framer Motion or React Spring.
- Implement server-side rendering with Next.js for a simple page.
- Add error boundaries to catch and display errors in a child component.
- Write tests for async data fetching and mocked API responses.



## Section 4: Training Videos

Here are the latest, high-quality React training videos (2024-2025):

- [React JS 19 Full Course 2025 | Build an App and Master React in 2 Hours](https://www.youtube.com/watch?v=dCLhUialKPQ) — Dive straight into React—from basic JSX to advanced hooks—and build a real, modern app in this hands-on crash course!
- [React JS 19 Crash Course - 2025 | Build and Deploy App](https://www.youtube.com/watch?v=GPWHql7scWc) — Fundamental topics of React and we will also build and deploy Meal Searching application with AI
- [React Tutorial for Beginners (React 19, 2025)](https://www.youtube.com/watch?v=-L0BSSQBWOI) — React Tutorial and React Course for beginners, build modern websites with React

## Section 5: Internet Resources

- [React Official Docs](https://react.dev/) — The official documentation for React.js.
- [GeeksforGeeks React JS Course](https://www.geeksforgeeks.org/reactjs-tutorials/) — Beginner to advanced React tutorials.
- [Learn React.JS in an interactive environment](https://react-tutorial.app) — Learn modern React from scratch, and practice in an intuitive environment.
- [Top 10+ Free ReactJS Books in PDF Format for Beginners](https://www.codewithfaraz.com/article/222/top-10-free-reactjs-books-in-pdf-format-for-beginners) — Find over 10 free ReactJS books in PDF format, ideal for beginners. Boost your ReactJS skills with these top resources.


## Section 6: Capstone Project Examples

Choose one or more of these for hands-on assignments. Each project should include:
- Project description
- Key features to implement
- Expected deliverables (code, demo, documentation)
- Evaluation criteria

**Examples:**
- **E-commerce App** – Product listing, cart, checkout flow
- **Weather App** – API integration, conditional rendering
- **Blog Platform** – CRUD operations, routing, form handling
- **Stock Tracker** – Redux + API + testing (Stock API Capstone)
- **Little Lemon Restaurant Reservation App** – Full-stack project from Meta’s React certification


## Section 7: Certification Courses

- **Udemy:**
    - [React - The Complete Guide 2025 (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) — Beginner to Advanced, ~48 hours
    - [The Ultimate React Course 2025: React, Next.js, Redux & More](https://www.udemy.com/course/the-ultimate-react-course/) — Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns
    - [Complete React, Next.js & TypeScript Projects Course 2025](https://www.udemy.com/course/react-tutorial-and-projects-course) — Hands-on React: 25+ Projects Featuring Next.js, TypeScript, Prisma, Zod, Shadcn, Axios, Router 6, Query 5, Redux Toolkit
- **Coursera:**
    - [Meta React Basics](https://www.coursera.org/learn/react-basics) — Beginner level
    - [Meta Advanced React](https://www.coursera.org/learn/advanced-react) — Intermediate level

## Section 8: Reference

- [React Official Documentation](https://react.dev/)
- [React Patterns](https://reactpatterns.com/)
- [Awesome React (GitHub)](https://github.com/enaqx/awesome-react)
- [React Community Discussions (Dev.to)](https://dev.to/t/react)
- [Reactiflux Discord Community](https://www.reactiflux.com/)

---

