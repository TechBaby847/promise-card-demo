import React, { useState } from "react";

const UserInfo = ({ setCardInfo, setCardToDisplay, color, cardInfo, setRes }) => {
  let [emptyText, setEmptyText] = useState(false);

  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  const updateUserDetails = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const userData = {
    name: userDetails.name,
    email: userDetails.email,
    color: color.activeColor,
    cardItems: cardInfo.text,
  };

  console.log(userData);

  let handleSubmit = async () => {
    if (userDetails.name === "" || userDetails.email === "") {
      setEmptyText(true);
      return;
    }
    setEmptyText(false);
    setCardInfo((prev) => ({
      ...prev,
      name: userDetails.name,
      email: userDetails.email,
    }));
    

    try {
      //resolves fetch promise
      const res = await fetch(
        "https://promise-card-api.onrender.com/api/create-card",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      //resolves res.json()'s promise
      const jsonResponse = await res.json();
      setRes(jsonResponse);
      setCardToDisplay({
        promiseCard: false,
        userInfo: false,
        generatedcard: true,
      });

      // previews response in the console
      console.log(jsonResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`user-info`}>
      <h2>
        Your promise card <br />
        is almost ready
      </h2>
      <div className="form-input">
        <div className="input-group">
          <label>Full name</label>
          <input
            type="text"
            name="name"
            placeholder="eg. Bode Thomas"
            value={userDetails.name}
            required={true}
            onChange={updateUserDetails}
          />
        </div>

        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="bodethomas@address.com"
            value={userDetails.email}
            required={true}
            onChange={updateUserDetails}
          />
        </div>
      </div>
      {emptyText && <p className="err-msg">Name/Email can't be empty</p>}
      <div className="gen-btn">
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
