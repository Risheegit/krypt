import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Navbar, Welcome } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
