import { useEffect, useState, useLayoutEffect } from 'react'
import { clienteService } from '../../service/cliente-service'
import { Pessoa } from '../../interfaces/pessoa'
import CardPessoa from './card-pessoa'
import './lista-pessoas.css'

function ListaPessoas() {
  const [listaPessoas, setListaPessoas] = useState<Pessoa[]>([])

  useEffect(() => {
    async function buscarDados() {
      const dadosPessoasJSON = await clienteService.listaPessoasCadastradas()
      const dadosPessoasString = JSON.stringify(dadosPessoasJSON)
      const dadosPessoas = JSON.parse(dadosPessoasString)
      setListaPessoas(dadosPessoas)
    }
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
            key={String(pessoa.id)}
            nome={pessoa.nome}
            sobrenome={pessoa.sobrenome}
            dataNascimento={pessoa.dataNascimento}
          />)
        )}
      </tbody>
    </table>
  )
}

export default ListaPessoas