import React, { useContext } from "react";
import "../style/WrongAnswer.css";
import { contextBox } from "../context/Context";
export default function Wronganswer() {
  const data = useContext(contextBox);

  return (
    <div className="WrongAnswers">
      <h2 className="headerName">
        Wrong Answer<hr></hr>
      </h2>
      <div className="wrongWordUl">
        <ul className="WrongAnswer-Words">
          {data.wrongAnswersArray.map((element) => (
            <li className="wrongWordLi">{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
