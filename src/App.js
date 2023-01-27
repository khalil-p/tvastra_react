import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutHospital from "./components/AboutHospital/AboutHospital";
import AboutUs from "./components/AboutUs/AboutUs";
import Appointment from "./components/Appointment/Appointment";
import ContactUs from "./components/ContactUs/ContactUs";
import Index from "./components/Index/Index";
import Footer from "./components/Footer/Footer";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";



function App() {
  return (
    // <ErrorBoundary>
    <>
      <NavBar />
      {/* <AboutHospital /> */}
      {/* <AboutUs /> */}
      {/* <Appointment /> */}
      <Index />
      {/* <ContactUs /> */}
      <Footer />
    </>
    // {/* </ErrorBoundary> */}
  );
}

export default App;
