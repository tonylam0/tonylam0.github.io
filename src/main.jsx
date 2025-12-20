import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage/Homepage.jsx'
import About from './pages/About/About.jsx'
import Notes from './pages/Notes/Notes.jsx'
import Workflow from './pages/Workflow/Workflow.jsx'
import Tech from './pages/Tech/Tech.jsx'
import Contact from './pages/Contact/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/workflow" element={<Workflow />}></Route>
        <Route path="/tech" element={<Tech />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
