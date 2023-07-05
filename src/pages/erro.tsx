import { TituloErro } from '../components/titulos'
import './erro.css'

function Erro() {
  return (

    <section className='main-erro'>
      <div className='erro container'>
        <div className='erro-texto'>
          <TituloErro> Ops...</TituloErro>
          <p> Algo parece não ter dado certo! <br /><br />
            Tente novamente mais tarde, se o erro <br />
            persistir, contate nossa <b>assistência técnica</b>.</p>
        </div>
        <div className='bg-erro'>
        </div>
      </div>
    </section>

  )
}

export default Erro