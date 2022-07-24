import "./App.css";
import { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      {start ? (
        <header className="App-headerWhite">
          <HomePage setStart={setStart} />
        </header>
      ) : (
        <header className="App-headerBlack">
          <LoginPage setStart={setStart} />
        </header>
      )}
    </div>
  );
}

export default App;
