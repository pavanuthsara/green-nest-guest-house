import { useState } from "react";
import "./App.css";
import GreenNestGuestHouse from "./components/GreenNestGuestHouse";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GreenNestGuestHouse />
    </>
  );
}

export default App;
