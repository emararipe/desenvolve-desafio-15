import { useEffect, useState } from 'react'
import { clienteService } from '../../service/cliente-service'
import { Pessoa } from '../../interfaces/pessoa'
import CardPessoa from './card-pessoa'
import './lista-pessoas.css'

function ListaPessoas() {
  const [listaPessoas, setListaPessoas] = useState<Pessoa[]> ([])

  const buscarDados = async () => {
    const dadosPessoas = await clienteService.listaPessoasCadastradas()
    setListaPessoas(dadosPessoas)
  }

  useEffect(() => {
    buscarDados()
  }, [])

  return (
    <table className='lista-pessoas'>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Data de nascimento</th>
        </tr>
      </thead>
      <tbody>
        {listaPessoas.map((pessoa) => (
          <CardPessoa
            id={String(pessoa.id)}
            key={String(pessoa.id)}
            nome={pessoa.nome}
            sobrenome={pessoa.sobrenome}
            dataNascimento={pessoa.dataNascimento}
            setListaPessoas={setListaPessoas}
          />)
        )}
      </tbody>
    </table>
  )
}

export default ListaPessoas