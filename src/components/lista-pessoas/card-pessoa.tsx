import { BotaoDeletar, BotaoEditar } from '../botoes'
import { Pessoa } from '../../interfaces/pessoa'
import { clienteService } from '../../service/cliente-service'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/pt-br'
import './lista-pessoas.css'

moment.locale('pt-br')

interface Props {
  pessoa: Pessoa
  setListaPessoas: React.Dispatch<React.SetStateAction<Pessoa[]>>
}

function CardPessoa({ pessoa, setListaPessoas } : Props) {
  const dataFormatada = moment(pessoa.dataNascimento).format('L')
  const navigate = useNavigate()
  const handleEditarClick = () => {
    navigate(`/atualiza_cadastro/${pessoa.id}`)
  }
  
  async function deletaPessoa() {
    const confirmacao = confirm(`Deseja remover o cadastro de ${pessoa.nome} ${pessoa.sobrenome}?`)
    
    if(confirmacao) {
      await clienteService.excluiPessoa(pessoa.id)
      const pessoas = await clienteService.listaPessoasCadastradas()
      setListaPessoas(pessoas)
    }
  }
 
  return (
    <tr className='card-pessoa'>
      <td><span>Nome: </span>{pessoa.nome}</td>
      <td><span>Sobrenome: </span>{pessoa.sobrenome}</td>
      <td><span>Data de nascimento: </span>{dataFormatada}</td>
      <td className='opcoes-card'><BotaoDeletar onClick={deletaPessoa}></BotaoDeletar><BotaoEditar onClick={handleEditarClick}></BotaoEditar></td>
    </tr>
  )
}

export default CardPessoa