import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        //.console.log("Uppercase is called" + text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to uppwecase ", "uppercase");
    }
    const handleLoClick = () => {
        //.console.log("Uppercase is called" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase ", "lowercase");
    }
    const handleClearClick = () => {
        //.console.log("Uppercase is called" + text);
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        //   console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>  <textarea
                        className="form-control"
                        value={text}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'blue' }}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="6"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lower case</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Convert to Clear</button>
            </div>
            <div className="container my-2">
                <h1>TEXT SUMMARY</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes</p>
                <h1>TEXT preview</h1>
                <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
            </div>
        </>
    )
}
