import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { useState } from "react";

function App() {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <Router>
      <Header setBlur={setIsBlurred} />
      <main
        className={
          isBlurred
            ? "blur-sm transition-all duration-300"
            : "transition-all duration-300"
        }
      >
        <Home />
      </main>
    </Router>
  );
}

export default App;
