import { TituloPrincipalMenor } from '../components/titulos'
import FormularioCadastro from '../components/formulario-cadastro/formulario-cadastro'
import './cadastro-e-atualizacao.css'

function Atualizacao() {
  return (
    <section className='main-cadastro'>
      <div className='paginas container'>
        <TituloPrincipalMenor>Atualização de dados</TituloPrincipalMenor>
        <FormularioCadastro tipo='atualizacao' />
      </div>
    </section>
  )
}

export default Atualizacao