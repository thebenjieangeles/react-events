import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
