
import './App.css';
import Login from './components/login/Login';
import Sidenav from './components/sidenav/Sidenav';
import Doctorregistration from "./components/doctor/Doctorregistration";
import Patientregistration from "./components/patient/Patientregistration";
import Home from "./components/home/Home";
import Settings from "./components/settings/Settings";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
        <div>
          {/* <Login/> 
          <Sidenav/> */}
          <BrowserRouter>

            <Routes>

               <Route path="/" element={<Login />} />
               <Route path="/home" element={<Home />} />
               <Route path="/doctorregistration" element={<Doctorregistration />} />
               <Route path="/patientregistration" element={<Patientregistration />} />
               <Route path="/settings" element={<Settings />} />

            </Routes>

          </BrowserRouter>
          
        </div>
  );
}

export default App;
