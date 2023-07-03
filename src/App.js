import React, { useContext, useState } from "react";
import "./style/App.css";
import Hangman from "./components/Hangman";
import KeyboardNav from "./components/KeyboardNav";
import CorrectAnswer from "./components/CorrectAnswer";
import WrongAnswer from "./components/WrongAnswer";
import "bootstrap/dist/css/bootstrap.min.css";
import useKeyPress from "./Hooks/useKeyPress";
import { contextBox } from "./context/Context";
import LostPopUp from "./components/LostPopUp";
import WonPopUp from "./components/WonPopUp";

export default function App() {
  const [keyElement, setKeyElement] = useState();
  const data = useContext(contextBox);
  useKeyPress(keyElement);
  if (data.wrongAnswersArray.length >= 6) {
    setTimeout(() => {
      data.setIsLose(true);
    }, 2000);
  }
  if (
    data.mainWordArray.length === data.along &&
    data.mainWordArray.length !== 0
  ) {
    setTimeout(() => {
      data.setIsWin(true);
    }, 2000);
  }

  return (
    <div
      className="App"
      tabIndex="0"
      onKeyPress={(e) => {
        if (data.wrongAnswersArray.length >= 6) {
          return false;
        } else {
          setKeyElement(e.key);
        }
      }}
    >
      {/* conditional rendering for pop up  */}
      {data.isLose === false && data.isWin === false ? (
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
      ) : data.isWin ? (
        <div>
          <WonPopUp />
        </div>
      ) : data.isLose ? (
        <div>
          {" "}
          <LostPopUp />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
