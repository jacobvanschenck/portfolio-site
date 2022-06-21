import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './routes/resume'
import Project1 from './routes/project1'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="resume" element={<Resume />} />
        <Route path="project1" element={<Project1 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
