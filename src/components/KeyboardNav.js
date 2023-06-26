import React, { useContext, useMemo, useState } from "react";
import { contextBox } from "../context/Context";
import "../style/KewyboardNav.css";
export default function KeyboardNav() {
  const data = useContext(contextBox);
  const splitMainWord = data.mainWord.split("");
  function selectWord(e) {
    const select = e.target.value;
    const newMainWordArray = [...data.mainWordArray]
    data.setSelectedWord(select);
    data.setIsInclude(splitMainWord.includes(`${select}`));
    if (data.isInclude) {
     const foundItem = data.mainWordArray.forEach(element => {
      if (element.Word === select) {
        const findedWord = newMainWordArray.find((id)=> id.Word === select)
        findedWord.className = 'display'
      }
     })

     data.setMainWordArray(newMainWordArray)
    }
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
