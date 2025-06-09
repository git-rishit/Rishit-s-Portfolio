import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home.jsx'
import Education from './Pages/Education.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'

import './App.css'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
