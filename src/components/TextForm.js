import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text converted to Uppercase!","success")
    }
    const handleLoClick =()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text converted to Lowercase!","success")
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
        
    }

    const handleClearText =()=>{
      let newText = " "
      setText(newText)
      props.showAlert("Text has been Cleared!","success")
    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text Copy on Clipboard!","success")
    }

    const handleExtraSpaces=()=>{
      let newText = text.split(/[ ] + /)
      setText(newText.join(" "))
      props.showAlert("Extra Space has been removed!","success")
    }

    const[text,setText] = useState('')
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":'black'}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy the Text</button>
      <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove the Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
