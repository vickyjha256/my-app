import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => { // This function allows us to write in textarea.
        console.log("On change");
        setText(event.target.value);
    }
    const handleUpClick = () => { // Note:-> This function is used instead first handleUpClick for change the text to uppercase.
        // console.log("Uppercase was clicked"); // It is used with handleOnChange for entering text and apply onclick on button.
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to UpperCase.", "success");
    }
    const handleLoClick = () => { // Note:-> This function is used to change the text to lowercase.
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to LowerCase.", "success");
    }
    const clickToClear = () => { // Note:-> This function is used to clear the text.
        // console.log("Clear was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text has been Cleared.", "success");
    }
    const clickToCopy = () => { // Note:-> This function is used to clear the text.
        // console.log("Copy was clicked");
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard.", "success");
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/); // Here, Concepts of regex is used.
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed.", "success");
    }
    const clickToBold = () => { // Note:-> This function is used instead first handleUpClick for change the text to uppercase.
        // console.log("Uppercase was clicked"); // It is used with handleOnChange for entering text and apply onclick on button.
        document.getElementById('myBox').style.fontWeight = 'bold';
        props.showAlert("Text has been converted to Bold Font.", "success");
    }
    const [text, setText] = useState('');
    // text = "New Text"; // Wrong way to change the state.
    // Note:-> setText() is only work when we use this inside the function like handleUpClick.
    // setText = ("New Text"); // Correct way to change the state.


    // const handleUpClick = () => { // This function set text when we click on textarea.
    //     console.log("Uppercase was clicked"); // This is for testing of click function only.
    //     setText("You have clicked on handleUpClick");
    // }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 align="center">{props.heading}</h1>
                <div>
                    {/* <textarea className="form-control" onClick={handleUpClick} value={text} name="" id="myBox" cols="30" rows="8"></textarea> */}
                    <textarea className="form-control" value={text} placeholder='Enter text here:' onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" cols="30" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} style={{ width: '20%' }} className='btn btn-info my-1' onClick={handleUpClick} ><b>Upper Case</b></button>
                <button disabled={text.length === 0} style={{ width: '20%' }} className='btn btn-secondary my-1' onClick={handleLoClick} ><b>Lower Case</b></button>
                <button disabled={text.length === 0} style={{ width: '20%' }} className='btn btn-warning my-1' onClick={clickToClear} ><b>Clear Text</b></button>
                <button disabled={text.length === 0} style={{ width: '20%' }} className='btn btn-secondary my-1' onClick={clickToCopy} ><b>Copy Text</b></button>
                <button disabled={text.length === 0} style={{ width: '20%' }} className='btn btn-info my-1' onClick={clickToBold} ><b>Bold Text</b></button>
                <button disabled={text.length === 0} style={{ width: '100%' }} className='btn btn-secondary my-1' onClick={removeExtraSpaces} ><b>Remove Extra Spaces</b></button>
            </div>

            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Characters and Word Counts</h1>
                <hr />
                <b>Total Characters in TextBox = {text.length}</b><br />
                <b>Total Words in TextBox = {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b>
                <hr />
                <h1>Time Required to Read the text.</h1>
                <hr />
                <b>This text can be read in: {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes</b>
                <hr />
                <h1>Read - Preview Text</h1>
                <div className='my-4' style={{ border: props.mode === 'light' ? '4px solid black' : '4px solid white', backgroundColor: props.mode === 'light' ? 'aqua' : 'crimson', borderRadius: props.mode === 'light' ? '10px' : '10px' }}>
                    {/* <em>{text}</em> */}
                    <p>{text.length > 0 ? text : "Enter some text to preview here."}</p>
                </div>
            </div>
        </>
    )
}
//  ---------------------------- Rough Text for Testing. ----------------------------
// my name is vicky jha.            I am very smart.
//                You know how i am.
//                I walk with handling a heap of attitute in my mind.
//                           You know this is my natural nature of expressing myself genuinely.
//                                       I am very gentle and calm until you are dishonest to me.