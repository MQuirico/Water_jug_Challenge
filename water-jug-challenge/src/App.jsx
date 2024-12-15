import { useState } from 'react'
import JugVisualizer from './components/jugVisualizer/jugVisualizer';
import StepsList from './components/stepsList/stepsList';
import './App.css'

function App() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState("");

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const solve = (x, y, z) => {
    if (z > Math.max(x, y) || z % gcd(x, y) !== 0) {
      return null; // No solución posible
    }
    const result = [];
    let jug1 = 0, jug2 = 0;

    while (jug1 !== z && jug2 !== z) {
      if (jug1 === 0) {
        jug1 = x;
        result.push(`Llenar jarra 1: (${jug1}, ${jug2})`);
      } else if (jug2 === y) {
        jug2 = 0;
        result.push(`Vaciar jarra 2: (${jug1}, ${jug2})`);
      } else {
        const transfer = Math.min(jug1, y - jug2);
        jug1 -= transfer;
        jug2 += transfer;
        result.push(`Transferir jarra 1 a jarra 2: (${jug1}, ${jug2})`);
      }
    }

    return result;
  };

  const handleSolve = () => {
    setError("");
    const xVal = parseInt(x, 10);
    const yVal = parseInt(y, 10);
    const zVal = parseInt(z, 10);

    if (isNaN(xVal) || isNaN(yVal) || isNaN(zVal) || xVal <= 0 || yVal <= 0 || zVal <= 0) {
      setError("Por favor, ingresa valores válidos (enteros positivos).");
      return;
    }

    const solutionSteps = solve(xVal, yVal, zVal);
    if (solutionSteps) {
      setSteps(solutionSteps);
    } else {
      setError("No hay solución para los valores dados.");
      setSteps([]);
    }
  };

  return (
    <div className="app">
      <h1>Water Jug Challenge</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="Capacidad de jarra 1 (X)"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
        <input
          type="number"
          placeholder="Capacidad de jarra 2 (Y)"
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad objetivo (Z)"
          value={z}
          onChange={(e) => setZ(e.target.value)}
        />
        <button onClick={handleSolve}>Resolver</button>
      </div>
      {error && <p className="error">{error}</p>}
      <JugVisualizer steps={steps} />
      <StepsList steps={steps} />
    </div>
  );
}

export default App
