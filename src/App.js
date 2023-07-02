import React, { useContext, useState } from "react";
import { useRoutes ,Navigate} from "react-router-dom";
import "./style/App.css";
import Hangman from "./components/Hangman";
import KeyboardNav from "./components/KeyboardNav";
import CorrectAnswer from "./components/CorrectAnswer";
import WrongAnswer from "./components/WrongAnswer";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import useKeyPress from "./Hooks/useKeyPress";
import { contextBox } from "./context/Context";
import LostPopUp from './components/LostPopUp.js'
import Routes from "./routes/Routes";
export default function App() {
  const [keyElement, setKeyElement] = useState();
  const data = useContext(contextBox);
  useKeyPress(keyElement);
  const router = useRoutes(Routes);
  return (
    <div className="App" tabIndex="0" onKeyPress={(e) => setKeyElement(e.key)}>
      {/* conditional rendering for pop up  */}
      {data.wrongAnswersArray.length < 6 ? (
        <div>
          {" "}
          <div className={"Wronganswer"}>
            <Hangman />
            <div className={"WrongComponent"}>
              <WrongAnswer />
            </div>
          </div>
          <div className="keyboard">
            <CorrectAnswer />
            <KeyboardNav />
          </div>
        </div>
      ) : (
        <Navigate to={"./lostPage"} />
      )}
    </div>
  );
}
