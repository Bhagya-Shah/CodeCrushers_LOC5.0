import './App.css';
import React from 'react';
import { useEffect } from 'react';
import {messaging} from './firebase'
import {getToken} from 'firebase/messaging'
import Navbar from './Components/Navbar';
import SignIn from './Pages/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from './Pages/Jobs';
import VideoCall from './Pages/VideoCall';
import Homepage from './Pages/Home';
import Login from './Pages/Login';
import EmployeeForm from './Pages/EmployeeForm';
import EmployeeChart from './Pages/EmployeeChart'
import JobPosting from './Pages/JobPosting';
import EmployeeJobs from './Pages/EmployeeJobs';


function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if (permission == "granted") {
      const token = await getToken(messaging, { vapidKey: "BPWex3C4UyrngVrbt-6ZdjBC1RXmRRMh_3Wmg5Y2XI_h3a99LzdcTQMIRmMwwDjc0WBOiOSaM-7s_cF-kbxv0JE" })
      console.log("token", token);
    } else if (permission == "denied") {
      alert("Denied for it");
    }
  }
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Homepage />} /> */}
          <Route exact path='/SignIn' element={<SignIn />} />
          <Route exact path='/Jobs' element={<Jobs />} />
          <Route exact path='/Video-Call' element={<VideoCall />} />
          {/* <Route exact path='/empchart' element={<EmployeeChart/>} /> */}
          <Route exact path='/JobPosting' element={<JobPosting />} />
          <Route exact path='/EmployeeJobs' element={<EmployeeJobs />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/EmployeeForm' element={<EmployeeForm />} />
          <Route exact path='/employeeDash' element={<EmployeeForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;