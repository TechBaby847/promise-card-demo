import React, { useState } from "react";

import PromiseCard from "./components/PromiseCard";
import UserInfo from "./components/UserInfo";
import GeneratedCard from "./components/GeneratedCard";
import "./App.css";

function App() {
  let [color, setColor] = useState({
    activeColor: "#FEDF58",
  });

  let [cardInfo, setCardInfo] = useState({
    name: "",
    email: "",
    text: [],
  });

  let [cardToDisplay, setCardToDisplay] = useState({
    promiseCard: true,
    userInfo: false,
    generatedcard: false,
  });

  return (
    <div className="app">
      <div
        className="app-content"
        style={{ backgroundColor: color.activeColor }}
      >
        {cardToDisplay.promiseCard && (
          <PromiseCard
            setColor={setColor}
            activeColor={color.activeColor}
            setCardInfo={setCardInfo}
            setCardToDisplay={setCardToDisplay}
          />
        )}

        {cardToDisplay.userInfo && (
          <UserInfo
            setCardInfo={setCardInfo}
            setCardToDisplay={setCardToDisplay}
          />
        )}

        {cardToDisplay.generatedcard && <GeneratedCard cardInfo={cardInfo} />}
      </div>
    </div>
  );
}

export default App;
