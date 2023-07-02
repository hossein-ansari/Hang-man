import React, { useContext, useState } from "react";
import "./style/App.css";
import Hangman from "./components/Hangman";
import KeyboardNav from "./components/KeyboardNav";
import CorrectAnswer from "./components/CorrectAnswer";
import WrongAnswer from "./components/WrongAnswer";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import useKeyPress from "./Hooks/useKeyPress";
import { contextBox } from "./context/Context";
import LostPopUp from './components/LostPopUp.js'
export default function App() {
  const [keyElement, setKeyElement] = useState();
  const data = useContext(contextBox);
  useKeyPress(keyElement);

  return (
    <div className="App" tabIndex="0" onKeyPress={(e) => setKeyElement(e.key)}>
      {/* conditional rendering for pop up  */}
      {data.wrongAnswersArray.length < 6 ? (
        <div>
          {" "}
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
      ) : (
        <div>
          <LostPopUp />
        </div>
      )}
    </div>
  );
}
