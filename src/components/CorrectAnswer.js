import React, { useContext, useMemo } from "react";
import "../style/CorrectAnswer.css";
import {ContexBox} from "../contex/Contex";
export default function CorrectAnswer() {
  const wordContex = useContext(ContexBox);

  return (
    <div className="CorrectBox">
      {useMemo(() => {
       return wordContex.mainWord
          .split("")
          .map(() => (
            <input className={"inputAnswer"} type="text" disabled></input>
          ),[wordContex.mainWord]);
      })}
    </div>
  );
}
