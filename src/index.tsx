import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Lista from './pages/lista'
import Home from './pages/home'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cadastro" Component={Cadastro} />
        <Route path="/lista" Component={Lista} />
      </Routes>
    </Router>
  </StrictMode>
)
