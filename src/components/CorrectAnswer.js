import React, { useContext, useEffect, useMemo, useState } from "react";
import "../style/CorrectAnswer.css";
import { contextBox } from "../context/Context";
export default function CorrectAnswer() {
  const data = useContext(contextBox);
  useEffect(() => {

  }, []);
  return (
    <div className="CorrectBox">
      {data.mainWordArray.map((items) => (
        <p className="inputAnswer">
          {" "}
          <span className={`${items.className}`}>{items.Word}</span>{" "}
        </p>
      ))}
    </div>
  );
}
