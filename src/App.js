import React, { useContext } from "react";
import "./App.css";
import Hangman from "./components/Hangman";
import KeyboardNav from "./components/KeyboardNav";
import CorrectAnswer from "./components/CorrectAnswer";
import WrongAnswer from "./components/Wronganswer";
import {ContexBox} from "./contex/Contex";
export default function App() {
  const wordContex = useContext(ContexBox)
  return (
    <div className="App">
      <div className={"Wronganswer"}>
        <WrongAnswer />
        <Hangman />
      </div>
      <div className="keyboard">
        {wordContex.mainWord.split('').map(()=>(

        <CorrectAnswer />
        ))}
        <KeyboardNav />
      </div>
    </div>
  );
}
