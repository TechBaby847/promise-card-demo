import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PromiseCard from "./components/PromiseCard";
import UserInfo from "./components/UserInfo";
import GeneratedCard from "./components/GeneratedCard";
import "./App.css";
import Cards from "./Cards";

const RouteLink = () => {
  const [respond, setRespond] = useState({});
  let [color, setColor] = useState({
    activeColor: "#FEDF58",
  });

  let [cardInfo, setCardInfo] = useState({
    name: '',
    email: '',
    text: [],
  })

  let [cardToDisplay, setCardToDisplay] = useState({
    promiseCard: true,
    userInfo: false,
    generatedcard: false
  })
  return (
    <>
     <Routes>
        <Route path="/" element={
          <div className="app">
          <div className="app-content" style={{ backgroundColor: color.activeColor }}>
            {cardToDisplay.promiseCard && <PromiseCard  color={color} setColor={setColor} activeColor={color.activeColor} setCardInfo={setCardInfo} setCardToDisplay={setCardToDisplay}/>}

            {cardToDisplay.userInfo && <UserInfo setRes={setRespond} setCardInfo={setCardInfo} setCardToDisplay={setCardToDisplay} color={color} cardInfo={cardInfo} />}

            {cardToDisplay.generatedcard && <GeneratedCard cardInfo={respond} color={color}/>}
          </div>
        </div>
         } /> 
        <Route path="/cards/:cardId" element={<Cards />} />
    </Routes>
    </>
  )
}

export default RouteLink