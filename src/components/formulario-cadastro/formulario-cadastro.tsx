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
    setDataNascimento(date ? date.toISOString() : '')
  }

  return (
    <form className='formulario-cadastro'>
      <input type='text' className='input-cadastro' placeholder='Nome' />
      <input type='text' className='input-cadastro' placeholder='Sobreome' />
      <DatePicker
        className='input-cadastro'
        selected={dataNascimento ? new Date(dataNascimento) : null}
        onChange={handleDateChange}
        dateFormat='dd/MM/yyyy'
        placeholderText='Data de nascimento' />
      <BotaoPadrao>{content[tipo].buttonLabel}</BotaoPadrao>

      <p className='texto-cadastro-aviso'>{ReactHtmlParser(content[tipo].feedbackMessage)}</p>
    </form>
  )
}

export default FormularioCadastro