import { TituloPrincipal } from '../components/titulos'
import FormularioCadastro from '../components/formulario-cadastro/formulario-cadastro'
import './cadastro-e-atualizacao.css'

function Cadastro() {
  return (
    <section className='main-cadastro'>
      <div className='paginas container'>
        <TituloPrincipal>Cadastro</TituloPrincipal>
        <FormularioCadastro tipo='cadastro' />
      </div>
    </section>
  )
}

export default Cadastro