import { useState, useEffect } from 'react'
import { BotaoPadrao } from '../botoes'
import { clienteService } from '../../service/cliente-service'
import ReactHtmlParser from 'react-html-parser'
import DatePicker from 'react-datepicker'
import { v4 as uuidv4 } from 'uuid'
import './formulario-cadastro.css'
import 'react-datepicker/dist/react-datepicker.css'


interface FormularioCadastroProps {
  tipo: ContentType
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
  const [mensagemFeedback, setMensagemFeedback] = useState<string>('')
  const [formularioEnviado, setFormularioEnviado] = useState(false)
  const [formModel, setFormModel] = useState<Record<string, string>>({
    nome: '',
    sobrenome: '',
    dataNascimento: ''
  })

  const [erros, setErros] = useState<Record<string, string[]>>({
    nome: [''],
    sobrenome: [''],
    dataNascimento: ['']
  })


  useEffect(() => {
    setMensagemFeedback('')
  }, [formModel])

  useEffect(() => {
    formModel.dataNascimento = dataNascimento

    setFormModel({ ...formModel })
  }, [dataNascimento])

  const handleDateChange = (data: Date | null) => {
    setDataNascimento(data ? data.toISOString() : '')
  }

  const handleTextChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target

    formModel[name] = value.trim()

    setFormModel({ ...formModel })

    const novosErros = { ...erros }
    novosErros[name] = []
    setErros(novosErros)
  }

  const validaFormulario = () => {
    const novosErros: Record<string, string[]> = {}

    if (formModel.nome.trim() === '') {
      novosErros.nome = ['O campo nome é obrigatório.']
    } else if (formModel.nome.length < 3 || formModel.nome.length > 35) {
      novosErros.nome = ['O nome deve ter entre 3 e 35 caracteres.']
    } else if (!formModel.nome.match(/^[a-zA-ZÀ-ÿ\s]+$/)) {
      novosErros.nome = ['Não é permitido usar caracteres especiais, números ou símbolos (Ex.:~!@#^&*(_-).']
    }

    if (formModel.sobrenome.trim() === '') {
      novosErros.sobrenome = ['O campo sobrenome é obrigatório.']
    } else if (formModel.sobrenome.length < 3 || formModel.sobrenome.length > 65) {
      novosErros.sobrenome = ['O sobrenome deve ter entre 3 e 35 caracteres.']
    } else if (!formModel.sobrenome.match(/^[a-zA-ZÀ-ÿ\s]+$/)) {
      novosErros.sobrenome = ['Não é permitido usar caracteres especiais, números ou símbolos (Ex.:~!@#$%^&*)_+-).']
    }

    if (formModel.dataNascimento.trim() === '') {
      novosErros.dataNascimento = ['O campo data de nascimento é obrigatório.']
    }

    setErros(novosErros)

    return Object.keys(novosErros).length === 0
  }


  const handleFormSubmit = (evento: React.SyntheticEvent) => {
    evento.preventDefault()

    const formIsValid = validaFormulario()

    if (formIsValid) {
      setMensagemFeedback(content[tipo].mensagemFeedback)

      formModel.id = uuidv4()

      clienteService.cadastraPessoa(formModel)

      setFormularioEnviado(true)

      return
    }

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
          {erros.nome && erros.nome.map((erro, index) => (
            <p key={index} className='texto-erro'>{erro}</p>
          ))}

          <input
            type='text'
            className='input-cadastro'
            placeholder='Sobrenome'
            name='sobrenome'
            onChange={handleTextChange}
          />
          {erros.sobrenome && erros.sobrenome.map((erro, index) => (
            <p key={index} className='texto-erro'>{erro}</p>
          ))}

          <DatePicker
            className='input-cadastro'
            selected={dataNascimento ? new Date(dataNascimento) : null}
            onChange={handleDateChange}
            dateFormat='dd/MM/yyyy'
            placeholderText='Data de nascimento'
          />
          {erros.dataNascimento && erros.dataNascimento.map((erro, index) => (
            <p key={index} className='texto-erro'>{erro}</p>
          ))}

          <BotaoPadrao className='botao-formulario'>
            {content[tipo].textoBotao}
          </BotaoPadrao>
        </form>
      )}

      {(
        <p className='texto-cadastro-aviso'>
          {ReactHtmlParser(mensagemFeedback)}
        </p>
      )}
    </>
  )
}

export default FormularioCadastro