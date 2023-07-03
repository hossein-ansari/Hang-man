import React, { useState, useEffect, createContext } from "react";
export const contextBox = createContext();

const AllDatas = ({ children }) => {
  // fech api Word
  const [mainWord, setMainWord] = useState("");
  const [mainWordArray, setMainWordArray] = useState([]);
  // render all word
  const [allWords, setAllWords] = useState(
    "qwertyuiopasdfghjklzxcvbnm".split("")
  );
  const [wrongAnswersArray, setWrongAnswersArray] = useState([]);
  // win and lose
  const [isLose, setIsLose] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [along, setAlong] = useState(0);

  // API
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => setMainWord(data[0]));
  }, []);
  // Display the correctly guessed words
  useEffect(() => {
    mainWord.split("").forEach((element) => {
      setMainWordArray((prev) => [
        ...prev,
        { Word: element, className: "display-none" },
      ]);
    });
  }, [mainWord]);

  return (
    <contextBox.Provider
      value={{
        allWords,
        mainWord,
        mainWord,
        wrongAnswersArray,
        mainWordArray,
        isLose,
        isWin,
        along,
        setAlong,
        setMainWordArray,
        setWrongAnswersArray,
        setIsLose,
        setIsWin,
      }}
    >
      {children}
    </contextBox.Provider>
  );
};
export default AllDatas;
