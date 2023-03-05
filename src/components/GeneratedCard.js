import React, {useState} from 'react';
import DownloadShareModal from './DownloadShareModal';
import { Link } from 'react-router-dom';
import PromiseCard from './PromiseCard';

const GeneratedCard = ({cardInfo, color}) => {
  const [openModal, setOpenModal] = useState(false)
  console.log("new", cardInfo);

  return (
    <div>
      <div className={`card`}>
        <div
          id={`genCard`}
          style={{
            backgroundColor: `${color.activeColor}`,
          }}
        >
          <h2>{cardInfo.card.name + `'s`} Promise Card</h2>
          <p>
            Things I want{" "}
            <span
              style={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                padding: "5px 10px",
              }}
            >
              {cardInfo.card.cardItems.length}
            </span>
          </p>
          <div className="form-input">
            {cardInfo.card.cardItems.map((item, index) => (
              <input
                key={index}
                type="text"
                name="text1"
                placeholder="write item name"
                value={item.value}
                onChange={(e) => console.log(e)}
              />
            ))}
          </div>
        </div>

        <div className="linkwrap">
          <Link to className="create-link" onClick={PromiseCard}>
            <p>Create your own promisecard.com.ng</p>
          </Link>
        </div>

        <div className="share">
          <div className="socialShare">
            <button onClick={() => setOpenModal(true)}>
              Share with friends
            </button>
          </div>

          <Link to onClick={PromiseCard}>
            <div className="createCard" onClick={PromiseCard}>
              <button>Create new card</button>
            </div>
          </Link>
        </div>
      </div>
      <DownloadShareModal
        cardInfo={cardInfo}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default GeneratedCard;
