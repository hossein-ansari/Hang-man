import React, { useState, useEffect, useContext } from "react";
import { contextBox } from "../context/Context";

function useKeyPress(key) {
  const data = useContext(contextBox);
  const splitMainWord = data.mainWord.split("");
  const newMainWordArray = [...data.mainWordArray];
  useEffect(() => {
    if (splitMainWord.includes(`${key}`)) {
      data.mainWordArray.forEach((element) => {
        if (element.Word === key) {
          element.className = "display";
        }
      });
    } else if (key !== undefined && !splitMainWord.includes(`${key}`)) {
      data.setWrongAnswersArray((prev) => [...prev, key]);
    }
    data.setMainWordArray(newMainWordArray);
  }, [key]);
}
export default useKeyPress;
