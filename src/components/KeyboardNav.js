import React, { useContext, useMemo, useState } from "react";
import { contextBox } from "../context/Context";
import "../style/KewyboardNav.css";
export default function KeyboardNav() {
  const data = useContext(contextBox);
  const splitMainWord = data.mainWord.split("");
  function selectWord(e) {
    const select = e.target.value;
    const newMainWordArray = [...data.mainWordArray];

    if (splitMainWord.includes(`${select}`)) {
      const foundItem = data.mainWordArray.forEach((element) => {
        if (element.Word === select) {
          element.className = "display";
        }
      });
    } else {
      data.setWrongAnswersArray((prev) => [...prev, select]);
    }
    data.setMainWordArray(newMainWordArray);
  }

  return (
    <div className="KewyboardNav">
      {data.allWords.map((word) => (
        <button
          onClick={(e) => {
            selectWord(e);
          }}
          className="words"
          value={word}
        >
          {word}
        </button>
      ))}
    </div>
  );
}
