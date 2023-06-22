import React, { useContext, useMemo } from "react";
import "../style/CorrectAnswer.css";
import {ContexBox} from "../contex/Contex";
export default function CorrectAnswer() {
  const data = useContext(ContexBox);

  return (
    <div className="CorrectBox">
      {useMemo(() => {
       return data.mainWord
          .split("")
          .map(() => (
            <input className={"inputAnswer"} type="text" disabled></input>
          ),[data.mainWord]);
      })}
    </div>
  );
}
