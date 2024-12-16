# Water Jug Challenge

## Project Overview
This project implements a water jug challenge solver using React and JavaScript. The challenge involves determining the minimum steps required to fill a jug of capacity Z using jugs of capacities X and Y.

## Project Structure
The project is structured as follows:

```
water-jug-challenge/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── waterJugForm/
│   │   │   └── waterJugForm.jsx
│   │   ├── stepsList/
│   │   │   └── stepsList.jsx
│   │   └── jugState/
│   │       └── jugState.jsx
│   └── utils/
│       └── solveWaterJug.js
└── package.json
```

## Components

### App.jsx
The main component that orchestrates the entire application. It manages state for jug capacities, target volume, steps, and solvability.

**Key features:**

- Uses React hooks (`useState`, `useEffect`) for state management.
- Renders `WaterJugForm`, `StepsList`, and `JugState` components.
- Calls `solveWaterJug` utility when inputs change.

### waterJugForm.jsx
A form component that allows users to input jug capacities and target volume.

**Key features:**

- Uses React hooks (`useState`).
- Handles input changes through `handleChange` function.
- Validates numeric input values.

### stepsList.jsx
Displays the solution steps in an unordered list format.

**Key features:**

- Conditionally renders based on step count and solvability.
- Maps over `steps` array to render each step as a list item.

### jugState.jsx
Visualizes the current state of jugs during the solving process.

**Key features:**

- Uses React hooks (`useState`, `useEffect`).
- Updates every second to show next step in animation.
- Displays current jug states and progress information.

## Utility Functions

### solveWaterJug.js
The core logic for solving the water jug challenge.

**Key features:**

- Implements BFS algorithm with visited set optimization.
- Checks for solvability based on GCD and maximum capacity.
- Generates steps to reach target volume.
- Uses recursive function calls for state generation.

### Logic
The `solveWaterJug.js` file contains the main logic for solving the water jug challenge. Here's an overview of its implementation:

- **GCD calculation:** Uses Euclidean algorithm to determine if target Z is solvable.
- **BFS algorithm:**
  - Initializes queue with starting state (0, 0).
  - Expands neighbors and adds new states to queue.
  - Checks for target state (Z reached).
- **State management:**
  - Uses `Set` to keep track of visited states.
  - Adds new states only if not previously visited.
- **Step generation:**
  - Pushes each valid step into `result` array.
  - Returns steps when target reached or no solution found.

## Hooks Usage
The application extensively uses React hooks:

### useState
Used in `App.jsx`, `waterJugForm.jsx`, `stepsList.jsx`, and `jugState.jsx` to manage component-specific state.

### useEffect
Used in `App.jsx` and `jugState.jsx` for side effects like updating steps and animation.

## Arithmetic Operations
The core logic involves several arithmetic operations:

- Addition and subtraction of volumes.
- Comparison of capacities.
- Calculation of minimum values between two numbers.

These operations are crucial for determining valid next states in the BFS algorithm.

## Conclusion
This Water Jug Challenge solver demonstrates modular code structure, efficient state management, and effective use of React hooks. The separation of concerns between components and utility functions makes the code maintainable and easy to extend.
