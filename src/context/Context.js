import React, { useState, useEffect, createContext } from "react";
export const contextBox = createContext();

const AllDatas = ({ children }) => {
  const [mainWord, setMainWord] = useState("");
  const [mainWordArray, setMainWordArray] = useState([]);

  const [selectedWord, setSelectedWord] = useState("");
  const [allWords, setAllWords] = useState(
    "qwehyuopxasdfjrkmitlzcvbng".split("")
  );
  const [isInclude, setIsInclude] = useState();
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
  useEffect(()=>{
    itemsSelected.forEach( (I) => {
      console.log('j');
      // newMainWordArray[I].className = 'display'
    });
    // setMainWordArray()
  },[itemsSelected]);
  console.log(mainWord);

  console.log(itemsSelected);
  console.log(mainWordArray);

  return (
    <contextBox.Provider
      value={{
        allWords,
        mainWord,
        mainWord,
        selectedWord,
        isInclude,
        itemsSelected,
        inputCorecctWords,
        mainWordArray,
        setInputCorecctWords,
        setItemsSelected,
        setMainWordArray,
        setSelectedWord,
        setIsInclude,
      }}
    >
      {children}
    </contextBox.Provider>
  );
};
export default AllDatas;
