// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  // const [alert, setAlert] = useState(initialState);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  if (mode === 'light') {
    document.body.style.backgroundColor = '#10ff4a';
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#000029';
      // showAlert("Dark mode has been enabled.", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = '#10ff4a';
      // showAlert("Light mode has been enabled.", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        {/* <Navbar/> */}
        {/* <Navbar about="About us"/> */}
        <Navbar about='About us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <About/> */}
        <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text to convert it into another style or property:" mode={mode} />
      </div>


        {/* Note:-> Here we used Routes instead of Switch because (React v6) replaces Switch with Routes. */}
        {/* <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to convert it into another style or property:" mode={mode} />} />
          </Routes>
        </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;