const WaterJugForm = ({ setJugX, setJugY, setTargetZ }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value, 10) || 0;

    if (name === "jugX") setJugX(numericValue);
    if (name === "jugY") setJugY(numericValue);
    if (name === "targetZ") setTargetZ(numericValue);
  };

  return (
    <form className="water-jug-form" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
      <label>
        Jug X Capacity:
        <input type="number" name="jugX" onChange={handleChange} />
      </label>
      <label>
        Jug Y Capacity:
        <input type="number" name="jugY" onChange={handleChange} />
      </label>
      <label>
        Target Z:
        <input type="number" name="targetZ" onChange={handleChange} />
      </label>
    </form>
  );
};

export default WaterJugForm;
