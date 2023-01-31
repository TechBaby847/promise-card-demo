import React from "react";
import { useState } from "react";

const PromiseCard = ({setColor, activeColor, setCardInfo, setCardToDisplay}) => {

    let [emptyText, setEmptyText] = useState(false)

    let [text, settext] = useState({
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: ''
    })
    
    const changeColor = ({target:{value}}) => {
        setColor({
            activeColor: value
        })
    }

    const handleTextChange = ({target:{name, value}}) => {
        settext((prev)=>({...prev, [name]:value}))
    }

    const generate = () => {
        let inputedtext = []
        for(let value in text) {
            // console.log(value, text[value])
            if(text[value] !== ''){
                inputedtext = [...inputedtext, {value:text[value]}]
            }
        }
        
        if(inputedtext.length < 1){
            setEmptyText(true)
        }else{
            //continue if at least one input field is filled
            setEmptyText(false)
            setCardInfo((prev)=>({...prev, text:[...inputedtext]}))
            setCardToDisplay({
                promiseCard: false,
                userInfo: true,
                generatedcard: false
              })
        }

    }

  return (
    <div className={`card`}>
      <h2>Create your promise card</h2>
      <p>Choose a color</p>
      <div className="color-selector">
        <button name='yellow' value='yellow' className={`color yellow ${activeColor === 'yellow' && 'active-btn'}`} onClick={changeColor}></button>
        <button name='pink' value='pink' className={`color pink ${activeColor === 'pink' && 'active-btn'}`} onClick={changeColor}></button>
        <button name='skyblue' value='skyblue' className={`color skyblue ${activeColor === 'skyblue' && 'active-btn'}`} onClick={changeColor}></button>
      </div>
      <div className={`form-input`}>
        <input type="text" name='text1' maxLength="25" placeholder="write item name" value={text.text1} onChange={handleTextChange} autoFocus={true}/>
        <input type="text" name='text2' maxLength="25" placeholder="write item name" value={text.text2} onChange={handleTextChange} />
        <input type="text" name='text3' maxLength="25" placeholder="write item name" value={text.text3} onChange={handleTextChange} />
        <input type="text" name='text4' maxLength="25" placeholder="write item name" value={text.text4} onChange={handleTextChange} />
        <input type="text" name='text5' maxLength="25" placeholder="write item name" value={text.text5} onChange={handleTextChange} />
        <input type="text" name='text6' maxLength="25" placeholder="write item name" value={text.text6} onChange={handleTextChange} />
        <input type="text" name='text7' maxLength="25" placeholder="write item name" value={text.text7} onChange={handleTextChange} />
        
        {emptyText && <p className="err-msg">Fill at least one row</p>}

      </div>
      <div className="gen-btn">
        <button onClick={generate}>Generate your card</button>
      </div>
      <p className="footer">
        Powered by &hearts;<strong>unboxed</strong>
      </p>
    </div>
  );
};

export default PromiseCard;
