
import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()



const App = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Router>
        <Routes>

          <Route path={"/"} element={<Home show={show} setShow={setShow} />} />
          <Route path={"/about"} element={<About show={show} setShow={setShow} />} />
          <Route path={"/resume"} element={<Resume show={show} setShow={setShow} />} />
          <Route path={"/Portfolio"} element={<Portfolio show={show} setShow={setShow} />} />


        </Routes>
      </Router>

    </>
  )
}

export default App
