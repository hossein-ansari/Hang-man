import React, { createContext, useState, useEffect } from "react";
export const ContexBox = createContext();

const AllDatas = ({ children }) => {
    const [mainWord, setMainWord] = useState("");
    useEffect(() => {
      fetch("")
        .then((res) => res.json())
        .then((data) => setMainWord(data));
    }, []);
    console.log(mainWord);
  const [allWords, setAllWords] = useState(
    "qwehyuopxasdfjrkmitlzcvbng".split("")
  );

  return (
    <ContexBox.Provider value={{ allWords }}>{children}</ContexBox.Provider>
  );
};
export default AllDatas;
