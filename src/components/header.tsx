import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
      <nav>
        <div className='logo-principal'>
          <Link to='/'>.Pessoas</Link>
        </div>
        <ul className='menu-nav'>
          <li><Link to='/cadastro'>Cadastro</Link></li>
          <li><Link to='/lista'>Lista</Link></li>
        </ul>
      </nav>      
    </header>
  )
}

export default Header