import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import SignIn from './Pages/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from './Pages/Jobs';
import VideoCall from './Pages/VideoCall';
import Homepage from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Homepage />} /> */}
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/jobs' element={<Jobs />} />
          <Route exact path='/video-call' element={<VideoCall />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;