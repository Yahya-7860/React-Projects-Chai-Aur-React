import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(10);

  let addValue = () => {
    if (counter + 1 <= 20) {
      setcounter(counter+1);
    }
  };
  let removeValue = () => {
    if (counter - 1 >= 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Live Counter</h1>
      <h3>Counter : {counter}</h3>
      <button
        onClick={addValue}
        disabled={counter === 20}
        style={{ cursor: counter === 20 ? "not-allowed" : "pointer" }}
      >
        Increse
      </button>
      <button
        onClick={removeValue}
        disabled={counter === 0}
        style={{ cursor: counter === 0 ? "not-allowed" : "pointer" }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
