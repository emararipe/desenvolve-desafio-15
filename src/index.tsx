import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
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
      <div className='layout'>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/lista" element={<Lista/>} />
            <Route path='/error' element={<Erro/>} />
            <Route path="/atualiza_cadastro/:idPessoaCadastrada" element={<AtualizacaoCadastro/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  </StrictMode>
)
