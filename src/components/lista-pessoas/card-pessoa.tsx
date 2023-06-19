import React from 'react'
import './lista-pessoas.css'
import { BotaoDeletar, BotaoEditar } from '../botoes'

function CardPessoa() {
  return (
    <tr className='card-pessoa'>
      <div className='dados-pessoa'>
        <td><span>Nome:</span></td>
        <td><span>Sobrenome:</span></td>
        <td><span>Data de nascimento:</span></td>
      </div>
      <td className='opcoes-card'><BotaoDeletar></BotaoDeletar><BotaoEditar></BotaoEditar></td>
    </tr>
  )
}

export default CardPessoa