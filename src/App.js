import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by{" "}
          <a
            href="https://tiny-semolina-5cec1e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nataliia Prokopenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NataliiaProkopenko87/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
