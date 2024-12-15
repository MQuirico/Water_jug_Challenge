function StepsList({ steps }) {
    if (steps.length === 0) return null;
  
    return (
      <div className="steps-list">
        <h2>Pasos para resolver</h2>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }
  
  export default StepsList;