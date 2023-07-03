import React, { useContext, useEffect, useMemo, useState } from "react";
import { contextBox } from "../context/Context";
import useClickKeyboard from "../Hooks/useClickKeyboard";
import "../style/KeyboardNav.css";
export default function KeyboardNav() {
  const data = useContext(contextBox);
  const [clickElement, setClickElement] = useState();
  useClickKeyboard(clickElement);
  return (
    <div className="KewyboardNav">
      {data.allWords.map((word) => (
        <button
          onClick={(e) => {
            if (data.wrongAnswersArray.length >= 6) {
              return false;
            } else {
              setClickElement(e.target.value);
            }
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
