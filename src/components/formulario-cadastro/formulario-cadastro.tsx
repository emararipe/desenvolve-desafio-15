import { useState } from 'react'
import { BotaoPadrao } from '../botoes'
import DatePicker from 'react-datepicker'
import './formulario-cadastro.css'
import 'react-datepicker/dist/react-datepicker.css'

interface FormularioCadastroProps {
  tipo: string;
}

function FormularioCadastro(props: FormularioCadastroProps) {
  const { tipo } = props

  const [dataNascimento, setDataNascimento] = useState('')

  const handleDateChange = (date: Date | null) => {
    setDataNascimento(date ? date.toISOString() : '')
  }
  return (
    <form className='formulario-cadastro'>
      <input type='text' className='input-cadastro' placeholder='Nome'/>
      <input type='text' className='input-cadastro' placeholder='Sobreome'/>
      <DatePicker 
        className='input-cadastro' 
        selected={dataNascimento ? new Date(dataNascimento) : null}
        onChange={handleDateChange}
        dateFormat='dd/MM/yyyy'
        placeholderText='Data de nascimento'/>
      <BotaoPadrao>Concluir { tipo }</BotaoPadrao>

    </form>
  )
}

export default FormularioCadastro