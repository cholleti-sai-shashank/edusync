import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterAndLogin from "./pages/RegisterAndLogin/RegisterAndLogin";
import Home from "./pages/Home/Home";
import Connections from "./pages/Connections/Connections";
import EduNews from "./pages/EduNews/EduNews";
import Profile from './pages/Profile/Profile';
import EditProfile from "./pages/EditProfile/EditProfile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterAndLogin/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/connections" element={<Connections/>}/>
          <Route path="/edunews" element={<EduNews/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
