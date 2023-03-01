import React, {useState} from 'react';
import DownloadShareModal from './DownloadShareModal';
// import PromiseCard from './PromiseCard';
// import { Link } from 'react-router-dom';

const GeneratedCard = ({cardInfo, color}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <div className={`card`}>
        <div id={`genCard`}
          style=
          {{
            backgroundColor: `${color.activeColor}`,
          }}
          >
            <h2>{cardInfo.name + `'s`} Promise Card</h2>
          <p>
            Things I want{" "}
            <span
              style={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                padding: "5px 10px",
              }}
            >
              {cardInfo.text.length}
            </span>
          </p>
          <div className="form-input">
            {cardInfo.text.map((item, index) => (
              <input
                key={index}
                type="text"
                name="text1"
                placeholder="write item name"
                value={item.value}
              />
            ))}
          </div>
        </div>

        {/* <div className='linkwrap'>
            <Link className='create-link' onClick={PromiseCard}>
              <p>
                Create your own promisecard.com.ng
              </p>
            </Link>
        </div> */}

        <div className="share">
          <div className="gen-btn socialShare">
            <button onClick={() => setOpenModal(true)}>
              Share with friends
            </button>
          </div>
          <div className="gen-btn createCard">
            <button>Create new card</button>
          </div>
        </div>
      </div>
      <DownloadShareModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default GeneratedCard;

// onClick={() => setOpenModal(true)