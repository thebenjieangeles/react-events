import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

function App() {
  const [message, setMessage] = useState("Click the button");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const handleButtonClick = () => {
    if (showMessage) {
      setMessage("Button clicked!");
    }
    setShowMessage(!showMessage);
  };

  const handleSwitchToggle = (newState) => {
    setIsSwitchOn(newState);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
      {showMessage && <p>{message}</p>}
      <ToggleSwitch handleToggle={handleSwitchToggle} isOn={isSwitchOn} />
      <p>The switch is currently {isSwitchOn ? "ON" : "OFF"}</p>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Heading from "./Heading";
// import Counter from "./Counter";

// function App() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Name submitted: ${name}`);
//     setName("");
//   };

//   const handleInputChange = (event) => {
//     setName(event.target.value);
//   };

//   return (
//     <div>
//       <Heading header="Input Your name" />
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name: <input type="text" value={name} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <Counter />
//     </div>
//   );
// }

// export default App;
