import { BotaoDeletar, BotaoEditar } from '../botoes'
import { Pessoa } from '../../interfaces/pessoa'
import { clienteService } from '../../service/cliente-service'
import moment from 'moment'
import 'moment/locale/pt-br'
import './lista-pessoas.css'

moment.locale('pt-br')

interface Props extends Pessoa{
  setListaPessoas: React.Dispatch<React.SetStateAction<Pessoa[]>>
}

function CardPessoa({ id ,nome, sobrenome, dataNascimento, setListaPessoas } : Props) {
  const dataFormatada = moment(dataNascimento).format('L')

  async function deletaPessoa() {
    const confirmacao = confirm(`Deseja remover o cadastro de ${nome} ${sobrenome}?`)

    if(confirmacao) {
      await clienteService.excluirPessoa(id)
      const pessoas = await clienteService.listaPessoasCadastradas()
      setListaPessoas(pessoas)
    }
  }

  function editarPessoa() {
    clienteService.excluirPessoa(id)
  }

  return (
    <tr className='card-pessoa'>
      <td><span>Nome: </span>{nome}</td>
      <td><span>Sobrenome: </span>{sobrenome}</td>
      <td><span>Data de nascimento: </span>{dataFormatada}</td>
      <td className='opcoes-card'><BotaoDeletar onClick={deletaPessoa}></BotaoDeletar><BotaoEditar onClick={editarPessoa}></BotaoEditar></td>
    </tr>
  )
}

export default CardPessoa