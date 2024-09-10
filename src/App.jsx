import { useState } from "react";
import "./App.css";
import Rules from "./Component/Rules";
import Gameplay from "./Component/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        {isGameStarted ? <Gameplay /> : <Rules toggle={toggleGameplay} />}
      </div>
    </>
  );
}

export default App;
