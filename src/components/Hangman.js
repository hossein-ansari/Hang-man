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
          data.wrongAnswersArray.length >= 6 ? "RopePullUp" : ""
        }`}
      ></div>
      {data.wrongAnswersArray.length >= 1 && (
        <div
          className={`head ${
            data.wrongAnswersArray.length >= 6 ? "RopePullUpBody" : ""
          }`}
        >
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
      {data.wrongAnswersArray.length >= 2 && (
        <div
          className={`body ${
            data.wrongAnswersArray.length >= 6 ? "RopePullUpBody" : ""
          }`}
        ></div>
      )}
      {data.wrongAnswersArray.length >= 3 && (
        <div
          className={`Rhand ${
            data.wrongAnswersArray.length >= 6 ? "RopePullUpBody" : ""
          }`}
        ></div>
      )}
      {data.wrongAnswersArray.length >= 4 && (
        <div
          className={`Lhand ${
            data.wrongAnswersArray.length >= 6 ? "RopePullUpBody" : ""
          }`}
        ></div>
      )}
      {data.wrongAnswersArray.length >= 5 && (
        <div
          className={`Rfoot ${
            data.wrongAnswersArray.length >= 6 ? "RopePullUpBody" : ""
          }`}
        ></div>
      )}
      {data.wrongAnswersArray.length >= 6 && (
        <div
          className={`Lfoot ${
            data.wrongAnswersArray.length >= 6 ? "RopePullUpBody" : ""
          }`}
        ></div>
      )}
    </div>
  );
}
