import  { useState, useEffect } from "react";
import WaterJugForm from "./components/waterJugForm/waterJugForm";
import StepsList from "./components/stepsList/stepsList";
import JugState from "./components/jugState/jugState";
import solveWaterJug from "./utils/solveWaterJug";

const App = () => {
  const [jugX, setJugX] = useState(0);
  const [jugY, setJugY] = useState(0);
  const [targetZ, setTargetZ] = useState(0);
  const [steps, setSteps] = useState([]);
  const [isSolvable, setIsSolvable] = useState(true);

  useEffect(() => {
    if (jugX > 0 && jugY > 0 && targetZ > 0) {
      const { steps: solutionSteps, solvable } = solveWaterJug(jugX, jugY, targetZ);
      setSteps(solutionSteps);
      setIsSolvable(solvable);
    } else {
      setSteps([]);
      setIsSolvable(true);
    }
  }, [jugX, jugY, targetZ]);

  return (
    <div className="app-container">
      <h1>Water Jug Challenge</h1>
      <WaterJugForm setJugX={setJugX} setJugY={setJugY} setTargetZ={setTargetZ} />
      <StepsList steps={steps} isSolvable={isSolvable} />
      <JugState steps={steps} />
    </div>
  );
};


export default App;
