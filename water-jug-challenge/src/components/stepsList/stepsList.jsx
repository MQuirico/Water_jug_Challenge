const StepsList = ({ steps, isSolvable }) => {
    if (steps.length === 0) return <p>Enter values to see the solution.</p>;
    if (!isSolvable) return <p>No Solution</p>;
  
    return (
      <div className="steps-container">
        <h2>Solution Steps</h2>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default StepsList;