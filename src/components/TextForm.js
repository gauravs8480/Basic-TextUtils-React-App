import React , {useState} from 'react'

export default function (props) {
    const[text,setText]=useState('Enter Text Here ');

    const handleupclick=()=>{
        // console.log('upper case was clicked'+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handlelowclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log('upper case was clicked ');
        setText(event.target.value);
    }

    const handleClear=()=>{
        let newText='';
        setText(newText);
    }

 

const handleExtraSpaces=() => {
    let newText=text.split(/[ ]+/)
   setText(newText.join(" "))
}

    return (
        <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
<h1 mb-4>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
</div>
<buttom  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to Upper Case </buttom>
<buttom  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>Convert to Lower Case </buttom>
<buttom  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</buttom>
<buttom  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</buttom>

    </div>

    <div className="container my-2"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Text Summary</h1>
        <p>
            words:{text.split(" ").filter((element)=>{return element.length!==0}).length}<br></br>
            characters:{text.length}<br></br>
            Average time to read word:{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}<br></br>
        </p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview Here"}</p>
    </div>
        </>

  )
}
