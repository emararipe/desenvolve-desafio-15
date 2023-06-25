import { useState } from 'react'
import { BotaoDeletar, BotaoEditar } from '../botoes'
import './lista-pessoas.css'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

function CardPessoa({ nome, sobrenome, dataNascimento } : { nome: string, sobrenome: string, dataNascimento: string }) {
  const dataFormatada = moment(dataNascimento).format('L')

  function deletaPessoa(){
    
  }

  function editarPessoa(){
    
  }

  return (
    <tr className='card-pessoa'>
      <td><span>Nome: </span>{nome}</td>
      <td><span>Sobrenome: </span>{sobrenome}</td>
      <td><span>Data de nascimento: </span>{dataFormatada}</td>
      <td className='opcoes-card'><BotaoDeletar onClick={}></BotaoDeletar><BotaoEditar onClick={}></BotaoEditar></td>
    </tr>
  )
}

export default CardPessoa