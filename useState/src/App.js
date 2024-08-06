import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  let [score, setScore] = useState(0);
  let [balls, setBalls] = useState(0);
  let [wickets, setWickets] = useState(0);
  console.log("Creating UI");
  return (
    <div className="App">
      <h1>Score : {score}</h1>
      <h1>
        Overs : {parseInt(balls / 6)}.{balls % 6}
      </h1>
      <h1> Wickets : {wickets}</h1>
      <button
        onClick={() => {
          setScore(score + 1);
          setBalls(balls + 1);
        }}
      >
        Single
      </button>
      <button
        onClick={() => {
          setScore(score + 2);
          setBalls(balls + 1);
        }}
      >
        Double
      </button>
      <button
        onClick={() => {
          setScore(score + 4);
          setBalls(balls + 1);
        }}
      >
        Four
      </button>
      <button
        onClick={() => {
          setScore(score + 6);
          setBalls(balls + 1);
        }}
      >
        Six
      </button>
      <button
        onClick={() => {
          setScore(score - 1);
        }}
      >
        Wide
      </button>
      <button
        onClick={() => {
          setBalls(balls + 1);
          setWickets(wickets + 1);
        }}
      >
        Out
      </button>
    </div>
  );
}

export default App;
