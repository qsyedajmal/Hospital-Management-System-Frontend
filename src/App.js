
import './App.css';
import Login from './components/login/Login';
import Sidenav from './components/sidenav/Sidenav';
import Doctorregistration from "./components/doctor/Doctorregistration";
import Patientregistration from "./components/patient/Patientregistration";
import Home from "./components/home/Home";
import Settings from "./components/settings/Settings";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Createaccount from './components/login/Createaccount';


     {/* <Login/> 
          <Sidenav/> */}
                    {/* <Navbar/>
          <Sidenav/> */}
function App() {

  return (
        <div>
     
          <BrowserRouter>

            <Routes>
            
               <Route path="/" element={<Login />} />
               <Route path="/createaccount" element={<Createaccount />} /> 

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
