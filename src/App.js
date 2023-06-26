import React, { useContext } from "react";
import "./style/App.css";
import Hangman from "./components/Hangman";
import KeyboardNav from "./components/KeyboardNav";
import CorrectAnswer from "./components/CorrectAnswer";
import WrongAnswer from "./components/WrongAnswer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
export default function App() {
  return (
    <div className="App">
      <div className={"Wronganswer primary"}>
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
