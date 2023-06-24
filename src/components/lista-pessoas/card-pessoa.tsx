import { useState } from 'react'
import './lista-pessoas.css'
import { BotaoDeletar, BotaoEditar } from '../botoes'

function CardPessoa({ nome, sobrenome, nascimento } : { nome: string, sobrenome: string, nascimento: Date }) {
  const [isSelected, setIsSelected] = useState(false)

  function handleRowClick() {
    setIsSelected(!isSelected)
  }

  return (
    <tr className={`card-pessoa ${isSelected ? 'selected-row' : ''}`}
      onClick={handleRowClick}>
      <td><span>Nome:</span>{nome}</td>
      <td><span>Sobrenome:</span>{sobrenome}</td>
      <td><span>Data de nascimento:</span>{nascimento.toString()/*revisão*/}</td>
      <td className='opcoes-card'><BotaoDeletar></BotaoDeletar><BotaoEditar></BotaoEditar></td>
    </tr>
  )
}

export default CardPessoa