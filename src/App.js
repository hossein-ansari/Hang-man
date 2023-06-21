import React, { useContext } from "react";
import "./App.css";
import Hangman from "./components/Hangman";
import KeyboardNav from "./components/KeyboardNav";
import CorrectAnswer from "./components/CorrectAnswer";
import WrongAnswer from "./components/Wronganswer";
import {ContexBox} from "./contex/Contex";
export default function App() {
  return (
    <div className="App">
      <div className={"Wronganswer"}>
        <Hangman />
        <WrongAnswer />
      </div>
      <div className="keyboard">

          <CorrectAnswer />
        <KeyboardNav />
      </div>
    </div>
  );
}
