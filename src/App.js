import "./App.css";
import AboutHospital from "./components/AboutHospital/AboutHospital";
import AboutUs from "./components/AboutUs/AboutUs";
import Appointment from "./components/Appointment/Appointment";
import ContactUs from "./components/ContactUs/ContactUs";
import Index from "./components/Index/Index";
import { createBrowserRouter, RouterProvider,createRoutesFromElements, Route } from "react-router-dom";
import Root from './components/Root/Root';
import ErrorBoundary from "./components/ErrorBoundary";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Index/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/about_hospital' element={<AboutHospital/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/contact_us' element={<ContactUs/>}/>

        
      </Route>
    )
  )
  return (
    // <ErrorBoundary>
    <>
    <RouterProvider router={router}/>
      {/* <NavBar /> */}
      {/* <AboutHospital /> */}
      {/* <AboutUs /> */}
      {/* <Appointment /> */}
      {/* <Index /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </>
    // {/* </ErrorBoundary> */}
  );
}

export default App;
