import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import Lista from './pages/lista'
import AtualizacaoCadastro from './pages/atualizacao-cadastro'
import Erro from './pages/erro'
import './index.css'


const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cadastro" Component={Cadastro} />
        <Route path="/lista" Component={Lista} />
        <Route path='/error' Component={Erro} />
        <Route path="/atualiza_cadastro/:id" Component={AtualizacaoCadastro} />
      </Routes>
    </Router>
  </StrictMode>
)
