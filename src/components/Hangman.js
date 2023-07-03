import React, { useContext, useState } from "react";
import "../style/Hangman.css";
import { contextBox } from "../context/Context";
export default function Hangman() {
  const data = useContext(contextBox);
  const [isStart, setIsStart] = useState(false);

  return (
    <div className="Hangman">
      <div className="Foundation"></div>
      <div className="frame">
        <div
          className={`handhold ${
            data.wrongAnswersArray.length >= 6 ? "animationStartHandle" : ""
          }`}
        ></div>
        <div
          className={`handleCircle ${
            data.wrongAnswersArray.length >= 6 ? "animationStartCircle" : ""
          }`}
        ></div>
      </div>
      <div className="pate"></div>
      <div
        className={`hanging ${
          data.wrongAnswersArray.length >= 6 ? "animationStartCircle" : ""
        }`}
      ></div>
      {data.wrongAnswersArray.length >= 1 && (
        <div className="head">
          {" "}
          <div
            className={data.wrongAnswersArray.length >= 6 ? "dead" : "eyes"}
          ></div>
          <div
            className={data.wrongAnswersArray.length >= 6 ? "dead" : "eyes"}
          ></div>
          {data.wrongAnswersArray.length >= 6 && (
            <div
              className={data.wrongAnswersArray.length >= 6 ? "dead" : "eyes"}
            ></div>
          )}
          {data.wrongAnswersArray.length >= 6 && (
            <div
              className={data.wrongAnswersArray.length >= 6 ? "dead" : "eyes"}
            ></div>
          )}
          <div className="mouth"></div>
        </div>
      )}
      {data.wrongAnswersArray.length >= 2 && <div className="body"></div>}
      {data.wrongAnswersArray.length >= 3 && <div className="Rhand"></div>}
      {data.wrongAnswersArray.length >= 4 && <div className="lhand"></div>}
      {data.wrongAnswersArray.length >= 5 && <div className="Rfoot"></div>}
      {data.wrongAnswersArray.length >= 6 && <div className="Lfoot"></div>}
    </div>
  );
}
