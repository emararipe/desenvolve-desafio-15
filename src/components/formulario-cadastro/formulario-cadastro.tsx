import { useState, useEffect } from 'react'
import { BotaoPadrao } from '../botoes'
import { clienteService } from '../../service/cliente-service'
import ReactHtmlParser from 'react-html-parser'
import DatePicker from 'react-datepicker'
import { v4 as uuidv4 } from 'uuid'
import './formulario-cadastro.css'
import 'react-datepicker/dist/react-datepicker.css'

interface FormularioCadastroProps {
  tipo: ContentType;
}

type ContentValue = {
  mensagemFeedback: string,
  textoBotao: string
}

type ContentType = 'cadastro' | 'atualizacao'

const content: Record<ContentType, ContentValue> = {
  cadastro: {
    mensagemFeedback: 'Cadastro realizado com sucesso!<br>Confira na <a href="/">lista de registros</a>.',
    textoBotao: 'Concluir cadastro'
  },
  atualizacao: {
    mensagemFeedback: 'Atualização realizada com sucesso!<br>Voltar para <a href="/">lista de registros</a>.',
    textoBotao: 'Concluir atualização'
  }
}

function FormularioCadastro(props: FormularioCadastroProps) {
  const { tipo } = props
  const [dataNascimento, setDataNascimento] = useState('')
  const [mensagemFeedback, setMensagemFeedback] = useState<string | null>()
  const [formularioEnviado, setFormularioEnviado] = useState(false)
  const [formModel, setFormModel] = useState<Record<string, string | null>>({
    nome: '',
    sobrenome: '',
    dataNascimento: ''
  })

  useEffect(() => {
    setMensagemFeedback(null)
  }, [formModel])

  useEffect(() => {
    formModel.dataNascimento = dataNascimento

    setFormModel({...formModel})
  }, [dataNascimento])

  const handleDateChange = (date: Date | null) => {
    setDataNascimento(date ? date.toISOString() : '')
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formModel[e.target.name] = e.target.value

    setFormModel({...formModel})
  }

  const validaFormulario = () => {
    if (Object.values(formModel).includes(''))
      return false

    return true
  }

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const formIsValid = validaFormulario()

    if (formIsValid) {
      setMensagemFeedback(content[tipo].mensagemFeedback)

      formModel.id = uuidv4()

      clienteService.cadastraPessoa(formModel)

      setFormularioEnviado(true)

      return
    }

    setMensagemFeedback('Verifique os campos digitados.')
  }

  return (
    <>
      {!formularioEnviado && (
        <form
          className='formulario-cadastro'
          onSubmit={handleFormSubmit}
        >
          <input
            type='text'
            className='input-cadastro'
            placeholder='Nome'
            name='nome'
            onChange={handleTextChange}
          />

          <input
            type='text'
            className='input-cadastro'
            placeholder='Sobrenome'
            name='sobrenome'
            onChange={handleTextChange}
          />

          <DatePicker
            className='input-cadastro'
            selected={dataNascimento ? new Date(dataNascimento) : null}
            onChange={handleDateChange}
            dateFormat='dd/MM/yyyy'
            placeholderText='Data de nascimento'
          />

          <BotaoPadrao>
            {content[tipo].textoBotao}
          </BotaoPadrao>
        </form>
      )}

      {mensagemFeedback && (
        <p className='texto-cadastro-aviso'>
          {ReactHtmlParser(mensagemFeedback)}
        </p>
      )}
    </>
  )
}

export default FormularioCadastro