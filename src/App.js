import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import UserRegistration from "./Components/UserRegistration";
import "./App.css";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="AppContainer">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="aboutus" element={<AboutUs></AboutUs>}></Route>
            <Route
              path="ourservices"
              element={<OurServices></OurServices>}
            ></Route>
            <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
            <Route
              path="userregistration"
              element={<UserRegistration></UserRegistration>}
            ></Route>
          </Route>
            <Route path="userlogin" element={<Login></Login>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
