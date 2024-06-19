import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Aisha-DARK MODE";
      setInterval(() => {
        document.title = "Aisha-DARK";
      }, 2000);
      setInterval(() => {
        document.title = "Aisha-Mode";
      }, 2000);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#8aaae5';
      showAlert("Light mode has been enabled", "baqwas");
      document.title = "Aisha-Light MODE";
      setInterval(() => {
        document.title = "Aisha-light";
      }, 2000);
      setInterval(() => {
        document.title = "Aisha-hehe";
      }, 2000);
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Hey" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform heading="Enter text to analyze" showAlert={showAlert} mode={mode} />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
