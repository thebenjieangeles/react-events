import React, { useState, useEffect } from "react";

function ToggleSwitch({ handleToggle, isOn }) {
  const [IsOn, setIsOn] = useState(isOn);

  useEffect(() => {
    setIsOn(isOn);
  }, [isOn]);

  const handleClick = () => {
    const newState = !IsOn;
    setInternalIsOn(newState);
    handleToggle(newState);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={IsOn} onChange={handleClick} />
        <span>{IsOn ? "ON" : "OFF"}</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
