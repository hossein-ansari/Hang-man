import React, { useContext } from "react";
import "../style/WonPopUp.css";
import { contextBox } from "../context/Context";
export default function WonPopUp() {
  const data = useContext(contextBox);
  return (
    <div className="WonPopUpComponent">
      <div className="WonPop-up">
        <h1 className="WonWord">You Won</h1>
        <p className="selectedWord">Selected word: {data.mainWord}</p>
        <button className="reloadBtn"
        onClick={() => {
          window.location.reload(false);
        }}>
            Try Again
      </button>
        
      </div>
    </div>
  );
}
