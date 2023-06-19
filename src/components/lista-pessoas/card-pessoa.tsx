import { useState } from 'react'
import './lista-pessoas.css'
import { BotaoDeletar, BotaoEditar } from '../botoes'

function CardPessoa() {
  const [isSelected, setIsSelected] = useState(false)

  function handleRowClick() {
    setIsSelected(!isSelected)
  }

  return (
    <tr className={`card-pessoa ${isSelected ? 'selected-row' : ''}`}
      onClick={handleRowClick}>
      <td><span>Nome:</span>Euteste</td>
      <td><span>Sobrenome:</span>Testiando</td>
      <td><span>Data de nascimento:</span>11/11/1111</td>
      <td className='opcoes-card'><BotaoDeletar></BotaoDeletar><BotaoEditar></BotaoEditar></td>
    </tr>
  )
}

export default CardPessoa