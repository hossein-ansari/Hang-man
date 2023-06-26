import React, { useContext } from "react";
import "../style/Wronganswer.css";
import { contextBox } from "../context/Context";
export default function Wronganswer() {
  const data = useContext(contextBox)

  return (
    <div className="Wronganswer">
      <h2 className="headerName">Wrong Answer<hr></hr></h2>
      <ul className="Wronganswer-Words">
          {data.wrongAnswersArray.map((element)=>(
            <li className="wrongWordLi">{element}</li>
          ))}
      </ul>
    </div>
  );
}
