import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import Lista from './pages/lista'
import Header from './components/header'

type LayoutProps = {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Router>
      <Header />
        <main>{children}</main>
      {/* <Footer /> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cadastro" Component={Cadastro} />
        <Route path="/lista" Component={Lista} />
      </Routes>
    </Router>
  )
}

export default Layout