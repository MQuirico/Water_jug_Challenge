import React, { useEffect, useState } from "react";

const JugState = ({ steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentState, setCurrentState] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (steps.length === 0) {
      setCurrentStepIndex(0);
      setCurrentState({ x: 0, y: 0 });
      return;
    }

    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= steps.length) {
          clearInterval(interval);
          return prevIndex;
        }
        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [steps]);

  useEffect(() => {
    if (steps.length > 0 && currentStepIndex < steps.length) {
      const step = steps[currentStepIndex];
      const matches = step.match(/Jug X: (\d+), Jug Y: (\d+)/);
      if (matches) {
        setCurrentState({
          x: parseInt(matches[1], 10),
          y: parseInt(matches[2], 10),
        });
      }
    }
  }, [currentStepIndex, steps]);

  if (steps.length === 0) {
    return <p>Enter values to see the jug states.</p>;
  }

  return (
    <div className="jug-state-container">
      <h2>Current Jug States</h2>
      <p>Jug X: {currentState.x} gallons</p>
      <p>Jug Y: {currentState.y} gallons</p>
      <p>Step: {currentStepIndex + 1} / {steps.length}</p>
    </div>
  );
};

export default JugState;