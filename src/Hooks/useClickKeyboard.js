import React, { useEffect, useContext } from "react";
import { contextBox } from "../context/Context";
export default function useClickKeyboard(e) {
  const data = useContext(contextBox);
  const splitMainWord = data.mainWord.split("");
  useEffect(() => {
    const newMainWordArray = [...data.mainWordArray];

    if (splitMainWord.includes(`${e}`)) {
      data.mainWordArray.forEach((element) => {
        if (element.Word === e) {
          element.className = "display";
        }
      });
    } else if (e !== undefined && !splitMainWord.includes(`${e}`)) {
      data.setWrongAnswersArray((prev) => [...prev, e]);
    }
    data.setMainWordArray(newMainWordArray);
  }, [e]);
}
