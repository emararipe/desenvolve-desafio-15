import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
      <nav>
        <div className='logo-principal'>
          <Link className='logo' to='/'><span className='destaque-logo'>. </span>Pessoas</Link>
        </div>
        <ul className='menu-nav'>
          <li><Link className='menu-nav-opcao' to='/cadastro'>Cadastro</Link></li>
          <li><Link className='menu-nav-opcao' to='/lista'>Lista</Link></li>
        </ul>
      </nav>      
    </header>
  )
}

export default Header