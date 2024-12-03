import React, { useState } from "react";
import "./App.css";

function App() {
  const positions = ["top-left", "top-right", "bottom-right", "bottom-left"];

  const [currentPosition, setCurrentPosition] = useState(0);

  const moveForward = () => {
    setCurrentPosition((prev) => (prev + 1) % positions.length);
  };

  const moveBackward = () => {
    setCurrentPosition((prev) =>
      prev === 0 ? positions.length - 1 : prev - 1
    );
  };

  return (
    <div className="container">
      <div className="box">
        <div className={`block ${positions[currentPosition]}`}></div>
      </div>
      <div className="buttons">
        <button onClick={moveBackward}>Backward</button>
        <button onClick={moveForward}>Forward</button>
      </div>
    </div>
  );
}

export default App;

