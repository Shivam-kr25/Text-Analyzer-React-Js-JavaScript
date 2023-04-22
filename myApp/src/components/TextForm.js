import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upperCase!","success");
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked"+text);
      let newText=text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to lowerCase!","success");
  }
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=""
    setText(newText)
    props.showAlert("Text has been cleared!","success");
}
const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to clip-board!","success");
}
const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces has been removed!","success");
}
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text,setText]= useState('');
  return (
    <>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
    <textarea class="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" my-6></textarea>
    </div>  
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button> 
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove spaces</button>      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
