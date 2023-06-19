import React from 'react'
import Layout from '../Layout'
import { TituloPrincipal } from '../components/titulos'
import ListaPessoas from '../components/lista-pessoas/lista-pessoas'
import './lista.css'

function Lista() {
  return (
    <Layout>
      <section className='main-lista'>
        <div className='paginas container'>

          <TituloPrincipal>Lista de usuários</TituloPrincipal>
          <ListaPessoas />
        </div>
      </section>
    </Layout>
  )
}

export default Lista