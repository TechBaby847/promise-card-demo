import React from "react";
import whatsapp from '../images/whatsapp.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import download from '../images/download.svg';

const DownloadShare = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="modalContainer">
        <div>
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <p className="modal-text">Share with friends</p>
          <p className="modal-text-two">
            Download a screenshot and <br /> share across social media
          </p>
        </div>

        <div className="share-btn">
          {/* <button className="btn-one"> */}
            <img src={download} alt="save file icon" />
          {/* </button> */}
          <img src={whatsapp} alt="whatsapp icon" />
          {/* <button className="btn-three"> */}
            <img src={facebook} alt="facebook icon" />
          {/* </button> */}
          {/* <button className="btn-four"> */}
            <img src={twitter} alt="twitter icon" />
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default DownloadShare;
