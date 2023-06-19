import React from 'react'
import CardPessoa from './card-pessoa'
import './lista-pessoas.css'

function ListaPessoas() {
  return (
    <table className='lista-pessoas'>
      <thead>
      <tr>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Data de nascimento</th>
      </tr>
      </thead>
      <tbody>
        <CardPessoa/>
        <CardPessoa/>
      </tbody>
    </table>
  )
}

export default ListaPessoas