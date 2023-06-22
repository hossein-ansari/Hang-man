import React, { useContext, useMemo, useState } from "react";
import { ContexBox } from "../contex/Contex";
import "../style/KewyboardNav.css";
export default function KeyboardNav() {
  const data = useContext(ContexBox);
  const splitMainWord = data.mainWord.split("");
  function selectWord(e) {
    const Select = e.target.value;
    data.setSelectedWord(Select);
    data.setIsInclude(splitMainWord.includes(`${Select}`));
  }
  if (data.isInclude) {
    let i = 0
    splitMainWord.forEach((W) => {
      if (W === data.selectedWord) {
        data.indexSelected.push(i)
        i++
      }else{
        i++
      }
    });
  }
  console.log(data.indexSelected);

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
