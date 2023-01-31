import React, {useState} from 'react';
import DownloadShareModal from './DownloadShareModal';

const GeneratedCard = ({cardInfo}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={`card`}>
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

      <div className="share">
        <div className="gen-btn socialShare">
          <button onClick={() => setOpenModal(true)}>Share with friends</button>
        </div>
        <div className="gen-btn">
          <button onClick={() => setOpenModal(true)}>Create new card</button>
        </div>
        <DownloadShareModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
}

export default GeneratedCard