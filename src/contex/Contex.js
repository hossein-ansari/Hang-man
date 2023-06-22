import React, { createContext, useState, useEffect } from "react";
export const ContexBox = createContext();

const AllDatas = ({ children }) => {
  const [mainWord, setMainWord] = useState("");
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => setMainWord(data[0]));
  }, []);

  const [selectedWord, setSelectedWord] = useState("");
  const [allWords, setAllWords] = useState(
    "qwehyuopxasdfjrkmitlzcvbng".split("")
  );
    const [isInclude,setIsInclude] = useState()
    const [indexSelected,setIndexSelected]=useState([])
    console.log(mainWord);
  return (
    <ContexBox.Provider
      value={{ allWords, mainWord, mainWord, selectedWord,isInclude,indexSelected, setIndexSelected,setSelectedWord ,setIsInclude}}
    >
      {children}
    </ContexBox.Provider>
  );
};
export default AllDatas;
