import "./App.css";
import Home from "./components/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";

function App() {
  const [alert1, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert1} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
