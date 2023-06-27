import React, { useContext, useState } from "react";
import "./style/App.css";
import Hangman from "./components/Hangman";
import KeyboardNav from "./components/KeyboardNav";
import CorrectAnswer from "./components/CorrectAnswer";
import WrongAnswer from "./components/WrongAnswer";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import useKeyPress from "./Hooks/useKeyPress";

export default function App() {
  const [keyElement, setKeyElement] = useState();
  useKeyPress(keyElement);
  return (
    <div className="App" tabIndex="0" onKeyPress={(e) => setKeyElement(e.key)}>
      <div className={"Wronganswer"}>
        <Hangman />
        <div className={"WrongComponent"}>
          <WrongAnswer />
        </div>
      </div>
      <div className="keyboard">
        <CorrectAnswer />
        <KeyboardNav />
      </div>
    </div>
  );
}
