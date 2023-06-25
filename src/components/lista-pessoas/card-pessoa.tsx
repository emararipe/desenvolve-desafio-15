import { BotaoDeletar, BotaoEditar } from '../botoes'
import { Pessoa } from '../../interfaces/pessoa'
import { clienteService } from '../../service/cliente-service'
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

  async function deletaPessoa() {
    const confirmacao = confirm(`Deseja remover o cadastro de ${pessoa.nome} ${pessoa.sobrenome}?`)

    if(confirmacao) {
      await clienteService.excluirPessoa(pessoa.id)
      const pessoas = await clienteService.listaPessoasCadastradas()
      setListaPessoas(pessoas)
    }
  }

  function editarPessoa() {
    clienteService.excluirPessoa(pessoa.id)
  }

  return (
    <tr className='card-pessoa'>
      <td><span>Nome: </span>{pessoa.nome}</td>
      <td><span>Sobrenome: </span>{pessoa.sobrenome}</td>
      <td><span>Data de nascimento: </span>{dataFormatada}</td>
      <td className='opcoes-card'><BotaoDeletar onClick={deletaPessoa}></BotaoDeletar><BotaoEditar onClick={editarPessoa}></BotaoEditar></td>
    </tr>
  )
}

export default CardPessoa