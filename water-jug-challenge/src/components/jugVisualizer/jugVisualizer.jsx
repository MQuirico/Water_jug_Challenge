
function JugVisualizer({ steps }) {
  if (steps.length === 0) return null;

  return (
    <div className="jug-visualizer">
      <h2>Estado de las jarras</h2>
      {steps.map((step, index) => (
        <p key={index}>{step}</p>
      ))}
    </div>
  );
}

export default JugVisualizer;