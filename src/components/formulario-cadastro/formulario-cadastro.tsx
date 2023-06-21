import React, { useState } from 'react'
import { BotaoPadrao } from '../botoes'
import ReactHtmlParser from 'react-html-parser'
import DatePicker from 'react-datepicker'
import './formulario-cadastro.css'
import 'react-datepicker/dist/react-datepicker.css'

interface FormularioCadastroProps {
  tipo: ContentType;
}

type ContentValue = {
  feedbackMessage: string,
  buttonLabel: string
}

type ContentType = 'cadastro' | 'atualizacao'


const content: Record<ContentType, ContentValue> = {
  cadastro: {
    feedbackMessage: 'Cadastro realizado com sucesso!<br>Confira na <a href="/">lista de registros</a>.',
    buttonLabel: 'Concluir cadastro'
  },
  atualizacao: {
    feedbackMessage: 'Atualização realizada com sucesso!<br>Voltar para <a href="/">lista de registros</a>.',
    buttonLabel: 'Concluir atualização'
  }
}

function FormularioCadastro(props: FormularioCadastroProps) {
  const { tipo } = props

  const [dataNascimento, setDataNascimento] = useState('')

  const handleDateChange = (date: Date | null) => {
    setDataNascimento(date ? date.toISOString() : ''/* acho que vai virar erro */)
  }

  return (
    <form className='formulario-cadastro'>
      <label htmlFor='nome'>Nome</label>
      <input type='text' name='nome' className='input-cadastro' placeholder='Nome' id='nome' required/>
      <label htmlFor='sobrenome'>Sobrenome</label>
      <input type='text' name='nome' className='input-cadastro' placeholder='Sobreome' id='sobrenome' required />
      <label htmlFor='nascimento'>Data de nascimento</label>
      <DatePicker
        className='input-cadastro'
        name='nascimento'
        selected={dataNascimento ? new Date(dataNascimento) : null}
        onChange={handleDateChange}
        dateFormat='dd/MM/yyyy'
        placeholderText='Data de nascimento' 
        id='nascimento'
        required/>
      <BotaoPadrao>{content[tipo].buttonLabel}</BotaoPadrao>

      <p className='texto-cadastro-aviso'>{ReactHtmlParser(content[tipo].feedbackMessage)}</p>
    </form>
  )
}

export default FormularioCadastro