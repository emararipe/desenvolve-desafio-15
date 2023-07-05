import { TituloPrincipal } from '../components/titulos'
import ListaPessoas from '../components/lista-pessoas/lista-pessoas'
import './lista.css'

function Lista() {
  return (
    <section className='main-lista'>
      <div className='paginas container'>

        <TituloPrincipal>Lista de usuários</TituloPrincipal>
        <ListaPessoas />
      </div>
    </section>
  )
}

export default Lista