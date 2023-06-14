import React from 'react'
import Layout from '../Layout'
import { TituloPrincipal } from '../components/titulos'
import FormularioCadastro from '../components/formulario-cadastro/formulario-cadastro'
import './cadastro-e-atualizacao.css'

function Cadastro() {
  return (
    <Layout>
       <section className='main-cadastro'>
          <div className='paginas container'>
            <TituloPrincipal>Cadastro</TituloPrincipal>
            <FormularioCadastro tipo='cadastro' />
          
          </div>
       </section>
    </Layout>
   )
}

export default Cadastro