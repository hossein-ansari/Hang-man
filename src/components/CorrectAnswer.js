import React, { useContext, useMemo } from "react";
import "../style/CorrectAnswer.css";
import { ContexBox } from "../contex/Contex";
export default function CorrectAnswer() {
  const data = useContext(ContexBox);
  let items;
  function test() {
    items = data.mainWord
      .split("")
      .map((e) => <p className={"inputAnswer"}>{e}</p>);
  }
  test()
  items[0] = <p className={"inputAnswer"}>h</p>
  console.log(items);
  // data.setInputCorecctWords(items)

  return <div className="CorrectBox">{items}</div>;
}
