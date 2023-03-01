import React, { useState } from "react";

const UserInfo = ({ setCardInfo, setCardToDisplay }) => {
  let [emptyText, setEmptyText] = useState(false);

  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  const updateUserDetails = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  let handleSubmit = () => {
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
    setCardToDisplay({
      promiseCard: false,
      userInfo: false,
      generatedcard: true,
    });
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
            placeholder="eg. Bode Rice"
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
            placeholder="youremail@address.com"
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
