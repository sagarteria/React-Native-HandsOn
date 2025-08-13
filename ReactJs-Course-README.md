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

**Section: 1 - HTML (HyperText Markup Language):**
    **1.1 Objective:**
        Learn the foundational building blocks of web pages and how to create accessible, semantic HTML structures.
    **1.2 Topics & Goals:**
        1.2.1 Structure and semantics of web pages
        **Reference Links:**
            - MDN: HTML Introduction & Structure - https://developer.mozilla.org/en-US/docs/Web/HTML
            - freeCodeCamp: Semantic HTML Explained - https://www.freecodecamp.org/news/semantic-html5-elements/
            - W3Schools: HTML Page Structure - https://www.w3schools.com/html/html_intro.asp
        **Practice Assignment:**
            - Create a simple HTML page with a header, main content, and footer. Use semantic tags appropriately.
            - Add a title and meta description to the page.
        1.2.2 Common tags and attributes
        **Reference Links:**
            - MDN: HTML Elements Reference - https://developer.mozilla.org/en-US/docs/Web/HTML/Element
            - W3Schools: HTML Tags List - https://www.w3schools.com/tags/default.asp
            - HTML.com: Common HTML Tags - https://html.com/tags/
        **Practice Assignment:**
            - List five commonly used HTML tags and write a sample usage for each.
            - Add alt text to an image and use at least three different attributes in a tag.
        1.2.3 Forms and input elements
        **Reference Links:**
            - MDN: HTML Forms Guide - https://developer.mozilla.org/en-US/docs/Learn/Forms
            - W3Schools: HTML Forms - https://www.w3schools.com/html/html_forms.asp
            - freeCodeCamp: HTML Forms Tutorial - https://www.freecodecamp.org/news/how-to-use-html-forms/
        **Practice Assignment:**
            - Build a contact form with input fields for name, email, and message. Add a submit button.
            - Use label and input elements, and ensure accessibility with proper attributes.
        1.2.4 Semantic tags (header, nav, main, footer)
        **Reference Links:**
            - MDN: Semantic HTML Elements - https://developer.mozilla.org/en-US/docs/Glossary/Semantics
            - W3Schools: Semantic Elements - https://www.w3schools.com/html/html5_semantic_elements.asp
            - HTML.com: Semantic Tags - https://html.com/semantic-markup/
        **Practice Assignment:**
            - Refactor a non-semantic HTML layout to use semantic tags (header, nav, main, footer).
            - Explain the benefits of semantic tags for accessibility and SEO.
        1.2.5 Tables for data display
        **Reference Links:**
            - MDN: HTML Tables - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
            - W3Schools: HTML Tables - https://www.w3schools.com/html/html_tables.asp
            - freeCodeCamp: How to Build Tables in HTML - https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/
        **Practice Assignment:**
            - Create a table to display a list of products (name, price, category).
            - Add a caption and use thead, tbody, and tfoot elements.
        1.2.6 Embedding media (images, video, audio)
        **Reference Links:**
            - MDN: Embedding Images, Video, Audio - https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding
            - W3Schools: HTML Media - https://www.w3schools.com/html/html_media.asp
            - HTML.com: Embedding Media - https://html.com/media/
        **Practice Assignment:**
            - Embed an image, a video, and an audio file in a web page.
            - Use controls for video and audio, and add alt text for images.
        1.2.7 Accessibility basics (alt text, ARIA attributes)
        **Reference Links:**
            - MDN: Accessibility - https://developer.mozilla.org/en-US/docs/Web/Accessibility
            - W3Schools: HTML Accessibility - https://www.w3schools.com/accessibility/index.php
            - WebAIM: Alternative Text Basics - https://webaim.org/techniques/alttext/
        **Practice Assignment:**
            - Add alt text to all images and use ARIA attributes in a form.
            - Test your page with a screen reader or accessibility tool and note improvements.

**Section: 2 - CSS (Cascading Style Sheets):**
    **2.1 Objective:**
        Understand how to style and layout web pages for modern, responsive, and visually appealing user interfaces.
    **2.2 Topics & Goals:**

        2.2.1 Styling basics (selectors, properties, values)
        **Reference Links:**
            - MDN: CSS Basics - https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps
            - W3Schools: CSS Selectors - https://www.w3schools.com/css/css_selectors.asp
            - CSS-Tricks: CSS Selectors Reference - https://css-tricks.com/almanac/selectors/
        **Practice Assignment:**
            - Create a stylesheet to style headings, paragraphs, and links using different selectors.
            - Change the color, font, and spacing of text elements.
        2.2.2 Box model and layout techniques
        **Reference Links:**
            - MDN: CSS Box Model - https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
            - W3Schools: CSS Box Model - https://www.w3schools.com/css/css_boxmodel.asp
            - freeCodeCamp: CSS Box Model Explained - https://www.freecodecamp.org/news/css-box-model-explained-with-examples/
        **Practice Assignment:**
            - Create a card layout using divs and apply padding, margin, and border.
            - Use developer tools to inspect and adjust the box model properties.
        2.2.3 Responsive design principles
        **Reference Links:**
            - MDN: Responsive Design - https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
            - W3Schools: Responsive Web Design - https://www.w3schools.com/css/css_rwd_intro.asp
            - CSS-Tricks: Responsive Web Design Basics - https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
        **Practice Assignment:**
            - Make a web page layout that adapts to mobile and desktop screens.
            - Use percentage widths and max-width for images and containers.
        2.2.4 Flexbox and Grid for layout
        **Reference Links:**
            - MDN: CSS Flexbox - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
            - MDN: CSS Grid - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
            - CSS-Tricks: A Complete Guide to Flexbox - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
            - CSS-Tricks: A Complete Guide to Grid - https://css-tricks.com/snippets/css/complete-guide-grid/
        **Practice Assignment:**
            - Build a navigation bar using Flexbox.
            - Create a simple photo gallery layout using CSS Grid.
        2.2.5 CSS transitions and basic animations
        **Reference Links:**
            - MDN: CSS Transitions - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
            - MDN: CSS Animations - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
            - W3Schools: CSS Animation - https://www.w3schools.com/css/css3_animations.asp
        **Practice Assignment:**
            - Add a hover effect to buttons using CSS transitions.
            - Animate an element to move or fade in using keyframes.
        2.2.6 CSS variables
        **Reference Links:**
            - MDN: CSS Variables - https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
            - W3Schools: CSS Variables - https://www.w3schools.com/css/css3_variables.asp
            - CSS-Tricks: CSS Custom Properties - https://css-tricks.com/css-variables/
        **Practice Assignment:**
            - Define and use CSS variables for colors and spacing in a stylesheet.
            - Change a variable value to update the theme of your page.
        2.2.7 Media queries for responsiveness
        **Reference Links:**
            - MDN: Media Queries - https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries
            - W3Schools: CSS Media Queries - https://www.w3schools.com/css/css_rwd_mediaqueries.asp
            - CSS-Tricks: Media Queries for Standard Devices - https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
        **Practice Assignment:**
            - Write a media query to change the background color for screens smaller than 600px.
            - Hide or show elements based on device width using media queries.
        2.2.8 Specificity and cascade
        **Reference Links:**
            - MDN: CSS Specificity - https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
            - W3Schools: CSS Specificity - https://www.w3schools.com/css/css_specificity.asp
            - CSS-Tricks: CSS Specificity Wars - https://css-tricks.com/specifics-on-css-specificity/
        **Practice Assignment:**
            - Experiment with conflicting styles and use specificity to control which rule applies.
            - Explain the cascade order for a set of CSS rules in your stylesheet.

**Section: 3 - JavaScript:**
    **3.1 Objective:**
        Gain the skills to add interactivity, logic, and dynamic behavior to web pages using modern JavaScript.
    **3.2 Topics & Goals:**

        3.2.1 Variables, data types, and operators
        **Reference Links:**
            - MDN: JavaScript Basics - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
            - W3Schools: JavaScript Data Types - https://www.w3schools.com/js/js_datatypes.asp
            - freeCodeCamp: JavaScript Variables and Data Types - https://www.freecodecamp.org/news/javascript-data-types-typeof-explained/
        **Practice Assignment:**
            - Declare variables using let, const, and var. Assign different data types and use basic operators.
            - Write a function to add two numbers and display the result.
        3.2.2 Functions, loops, and conditionals
        **Reference Links:**
            - MDN: Functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
            - MDN: Loops and Iteration - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
            - W3Schools: JavaScript Functions - https://www.w3schools.com/js/js_functions.asp
            - W3Schools: JavaScript Loops - https://www.w3schools.com/js/js_loop_for.asp
            - W3Schools: JavaScript If...Else - https://www.w3schools.com/js/js_if_else.asp
        **Practice Assignment:**
            - Write a function that checks if a number is even or odd using conditionals.
            - Loop through an array and print each value to the console.
        3.2.3 Arrays and objects
        **Reference Links:**
            - MDN: Arrays - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
            - MDN: Objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
            - W3Schools: JavaScript Arrays - https://www.w3schools.com/js/js_arrays.asp
            - W3Schools: JavaScript Objects - https://www.w3schools.com/js/js_objects.asp
        **Practice Assignment:**
            - Create an array of colors and add/remove items using array methods.
            - Create an object to represent a person (name, age, city) and access its properties.
        3.2.4 JSON basics
        **Reference Links:**
            - MDN: JSON - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
            - W3Schools: JSON Introduction - https://www.w3schools.com/js/js_json_intro.asp
            - freeCodeCamp: What is JSON? - https://www.freecodecamp.org/news/what-is-json-a-json-file-example/
        **Practice Assignment:**
            - Convert a JavaScript object to a JSON string and back.
            - Parse a sample JSON response and access its data.
        3.2.5 DOM manipulation and event handling
        **Reference Links:**
            - MDN: Introduction to the DOM - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
            - MDN: Using the Document Object Model - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model
            - W3Schools: JavaScript HTML DOM - https://www.w3schools.com/js/js_htmldom.asp
            - freeCodeCamp: JavaScript DOM Tutorial - https://www.freecodecamp.org/news/dom-manipulation-in-javascript/
        **Practice Assignment:**
            - Select an element by ID and change its text content using JavaScript.
            - Add a button to your page and display an alert when it is clicked.
        3.2.6 ES6+ features (let/const, arrow functions, template literals)
        **Reference Links:**
            - MDN: ES6 Features - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
            - MDN: Arrow Functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
            - MDN: Template Literals - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            - W3Schools: ES6 Tutorial - https://www.w3schools.com/js/js_es6.asp
        **Practice Assignment:**
            - Rewrite a regular function as an arrow function.
            - Use template literals to create a greeting message with variables.
        3.2.7 Event listeners
        **Reference Links:**
            - MDN: EventTarget.addEventListener() - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
            - W3Schools: JavaScript Events - https://www.w3schools.com/js/js_events.asp
            - freeCodeCamp: JavaScript Event Listeners Explained - https://www.freecodecamp.org/news/dom-events-and-javascript-event-listeners/
        **Practice Assignment:**
            - Add a click event listener to a button and log a message to the console.
            - Add a mouseover event to change the color of an element when hovered.
        3.2.8 Scope and hoisting
        **Reference Links:**
            - MDN: Variable Scope - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope
            - MDN: Hoisting - https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
            - W3Schools: JavaScript Scope - https://www.w3schools.com/js/js_scope.asp
            - W3Schools: JavaScript Hoisting - https://www.w3schools.com/js/js_hoisting.asp
        **Practice Assignment:**
            - Demonstrate variable scope by declaring variables inside and outside a function.
            - Show the effect of hoisting with a function and variable declaration.
        3.2.9 Basic error handling (try/catch)
        **Reference Links:**
            - MDN: Error Handling - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements
            - W3Schools: JavaScript Errors - https://www.w3schools.com/js/js_errors.asp
            - freeCodeCamp: JavaScript Error Handling - https://www.freecodecamp.org/news/the-javascript-error-handling-handbook/
        **Practice Assignment:**
            - Write a function that throws an error for invalid input and catches it using try/catch.
            - Log the error message to the console.
        3.2.10 Basic debugging (console.log)
        **Reference Links:**
            - MDN: Debugging JavaScript - https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript
            - W3Schools: JavaScript Debugging - https://www.w3schools.com/js/js_debugging.asp
            - freeCodeCamp: How to Debug JavaScript - https://www.freecodecamp.org/news/how-to-use-developer-tools-to-debug-javascript-in-the-browser/
        **Practice Assignment:**
            - Use console.log to debug a function and display variable values.
            - Find and fix a bug in a sample code snippet using browser DevTools.

**Section: 4 - TypeScript:**
    **4.1 Objective:**
        Learn the basics of TypeScript and how to use it for type safety, maintainability, and scalability in modern web applications.
    **4.2 Topics & Goals:**
        4.2.1 What is TypeScript? Why use it?
            - TypeScript Official: Introduction - https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
            - freeCodeCamp: What is TypeScript? - https://www.freecodecamp.org/news/what-is-typescript/
            - W3Schools: TypeScript Overview - https://www.w3schools.com/typescript/index.php
                **Practice Assignment:**
                - Write a short note on why TypeScript is useful for web development.
                - Install TypeScript in a project and compile a simple .ts file.
        4.2.2 Type annotations and basic types (string, number, boolean, array, object)
            - TypeScript Official: Basic Types - https://www.typescriptlang.org/docs/handbook/basic-types.html
            - W3Schools: TypeScript Types - https://www.w3schools.com/typescript/typescript_simple_types.php
            - TutorialsPoint: TypeScript Types - https://www.tutorialspoint.com/typescript/typescript_types.htm
                **Practice Assignment:**
                - Declare variables with explicit types (string, number, boolean, array, object).
                - Write a function that takes typed parameters and returns a typed value.
        4.2.3 Interfaces and type aliases
            - TypeScript Official: Interfaces - https://www.typescriptlang.org/docs/handbook/interfaces.html
            - TypeScript Official: Type Aliases - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
            - W3Schools: TypeScript Interfaces - https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
                **Practice Assignment:**
                - Create an interface for a User object and use it in a function.
                - Define a type alias for a union type and use it in a variable declaration.
        4.2.4 Functions and parameter typing
            - TypeScript Official: Functions - https://www.typescriptlang.org/docs/handbook/functions.html
            - TutorialsTeacher: TypeScript Functions - https://www.tutorialsteacher.com/typescript/typescript-function
            - W3Schools: TypeScript Functions - https://www.w3schools.com/typescript/typescript_functions.php
                **Practice Assignment:**
                - Write a function with typed parameters and a typed return value.
                - Use optional and default parameters in a TypeScript function.
        4.2.5 Classes and object-oriented features
            - TypeScript Official: Classes - https://www.typescriptlang.org/docs/handbook/classes.html
            - TutorialsTeacher: TypeScript Classes - https://www.tutorialsteacher.com/typescript/typescript-class
            - W3Schools: TypeScript Classes - https://www.w3schools.com/typescript/typescript_classes.php
                **Practice Assignment:**
                - Create a class with properties and methods, and instantiate it.
                - Use access modifiers (public, private, protected) in a class.
        4.2.6 Type inference and type assertions
            - TypeScript Official: Type Inference - https://www.typescriptlang.org/docs/handbook/type-inference.html
            - TypeScript Official: Type Assertions - https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
            - TutorialsTeacher: TypeScript Type Assertion - https://www.tutorialsteacher.com/typescript/type-assertion
                **Practice Assignment:**
                - Demonstrate type inference by declaring variables without explicit types.
                - Use type assertions to convert a variable from one type to another.
        4.2.7 Union, intersection, and literal types
            - TypeScript Official: Union Types - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
            - TypeScript Official: Intersection Types - https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
            - TutorialsTeacher: TypeScript Union Types - https://www.tutorialsteacher.com/typescript/typescript-union
                **Practice Assignment:**
                - Create a variable that can hold multiple types using a union type.
                - Define an intersection type and use it in an object.
        4.2.8 Working with modules and imports
            - TypeScript Official: Modules - https://www.typescriptlang.org/docs/handbook/modules.html
            - Digitalocean: How To Use Modules in TypeScript - https://www.digitalocean.com/community/tutorials/how-to-use-modules-in-typescript
                **Practice Assignment:**
                - Create two TypeScript files and import/export a function between them.
                - Use ES6 import/export syntax in a TypeScript project.
        4.2.9 TypeScript with React (JSX, props, state)
            - React + TypeScript Cheatsheets - https://react-typescript-cheatsheet.netlify.app/
            - TypeScript Official: JSX - https://www.typescriptlang.org/docs/handbook/jsx.html
            - freeCodeCamp: Using TypeScript with React - https://www.freecodecamp.org/news/use-typescript-with-react/
                **Practice Assignment:**
                - Create a simple React component in TypeScript with typed props and state.
                - Refactor a JavaScript React component to TypeScript and add type annotations.
        4.2.10 Tooling: tsconfig, compiler, and IDE support
            - TypeScript Official: tsconfig.json - https://www.typescriptlang.org/tsconfig
            - TypeScript Official: Compiler Options - https://www.typescriptlang.org/docs/handbook/compiler-options.html
            - Visual Studio Code: TypeScript in VS Code - https://code.visualstudio.com/docs/languages/typescript
                **Practice Assignment:**
                - Create a tsconfig.json file and configure basic compiler options.
                - Use VS Code to write and debug TypeScript code with IntelliSense and error checking.

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
            ○ Reference Links:
                - React Docs: Reusing Logic with Custom Hooks - https://react.dev/learn/reusing-logic-with-custom-hooks
                - Reusing Logic with Custom Hooks - https://react.dev/learn/reusing-logic-with-custom-hooks
                - DEV Community: How to Create Reusable Logic with Custom React Hooks - https://dev.to/chewryl/custom-hooks-in-react-56i1
        3.2.2 Performance Optimization: Use memoization and lazy loading to speed up rendering
            ○ Understand React.memo and useMemo for optimizing component rendering, including custom comparison functions
            ○ Optimize performance using useCallback and useMemo hooks
            ○ Implement code splitting using React.lazy and Suspense for dynamic imports
            ○ Implement lazy loading for components and assets
            ○ Explore techniques for reducing re-renders
            ○ Reference Links:
                - GeeksforGeeks: Optimizing Performance with useMemo and useCallback - https://www.geeksforgeeks.org/reactjs/optimizing-performance-with-usememo-and-usecallback-hooks/
                - DigitalOcean: Avoid Performance Pitfalls in React - https://www.digitalocean.com/community/tutorials/how-to-avoid-performance-pitfalls-in-react-with-memo-usememo-and-usecallback
                - DEV Community: Memoization, Lazy Loading, and Bundle Analysis - https://dev.to/naelawadallah/optimizing-react-performance-memoization-lazy-loading-and-bundle-analysis-4bcb

        3.2.3 Redux Toolkit:
            ○ Use Redux Toolkit for advanced Redux state management patterns and best practices
            ○ Reference Links:
                - Redux Toolkit Official Docs - https://redux-toolkit.js.org/
                - Java Code Geeks: Managing State in React with Redux Toolkit - https://www.javacodegeeks.com/2025/06/managing-state-in-react-with-redux-toolkit-advanced-patterns.html
                - freeCodeCamp: Learn Redux and Redux Toolkit - https://www.freecodecamp.org/news/learn-redux-and-redux-toolkit-for-state-management/

        3.2.4 GraphQL:
            ○ Integrate React with GraphQL APIs for efficient data querying
            ○ Reference Links:
                - Apollo Client Docs for React - https://www.apollographql.com/docs/react
                - TanStack Query Docs: GraphQL Integration - https://tanstack.com/query/v4/docs/framework/react/graphql
                - PiEmbSysTech: Integrating React Query with GraphQL - https://piembsystech.com/integrating-react-query-with-graphql-in-database-applications/

        3.2.5 Firebase:
            ○ Integrate React applications with third-party backends such as Firebase for authentication and real-time databases
            ○ Reference Links:
                - Firebase Docs: Get Started with Firebase in React - https://firebase.google.com/docs/web/setup
                - DEV Community: Firebase Authentication and Firestore in React - https://dev.to/ayusharpcoder/how-to-use-firebase-for-authentication-and-database-in-react-1boa

        3.2.6 Internationalization (i18n) & Multi-language Support:
            ○ Implement internationalization (i18n) and localization in React apps
            ○ Use libraries like react-i18next or FormatJS for multi-language support
            ○ Set up language switchers and manage translations
            ○ Reference Links:
                - react-i18next Docs - https://react.i18next.com/
                - DEV Community: Add i18n to React App Using i18next - https://dev.to/anilparmar/how-to-add-internationalization-i18n-to-a-react-app-using-i18next-2025-edition-3hkk
                - freeCodeCamp: Build Multilingual Apps with i18n - https://www.freecodecamp.org/news/build-multilingual-apps-with-i18n-in-react/

        3.2.7 Webpack & Babel:
            ○ Understand manual React project setup using Webpack and Babel for custom configurations
            ○ Reference Links:
                - Webpack Docs: Getting Started - https://webpack.js.org/guides/getting-started/
                - DEV Community: Setting Up React with Webpack and Babel - https://dev.to/frontendbytes/setting-up-react-with-webpack-and-babel-from-scratch-1elo
                - FrontendUndefined: React Project Setup from Scratch - https://www.frontendundefined.com/posts/tutorials/react-project-scratch-webpack/

        3.2.8 TypeScript:
            ○ Use TypeScript with React for static type checking, including typing props, state, and components
            ○ Reference Links:
                - React + TypeScript Cheatsheets - https://react-typescript-cheatsheet.netlify.app/
                - React Deep Dive: Typechecking with PropTypes, Flow and TypeScript - https://learn.react-js.dev/advanced-concepts/type-checking
                - Codez Up: TypeScript Meets React: Best Practices for Type-Safe Components - https://codezup.com/typescript-meets-react-best-practices/
                - StudyZone4U - Mastering React Static Type Checking: Safer Code with PropTypes and TypeScript - https://www.studyzone4u.com/post-details/mastering-react-static-type-checking-safer-code-with-proptypes-and-typescript

        3.2.9 Animations:
            ○ Add animations using libraries like Framer Motion or React Spring
            ○ Reference Links:
                - Framer Motion Docs - https://motion.dev/
                - React Spring Docs - https://www.react-spring.dev/
                - CodezUp: Mastering React Animations - https://codezup.com/mastering-react-animations-framer-motion-css/
                - YouTube: Framer Motion Scroll Animation Masterclass - https://www.youtube.com/watch?v=PczQ0qSwe1E
                - Saleh Mubashar: 5 Cool Animations in React - https://salehmubashar.com/blog/5-cool-animations-in-react-with-framer-motion
                - YouTube: Framer Motion Layout Animations for Beginners - https://www.youtube.com/watch?v=wsl5FCmsC5E

        3.2.10 Testing (Jest & RTL): Write robust unit and integration tests
            ○ Learn the basics of Jest and React Testing Library
            ○ Write test cases for components, hooks, and Redux
            ○ Understand mocking and testing asynchronous code
            ○ (Optional) Use Enzyme for testing legacy class components
            ○ Reference Links:
                - React Testing Library Docs - https://testing-library.com/docs/react-testing-library/intro/
                - Jest Docs - https://jestjs.io/docs/getting-started
                - DEV Community: Unit Testing with Jest and RTL - https://dev.to/debajit13/unit-testing-react-components-with-jest-and-react-testing-library-3he
                - CoderPad: Integration Testing with Jest and RTL - https://coderpad.io/blog/development/how-to-write-integration-tests-with-jest-and-react-testing-library/

        3.2.11 Server-Side Rendering (SSR): Understand how Next.js improves SEO and performance
            ○ Learn the basics of SSR and its benefits
            ○ Explore Next.js features like static site generation (SSG) and incremental static regeneration (ISR)
            ○ Implement SSR in a sample project
            ○ Reference Links:
                - Medium - How to Implement SSR(Server Side Rendering) in React 18- https://medium.com/simform-engineering/how-to-implement-ssr-server-side-rendering-in-react-18-e49bc43e9531
                - LogRocket - A guide to streaming SSR with React 18 - https://blog.logrocket.com/streaming-ssr-with-react-18/
                - Next.js Docs: Rendering Strategies - https://nextjs.org/learn/seo/rendering-strategies
                - freeCodeCamp: SSR in Next.js for SEO - https://interviewbuzz.com/blog/seo-in-nextjs-boost-traffic-with-server-side-rendering-and-meta-optimization
                - DEV Community: Mastering SSR, SSG, ISR, CSR in Next.js - https://dev.to/bdhamithkumara/mastering-ssg-ssr-isr-and-csr-in-nextjs-19bi

        3.2.12 Portals:
            ○ Render components outside the main DOM hierarchy using React Portals
            ○ Reference Links:
                - React Docs: Portals - https://legacy.reactjs.org/docs/portals.html
                - DEV Community: Understanding React Portals - https://dev.to/abhay_yt_52a8e72b213be229/understanding-react-portals-how-to-render-outside-the-dom-hierarchy-158o
                - GeeksforGeeks: React Portals Explained - https://www.geeksforgeeks.org/reactjs/how-do-react-portals-help-in-rendering-elements-outside-the-root-dom-node/

        3.2.13 Higher-Order Components (HOC):
            ○ Implement HOCs for code reuse and abstraction
            ○ Reference Links:
                - React Docs: HOCs - https://legacy.reactjs.org/docs/higher-order-components.html
                - Medium: Understanding Higher-Order Components (HOCs) in React — A Deep Dive - https://medium.com/@sonilamohanty26/understanding-higher-order-components-hocs-in-react-a-deep-dive-7e1077562050
                - Geek4Geeks: ReactJS Higher-Order Components - https://www.geeksforgeeks.org/reactjs/react-js-higher-order-components/
                - Open Replay - Understanding higher-order components in React with examples - https://blog.openreplay.com/understanding-hoc-react-examples/

        3.2.14 Render Props:
            ○ Use the render props pattern for sharing code between components
            ○ Reference Links:
                - React Docs: Render Props - https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop
                - GeeksforGeeks: ReactJS Render Props - https://www.geeksforgeeks.org/reactjs/react-js-render-props/
                - Dev.To - The Render Props Pattern in React: A Flexible Approach to Component Reusability - https://dev.to/maximlogunov/the-render-props-pattern-in-react-a-flexible-approach-to-component-reusability-3imb

        3.2.15 PureComponent:
            ○ Use PureComponent for optimizing class-based components
            ○ Reference Links:
                - React Docs: PureComponent - https://react.dev/reference/react/PureComponent
                - GeeksforGeeks: Difference between React.Component and React.PureComponent? - https://www.geeksforgeeks.org/reactjs/difference-between-react-component-and-react-purecomponent/
                - LogRocket: Pure components in React: Using PureComponent - https://blog.logrocket.com/pure-component-in-react/
                - TutorialPoint - ReactJS - PureComponent Class - https://www.tutorialspoint.com/reactjs/reactjs_purecomponent_class.htm

        3.2.16 StrictMode:
            ○ Use React.StrictMode to identify unsafe lifecycle methods and potential issues
            ○ Reference Links:
                - React Docs: StrictMode - https://react.dev/reference/react/StrictMode
                - GeeksforGeeks: What is StrictMode in React ? - https://www.geeksforgeeks.org/reactjs/what-is-strictmode-in-react/
                - Dev.To: Strict Mode in React - https://dev.to/vishnusatheesh/strict-mode-in-react-b1o
                - Tutorialspoint - ReactJS - Strict Mode - https://www.tutorialspoint.com/reactjs/reactjs_strict_mode.htm
                - Medium - Understanding React’s Strict Mode: An Essential Tool for Cleaner Code - https://medium.com/@Roy.Wong/understanding-reacts-strict-mode-an-essential-tool-for-cleaner-code-efbe2112eb7d

        3.2.17 Deployment:
            ○ Host projects confidently using Netlify, Vercel or GitHub Pages
            ○ Learn the steps for deploying React applications
            ○ Understand CI/CD pipelines for automated deployment
            ○ Use environment variables for configuration and secrets
            ○ Deploy React apps using Vercel or Netlify
            ○ Explore deployment strategies for different hosting platforms
            ○ Reference Links:
                - Netlify Docs: Deploy React - https://docs.netlify.com/
                - Vercel Docs: Deploy React - https://vercel.com/docs
                - Fenilsonani: Setting Up a CI/CD Pipeline for React.js: Automating Build, Test, and Deploy - https://fenilsonani.com/articles/setting-up-ci-cd-pipeline-for-react-js

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

