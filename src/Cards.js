import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import "./App.css";

// import { useParams } from "react-router-dom";

const Cards = () => {
    const { cardId } = useParams(); 
    const [response, setResponse] = useState("");
    // console.log( "crd", cardId);

    const getCardData = async () => {
        try {
            //resolves fetch promise
            const res = await fetch(`https://promise-card-api.onrender.com/api/get-card/${cardId}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            });
            //resolves res.json()'s promise
            const jsonData = await res.json();
            if (jsonData.status == "fail"){
                return
            }

           
            setResponse(jsonData)
        
            // previews response in the console
            console.log("theresp",jsonData);

        } catch (error) {
            console.error(error);
        }
}
     useEffect(() => {
        getCardData();
  
  }, []);


  return (
    <div>
         {response != "" ? 
         <div id={`generatedScreen`}
         style={{
          width: "400px",
          height: "720px",
          backgroundColor: `${response.color}`,
        }} 
         >
            <h2> Promise Card</h2>
            <h2>{response.name + `'s`} Promise Card</h2>
            <p className="subTitle">
              Things I want{" "}
              <span
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "20.4px",
                  height: "20.4px",
                  padding: "4px 11px",
                }}
              >
                {response.cardItems.length}
              </span>
            </p>
            <div className="form-input">
              
              {response.cardItems.map((item, index) => (
                  
                  <div key={index} className="cardInput">
                      {item.value}
                  </div>
              ))}
          </div>
        </div>
         : 
         <div>
            <p>No info found</p>
         </div>
         }

    </div>
  )

}

export default Cards