import React from "react";
import './Styles/main.css';
import Footer from "./Components/Footer"
import Navigation from './Components/Navigation';
import Contact from './Components/Contact';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Software from "./Services/Software";
import Mortgage from "./Services/Mortgage";
import Healthcare from "./Services/Healthcare";
import DataService from "./Services/DataServices";
import Insurance from "./Services/Insurance";
import Research from "./Services/Research";
import Transcription from "./Services/Transcription";
import Logistics from "./Services/Logistics";
import PhotoEditing from "./Services/PhotoEditing";
import Services from "./Components/Services";
import ServiceDetail from "./Services/Sub-services/ServiceDetail";
import Blog from "./Components/Blog";
import Email from "./Components/Email";
import Service from "./Projects/Services"
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <React.Fragment>
      <Router>
      <ScrollToTop/>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Blog/>
              <Service/>
              <About />
              <Contact />
            </>
          }>
          </Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Software-Development" element={<Software/>}>
          </Route>
          <Route path="/Mortgage-Support" element={<Mortgage/>}>
          </Route>
          <Route path="/Healthcare-BPO" element={<Healthcare/>}>
          </Route>
          <Route path="/Data-Services" element={<DataService/>}>
          </Route>
          <Route path="/Insurance-BPO" element={<Insurance/>}>
          </Route>
          <Route path="/Research-and-Analysis-Solution" element={<Research/>}>
          </Route>
          <Route path="/Transcription-Services" element={<Transcription/>}>
          </Route>
          <Route path="/Logistics-Services" element={<Logistics/>}>
          </Route>
          <Route path="/Photo-Editing" element={<PhotoEditing/>}>
          </Route>
          <Route path="/Detail" element={<ServiceDetail/>}></Route>
        </Routes>   
        <Email />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
