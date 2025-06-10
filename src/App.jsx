import Home from "./page/Home/Home.jsx"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import About from "./page/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {

  return (
    <>  
        <Header/>
        <Routes>
          <Route path="/HongHaoTravel" element={<Home />} />
          <Route path="/HongHaoTravel/about" element={<About />} />
        </Routes>
        <Footer/>
      <div className='footer-footer'>
        <span className='footer-footer-span'></span>
        <p className='footer-editor'>© DESIGNED BY OKHUB AGENCY</p>
      </div>
    </>
  )
}

export default App
