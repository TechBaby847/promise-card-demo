import React, { useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import "./App.css";
import MoonLoader from "react-spinners/MoonLoader";


// import { useParams } from "react-router-dom";

const Cards = () => {
    const { cardId } = useParams(); 
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // console.log( "crd", cardId);

    const getCardData = async () => {
        try {
            setIsLoading(true);

            //Then resolve fetch promise
            const res = await fetch(
              `https://promise-card-api.onrender.com/api/get-card/${cardId}`,
              {
                method: "GET",
                headers: {
                  "content-type": "application/json",
                },
              }
            );
            //resolves res.json()'s promise
            const jsonData = await res.json();
            if (jsonData.status === "fail"){
                return
            }

           
            setResponse(jsonData)
            setIsLoading(false);
        
            // previews response in the console
            // console.log("theresp",jsonData);

        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
}
     useEffect(() => {
        getCardData();
  
  });


  return (
    <div className="caards">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "40%",
          }}
        >
          <MoonLoader color="#808080" />
        </div>
      ) : response !== "" ? (
        <div
          className="caardsContent"
          id={`generatedScreen`}
          style={{
            backgroundColor: `${response.color}`,
          }}
        >
          <h2>{response.name + `'s`} Promise Card</h2>
          <p className="subTitle">
            Things I want <span>{response.cardItems.length}</span>
          </p>
          <div className="form-input">
            {response.cardItems.map((item, index) => (
              <>
                <div key={index} className="cardInput">
                  {item.value}
                </div>
              </>
            ))}
            <div className="linkWrap">
              <Link to="https://caard.netlify.app" className="create-link">
                <p>Create your own Promisecard.com.ng</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            width: "280.4px",
            height: "40.4px",
            padding: "4px 11px",
          }}
        >
          <p>No info found</p>
        </div>
      )}
    </div>
  );

}

export default Cards;

