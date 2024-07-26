import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInputs";
import Results from "./components/Results";

function App() {
  const [inputs, setInputs] = useState({
    initial: 0,
    annual: 0,
    expected: 0,
    duration: 0,
  });

  function handleChange(inputIdentifier, newValue) {
    setInputs((prevIput) => {
      return {
        ...prevIput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <main id="user-input">
        <div className="input-group-container">
          <UserInput
            title="Initial Investment"
            value={inputs.initial}
            identifier={"initial"}
            handleChange={handleChange}
          />
          <UserInput
            title="Annual Investment"
            value={inputs.annual}
            identifier={"annual"}
            handleChange={handleChange}
          />
        </div>
        <div className="input-group-container">
          <UserInput
            title="Expected Return"
            value={inputs.expected}
            identifier={"expected"}
            handleChange={handleChange}
          />
          <UserInput
            title="Duration"
            value={inputs.duration}
            identifier={"duration"}
            handleChange={handleChange}
          />
        </div>
      </main>
      <Results inputValues={inputs} />
    </>
  );
}

export default App;
