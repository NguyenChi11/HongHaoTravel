import Home from "./page/Home/Home.jsx"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import About from "./page/About/About.jsx";


function App() {

  return (
    <>
        <Routes>
          <Route path="/HongHaoTravel" element={<Home />} />
          <Route path="/HongHaoTravel/about" element={<About />} />
        </Routes>
    </>
  )
}

export default App
