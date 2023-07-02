import React, { useContext } from "react";
import "../style/LostPopUp.css";
import { contextBox } from "../context/Context";
export default function LostPopUp() {
  const data = useContext(contextBox);
  return (
    <div className="LostPop-up">
      <h1 className="lostWord">You Lost</h1>
      <p className="selectedWord">Selected word: {data.mainWord}</p>
      <button className="reloadBtn"
        onClick={() => {
          window.location.reload(false);
        }}>
            Tra Again
      </button>
    </div>
  );
}
