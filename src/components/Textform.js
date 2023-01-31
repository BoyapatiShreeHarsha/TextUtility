import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");
  const [text2, settext2] = useState(text);

  let Words;

  let calculateWords = () => {
    let numOfWords = 0;
    let words2=text.split("");
    let words = text.split(/\s+/);   // /\s+/ is a regular expression which contain whitespaces and new lines
    let length = words.length;
    numOfWords =
      (words[length - 1] === "" || words[length - 1] === " " || words[length-1] ==="\n")  ? length - 1 : length;
    // console.log(words2);
    Words=words2;
    return numOfWords;
  };

  let showwords= ()=>{
    if(Words.length===0)
    return "Nothing to print";

    let str="";
    for(let i=0;i<Words.length;i++)
    {
      str+=Words[i];
    }
    console.log(str);
    return str;
  }

  let handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    settext2(text);
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  let handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    settext2(text);
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  let handleOnChange = (event) => {
    console.log("On change");
    settext2(text);
    setText(event.target.value);
  }
  let handleSpaces = ()=>{
    settext2(text);
    // let newtext=text.trim();
    setText(text);
  }
  let handleClear = ()=>{
    settext2(text);
    let newtext="";
    setText(newtext);
  }

  let handleCopy =()=>{
    // let copytext=document.getElementById("exampleFormControlTextarea1");
    // copytext.select();
    // props.showalert(`${text} is successfully copied`,"success");
    // document.execCommand("copy");
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showalert(`${text} is successfully copied`,"success");
  }

  let handleUndo =()=>{
    setText(text2);
  }
  return (
    <>
      <div className="mb-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{color : props.mode==='dark'?'white':'black',backgroundColor : props.mode==='dark'?'#343a40':'white'}} value={text} onChange={handleOnChange} rows="8"></textarea>
        <button disabled={text.length===0} className='btn btn-primary my-3' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0}  className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={handleClear}>Clear</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={handleUndo}>Undo</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={handleSpaces}>Clear ExtraSpaces</button>
      </div>
      <div className="container my-5" style={{color : props.mode==='dark'?'white':'black'}}>
        <h3>Summary</h3>
        <p> {calculateWords()} words and {text.length} character </p>
        <p>  {calculateWords() * 0.008} Minutes to read  </p>
        <p>Estimation time to read is {text.split(" ").length * 0.08} minutes</p>   {/*0.08 is just a example*/}
        <h4>Preview</h4>
        <p>{showwords()}</p>
      </div>
    </>
  )
}
