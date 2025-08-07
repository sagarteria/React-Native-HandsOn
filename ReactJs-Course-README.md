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


## Suggested Weekly Timeline & Progress Tracker


Below is a condensed 11-week timeline for the React.js Onboarding Course. Each week covers specific sections, topics, and subtopics. Instructors can use this as a checklist to track learner progress.

| Week | Section/Topic | Subtopics/Assignments (with Section References) |
|------|---------------|----------------------|
| 0    | Common: Web Fundamentals (Pre-requisite) | **Common: Web Fundamentals** — HTML, CSS, JavaScript basics, DOM, ES6+, Accessibility |
| 1    | Section 1: Getting Started with React | **Section 1: Getting Started with React** — What is React, Virtual DOM, JSX vs JS, Setup (Node, npm, VS Code), Project scaffolding, React DevTools, Hello React app, SPA concept |
| 2    | Section 2: Foundation Track | **Section 2: ES6+ JavaScript Features, JSX & Components, State & Props, List & Conditional Rendering** — ES6+ in React, JSX & Components, Functional vs Class Components, Folder structure, Containers vs Presentational, Fragments, JS in JSX, State & Props, Lifting state, Default props, List & Conditional Rendering, Keys |
| 3    | Section 2: Foundation Track | **Section 2: Hooks, API Calling & Data Fetching, Events & Forms** — Hooks (useState, useEffect, useRef, useContext, useReducer), Custom hooks, Refs, useImperativeHandle, API Calling & Data Fetching, useEffect for fetch, Loading/Error states, Async/await, Events & Forms, Controlled/Uncontrolled, Formik/React Hook Form |
| 4    | Section 2: Foundation Track | **Section 2: Routing** — Routing (React Router v6), Dynamic/Nested routes |
| 5    | Section 2: Foundation Track | **Section 2: Styling, Redux/Context API** — Styling (CSS-in-JS, CSS Modules, Sass, Material-UI/Ant Design), Redux/Context API, Prop drilling, createContext, Provider, Consumer, Redux basics, Redux DevTools, When to use Redux vs Context |
| 6    | Section 2: Foundation Track | **Section 2: Performance Optimization, Tools, Websockets & SSE** — Performance Optimization (Intro), Tools for Performance Optimisation, Websockets & SSE (socket.io-client, SSE, chat/notification feature) |
| 7    | Section 2: Foundation Track | **Section 2: Visualisation, Type Checking, Error Handling, Accessibility** — Visualisation (Chart.js, Recharts, Victory, Nivo), Type Checking (PropTypes, TypeScript), Error Handling (Error Boundaries, StrictMode), Accessibility |
| 8    | Section 3: Advanced Track | **Section 3: Custom Hooks, Performance Optimization, Redux Toolkit, GraphQL, Firebase, Internationalization (i18n) & Multi-language Support** — Custom Hooks, Performance Optimization (memo, useMemo, useCallback, code splitting, lazy loading), Redux Toolkit, GraphQL, Firebase, Internationalization (i18n) & Multi-language Support |
| 9    | Section 3: Advanced Track | **Section 3: Webpack & Babel, TypeScript, Animations** — Webpack & Babel, TypeScript, Animations (Framer Motion, React Spring) |
| 10   | Section 3: Advanced Track | **Section 3: Testing (Jest & RTL), Server-Side Rendering (SSR), Portals** — Testing (Jest & RTL), Server-Side Rendering (SSR), Portals |
| 11   | Section 3: Advanced Track | **Section 3: Higher-Order Components (HOC), Render Props, PureComponent, StrictMode** — Higher-Order Components (HOC), Render Props, PureComponent, StrictMode |
| 12   | Section 3: Advanced Track | **Section 3: Deployment, CI/CD, Env variables, Capstone, Certification prep** — Deployment (Netlify, Vercel, GitHub Pages), CI/CD, Env variables, Capstone project, Review, Q&A, Certification prep |

**Note:** Learners may progress faster or slower depending on prior experience. Instructors can adjust the pace and track completion of each week’s checklist.

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


    2.1 Objective: Enable learners to understand and build React applications using core concepts like JSX, components, hooks, and routing.
    2.2 Topics & Goals:
        2.2.1 ES6+ JavaScript Features:
            ○ Use classes, arrow functions, destructuring, and modules as used in React
            ○ Reference Links:
                - freeCodeCamp: How to use ES6 features in React (modules, destructuring, spread, arrow functions, template literals) - https://www.freecodecamp.org/news/how-to-use-es6-javascript-features-in-react/
                - W3Schools: React ES6 essentials (classes, arrow functions, map, destructuring, modules, ternary, spread) - https://www.w3schools.com/react/react_es6.asp
                - ExpertBeacon: How to use ES6 features in React (why ES6 matters in React, practical patterns) - https://expertbeacon.com/how-to-use-es6-features-in-react/
        2.2.2 JSX & Components:
            ○ Build modular UI using reusable React components
            ○ Understand the difference between functional and class components
            ○ Learn best practices for component structure and naming conventions
            ○ Understand basic folder/project structure for React apps
            ○ Containers vs Presentational Components: Understand separation of concerns
            ○ Use React Fragments to group elements without extra DOM nodes
            ○ JS Expressions in JSX: Embedding JavaScript logic in UI
            ○ Default input values in forms and components
            ○ Reference Links:
                - OpenClassrooms: Write modular code with components in JSX (JSX rules, component composition, thinking in components) - https://openclassrooms.com/en/courses/7132446-create-a-web-application-with-react-js/7206436-write-modular-code-with-components-in-jsx
                - ScroBits: Mastering JSX in React — building reusable and interactive UI components (best practices) - https://www.scrobits.com/blog/mastering-jsx-in-react-building-reusable-and-interactive-ui-components
                - GeeksforGeeks: How to make reusable React components (props, composition, memoization tips) -https://www.geeksforgeeks.org/reactjs/how-to-make-reusable-react-components/
                - React (Accessibility docs) — Fragments examples for grouping without extra DOM wrappers (also shows keyed fragments) - https://legacy.reactjs.org/docs/accessibility.html
                - Accessibility in ReactJS - https://www.geeksforgeeks.org/reactjs/accessibility-in-reactjs/
                - Accessibility in React: Best Practices for Building Inclusive Web Apps - https://medium.com/@ignatovich.dm/accessibility-in-react-best-practices-for-building-inclusive-web-apps-906d1cbedd27
                - Accessibility in React - https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility
                - ReactJS - Accessibility - https://www.tutorialspoint.com/reactjs/reactjs_accessibility.htm

        2.2.3 State & Props:
            ○ Manage component state effectively
            ○ Pass data between components using props
            ○ Understand the concept of lifting state up
            ○ Use default props and destructuring
            ○ Reference Links:
                - React.dev: Sharing state between components (lifting state up; controlled vs uncontrolled overview) - https://react.dev/learn/sharing-state-between-components
                - GeeksforGeeks: Lifting state up in ReactJS (when and how, step-by-step) - https://www.geeksforgeeks.org/reactjs/lifting-state-up-in-reactjs/
                - ReactTutorial: Props and state management in React (intro-friendly walkthrough) - https://www.reacttutorial.com/props-and-state-management-in-react

        2.2.4 List & Conditional Rendering:
            ○ Render lists of components using map
            ○ Understand the importance of keys in lists and why not to use index as key unless necessary
            ○ Implement conditional rendering (ternary, &&, etc.)
            ○ Reference Links:
                - DEV Community: Conditional rendering and rendering lists in React (&&, ternary, keys, why not use index) - https://dev.to/debajit13/conditional-rendering-and-rendering-list-in-react-4886
                - GeeksforGeeks: React conditional rendering (if/else, ternary, &&, lists) - https://www.geeksforgeeks.org/reactjs/reactjs-conditional-rendering/

        2.2.5 Hooks (useState, useEffect, useRef):
            ○ Introduction to React component lifecycle (with hooks)
            ○ Handle component lifecycles and local state
            ○ Explore additional hooks like useContext, useReducer, and useRef
            ○ Learn when and how to use custom hooks
            ○ Use refs and forward refs to access and manipulate DOM nodes
            ○ Use useImperativeHandle to customize instance values exposed to parent components
            ○ Reference Links:
                - freeCodeCamp: useEffect, useState, and useContext — code examples for beginners - https://www.freecodecamp.org/news/react-hooks-useeffect-usestate-and-usecontext/
                - AlmaBetter: React hooks — useState, useEffect, useRef, custom hooks overview - https://www.almabetter.com/bytes/tutorials/reactjs/reactjs-hooks
                - Codecademy: How to use hooks in React with examples (core hooks, patterns, benefits) - https://www.codecademy.com/article/how-to-use-hooks-in-react-js-with-examples

        2.2.6 API Calling & Data Fetching:
            ○ Fetch data from APIs using fetch or Axios (in detail)
            ○ Use useEffect for data fetching on mount
            ○ Handle loading and error states
            ○ Use async/await for asynchronous operations
            ○ Understand best practices for separating data fetching logic
            ○ Reference Links:
                - GeeksforGeeks: Fetching data from an API with useEffect and useState (patterns, examples) - https://www.geeksforgeeks.org/reactjs/fetching-data-from-an-api-with-useeffect-and-usestate-hook/
                - CodingTag: Using useEffect with async data fetching (correct async pattern, loading/error state, AbortController) - https://www.codingtag.com/using-it-with-async-data-fetching

        2.2.7 Events & Forms:
            ○ Implement user interactions and validate inputs
            ○ Understand controlled vs uncontrolled components
            ○ Learn form handling libraries like Formik or React Hook Form
            ○ Sharing events and data between components
            ○ Reference Links:
                - DEV Community: The ultimate guide to handling forms in React (controlled vs uncontrolled, Formik, React Hook Form, validation) - https://dev.to/marie_berezhna/the-ultimate-guide-to-handling-forms-in-react-1n2o
                - React Hook Form docs: useForm API (validation modes, default values, schema resolvers) - https://www.react-hook-form.com/api/useform/
                - freeCodeCamp: Controlled vs uncontrolled components in React (when to use which, examples) - https://www.freecodecamp.org/news/what-are-controlled-and-uncontrolled-components-in-react/

        2.2.8 Routing:
            ○ Navigate across views/pages using React Router v6
            ○ Understand dynamic routing and route parameters
            ○ Learn about nested routes and route guards
            ○ Single Page Application (SPA) navigation and history
            ○ Reference Links:
                - CodingEasyPeasy: React Router v6 — dynamic routing, basics to nested routes, hooks - https://www.codingeasypeasy.com/blog/react-router-v6-the-ultimate-guide-for-dynamic-routing-in-react-applications
                - ui.dev: The guide to nested routes with React Router (Routes, Route, Outlet mental models) - https://ui.dev/react-router-nested-routes

        2.2.9 Styling:
            ○ Apply styles using multiple approaches for clean design
            ○ Explore CSS-in-JS libraries like Emotion or Styled Components
            ○ Learn about CSS modules and their benefits
            ○ Use Sass for advanced styling
            ○ Material-UI/Ant Design Framework: Leverage Material-UI/Ant Design for pre-designed components and consistent theming (in detail)
            ○ Reference Links:
                - Emotion docs: Introduction to Emotion (css prop, styled API, theming, SSR) - https://emotion.sh/docs/introduction
                - Material UI docs: Style library interoperability (Emotion default engine, styled-components, CSS injection order) - https://mui.com/material-ui/integrations/interoperability/
                - DEV Community: CSS‑in‑JS guide to styled‑components and Emotion (clean, scalable styling) - https://dev.to/okoye_ndidiamaka_5e3b7d30/css-in-js-complete-guide-to-styled-components-emotion-and-more-for-cleaner-and-scalable-styling-33dk
                - GeeksforGeeks: React Material UI - https://www.geeksforgeeks.org/reactjs/react-material-ui/
                - Tutorialspoint: ReactJS - Material UI - https://www.tutorialspoint.com/reactjs/reactjs_material_ui.htm
                - Material UI: https://mui.com/material-ui/
                - Ant Design: https://ant.design/

        2.2.10 Redux/Context API:
            ○ Manage global state and structure application flow
            ○ Understand prop drilling and strategies to avoid it (e.g., Context API)
            ○ Use createContext, Provider, and Consumer for context management
            ○ Introduction to Redux: concepts of store, actions, reducers
            ○ Setting up Redux in a React app (basic example)
            ○ Using Redux DevTools for debugging
            ○ When to use Redux vs Context API
            ○ Reference Links:
                - GeeksforGeeks: State management in React — Hooks, Context API and Redux (when to use each) - https://www.geeksforgeeks.org/reactjs/state-management-in-react-hooks-context-api-and-redux/
                - DEV Community: Redux vs Context API — when to use them (tradeoffs and scenarios) - https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p
                - CodezUp: Mastering React state management — Context API & Redux (setup and best practices) - https://codezup.com/mastering-react-state-management-context-api-redux/

        2.2.11 Performance Optimization (Intro):
            ○ Understand the basics of React.memo for optimizing component rendering (details in Advanced Track)
            ○ Reference Links:
                - DEV Community: Optimizing React performance with React.memo, useCallback, and useMemo (prevent unnecessary re‑renders) - https://dev.to/willon/optimizing-react-performance-with-reactmemo-usecallback-and-usememo-3ghk
                - GeeksforGeeks: How does React.memo optimize functional components (when and how) - https://www.geeksforgeeks.org/reactjs/how-does-react-memo-optimize-functional-components-in-react/

        2.2.12 Tools for Performance Optimisation:
            ○ Explore tools like React Profiler, Chrome DevTools, Lighthouse, and Web Vitals for measuring and improving app performance
            ○ Analyze bundle size with Webpack Bundle Analyzer
            ○ Use code-splitting and lazy loading for better performance
            ○ Reference Links:
                - Chrome Developers: Analyze runtime performance with Chrome DevTools Performance panel (FPS, CPU, flame charts) - https://developer.chrome.com/docs/devtools/performance
                - web.dev (Google): Optimizing Web Vitals using Lighthouse (Core Web Vitals, diagnostics, screenshots) - https://web.dev/articles/optimize-vitals-lighthouse
                - DEV Community: Understanding Lighthouse, Web Vitals & PageSpeed reports (React/Next.js fixes) - https://dev.to/maurya-sachin/understanding-lighthouse-web-vitals-pagespeed-reports-4ji8

        2.2.13 Websockets & SSE (Server-Sent Events):
            ○ Understand real-time data communication in React apps
            ○ Use Websockets (e.g., socket.io-client) for bidirectional communication
            ○ Use Server-Sent Events for one-way real-time updates
            ○ Implement a simple chat or live notification feature
            ○ Reference Links:
                - LogRocket: React WebSocket tutorial — real‑time messaging with WebSockets and Socket.IO (concepts + React hooks) - https://blog.logrocket.com/websocket-tutorial-socket-io/
                - GeeksforGeeks: Real‑time updates with WebSockets and React hooks (server + client walkthrough) - https://www.geeksforgeeks.org/reactjs/real-time-updates-with-websockets-and-react-hooks/
                - CodezUp: Building a React app with real‑time data feed using WebSockets (server, client, best practices) - https://codezup.com/react-application-real-time-data-feed-websockets/

        2.2.14 Visualisation:
            ○ Integrate charting and visualization libraries (e.g., Chart.js, Recharts, Victory, Nivo.Rocks)
            ○ Display data visually using charts, graphs, and dashboards
            ○ Best practices for visualizing large datasets
            ○ Reference Links:
                - npm‑compare: JavaScript charting libraries comparison (Chart.js, Recharts, ECharts, ApexCharts, Victory, etc.) - https://npm-compare.com/apexcharts,billboard.js,chart.js,chartist,echarts,recharts,victory-chart
                - Monterail: Top JavaScript graph visualization libraries (pros/cons, selection criteria) - https://www.monterail.com/blog/javascript-libraries-data-visualization
                - Victory: Official page — React charting components and getting started - https://awesome.cube.dev/tools/victory
                - Recharts - https://recharts.org/en-US
                - Nivo.Rocks - https://nivo.rocks/
                - Chartjs - https://www.chartjs.org/
                - Syncfusion - How To Render Large Datasets In React without Killing Performance - https://www.syncfusion.com/blogs/post/render-large-datasets-in-react
                - Ways to render large datasets in React - https://blog.logrocket.com/3-ways-render-large-datasets-react/

        2.2.15 Type Checking:
            ○ Use PropTypes or TypeScript for type safety
            ○ Reference Links:
                - DEV Community: One‑stop guide to type safety in TypeScript (type checks, guards, unions, runtime validation) - https://dev.to/devcorner/one-stop-guide-to-type-safety-in-typescript-all-ways-to-perform-type-checks-30em
                - GeeksforGeeks: How to check types in TypeScript (typeof, instanceof, custom type guards) - https://www.geeksforgeeks.org/typescript/how-to-check-types-in-typescript/

        2.2.16 Error Handling:
            ○ Understand and use Error Boundaries for catching errors in components (including getDerivedStateFromError)
            ○ Use React.StrictMode to identify unsafe lifecycle methods and potential issues
            ○ Reference Links:
                - GeeksforGeeks: React.js Error Boundaries (what they catch, implementation, examples) - https://www.geeksforgeeks.org/reactjs/react-js-error-boundaries/
                - LogRocket: React error handling with react‑error‑boundary (modern error boundaries, async considerations) - https://blog.logrocket.com/react-error-handling-react-error-boundary/
                - DEV Community: Exploring Error Boundary in React (limitations, fallback UI, best practices) - https://dev.to/m_midas/exploring-error-boundary-in-react-enhancing-robustness-and-error-handling-3457

        2.2.17 Accessibility (a11y):
            ○ Learn and apply basic accessibility practices in React apps
            ○ Reference Links:
                - React (Accessibility docs): WCAG and WAI‑ARIA, semantic HTML, fragments, forms, focus management - https://legacy.reactjs.org/docs/accessibility.html
                - DEV Community: A deep dive into web accessibility (a11y) for React developers (ARIA, keyboard nav, contrast, tools) - https://dev.to/ayusharpcoder/a-deep-dive-into-web-accessibility-a11y-for-react-developers-58nh
                - Trailhead Technology: Accessible React apps — a11y best practices and tools (linting, testing, automation) - https://trailheadtechnology.com/accessible-react-apps-a-guide-to-a11y-best-practices-and-tools/

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

    3.1 Objective: Equip learners with advanced patterns and tooling for scalable, performant, and testable applications.
    3.2 Topics & Goals:
        3.2.1 Custom Hooks: Abstract business logic into reusable functions
            ○ Learn how to create and use custom hooks effectively
            ○ Explore real-world examples of custom hooks
        3.2.2 Performance Optimization: Use memoization and lazy loading to speed up rendering
            ○ Understand React.memo and useMemo for optimizing component rendering, including custom comparison functions
            ○ Optimize performance using useCallback and useMemo hooks
            ○ Implement code splitting using React.lazy and Suspense for dynamic imports
            ○ Implement lazy loading for components and assets
            ○ Explore techniques for reducing re-renders

        3.2.3 Redux Toolkit:
            ○ Use Redux Toolkit for advanced Redux state management patterns and best practices

        3.2.4 GraphQL:
            ○ Integrate React with GraphQL APIs for efficient data querying

        3.2.5 Firebase:
            ○ Integrate React applications with third-party backends such as Firebase for authentication and real-time databases

        3.2.6 Internationalization (i18n) & Multi-language Support:
            ○ Implement internationalization (i18n) and localization in React apps
            ○ Use libraries like react-i18next or FormatJS for multi-language support
            ○ Set up language switchers and manage translations

        3.2.7 Webpack & Babel:
            ○ Understand manual React project setup using Webpack and Babel for custom configurations

        3.2.8 TypeScript:
            ○ Use TypeScript with React for static type checking, including typing props, state, and components

        3.2.9 Animations:
            ○ Add animations using libraries like Framer Motion or React Spring

        3.2.10 Testing (Jest & RTL): Write robust unit and integration tests
            ○ Learn the basics of Jest and React Testing Library
            ○ Write test cases for components, hooks, and Redux
            ○ Understand mocking and testing asynchronous code
            ○ (Optional) Use Enzyme for testing legacy class components

        3.2.11 Server-Side Rendering (SSR): Understand how Next.js improves SEO and performance
            ○ Learn the basics of SSR and its benefits
            ○ Explore Next.js features like static site generation (SSG) and incremental static regeneration (ISR)
            ○ Implement SSR in a sample project

        3.2.12 Animations (CSS transitions, libraries like Framer Motion):
            ○ Basic introduction to adding animations in React

        3.2.13 Portals:
            ○ Render components outside the main DOM hierarchy using React Portals

        3.2.14 Higher-Order Components (HOC):
            ○ Implement HOCs for code reuse and abstraction

        3.2.15 Render Props:
            ○ Use the render props pattern for sharing code between components

        3.2.16 PureComponent:
            ○ Use React.PureComponent for optimizing class-based components

        3.2.17 StrictMode:
            ○ Use React.StrictMode to identify unsafe lifecycle methods and potential issues

        3.2.18 Deployment:
            ○ Host projects confidently using Netlify, Vercel or GitHub Pages
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

