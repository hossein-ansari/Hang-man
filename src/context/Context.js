import React, { useState, useEffect, createContext } from "react";
export const contextBox = createContext();

const AllDatas = ({ children }) => {
  const [mainWord, setMainWord] = useState("");
  const [mainWordArray, setMainWordArray] = useState([]);

  const [selectedWord, setSelectedWord] = useState("");
  const [allWords, setAllWords] = useState(
    "qwehyuopxasdfjrkmitlzcvbng".split("")
  );
  const [wrongAnswersArray, setWrongAnswersArray] = useState([]);
  const [itemsSelected, setItemsSelected] = useState([]);
  const [inputCorecctWords, setInputCorecctWords] = useState();
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => setMainWord(data[0]));
  }, []);
  useEffect(() => {
    mainWord.split("").forEach((element) => {
      setMainWordArray((prev) => [
        ...prev,
        { Word: element, className: "display-none" },
      ]);
    });
  }, [mainWord]);
  console.log(wrongAnswersArray);
  return (
    <contextBox.Provider
      value={{
        allWords,
        mainWord,
        mainWord,
        selectedWord,
        wrongAnswersArray,
        itemsSelected,
        inputCorecctWords,
        mainWordArray,
        setInputCorecctWords,
        setItemsSelected,
        setMainWordArray,
        setSelectedWord,
        setWrongAnswersArray,
      }}
    >
      {children}
    </contextBox.Provider>
  );
};
export default AllDatas;
