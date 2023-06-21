import React, { createContext, useState, useEffect } from "react";
export const ContexBox = createContext();

const AllDatas = ({ children }) => {
    const [mainWord, setMainWord] = useState("");
    useEffect(() => {
      fetch("https://random-word-api.herokuapp.com/word")
        .then((res) => res.json())
        .then((data) => setMainWord(data[0]));
    }, []);
    console.log(mainWord);
  const [allWords, setAllWords] = useState(
    "qwehyuopxasdfjrkmitlzcvbng".split("")
  );

  return (
    <ContexBox.Provider value={{ allWords ,mainWord,mainWord}}>{children}</ContexBox.Provider>
  );
};
export default AllDatas;
