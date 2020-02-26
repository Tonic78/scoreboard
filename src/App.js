import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <Title />
      <Scoreboard />
    </main>
  );
}

export default App;
