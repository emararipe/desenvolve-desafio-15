import { useEffect, useState } from 'react'
import { clienteService } from '../../service/cliente-service'
import { Pessoa } from '../../interfaces/pessoa'
import CardPessoa from './card-pessoa'
import './lista-pessoas.css'

function ListaPessoas() {
  async function pegaPessoasCadastradas(): Promise<Pessoa[]> {
    const pessoasCadastradas: Pessoa[] = await clienteService.listaPessoasCadastradas().then((promiseLista) => {
      const listaString = JSON.stringify(promiseLista)
      const listaObjeto:Array<Pessoa> = JSON.parse(listaString)
      return listaObjeto
    })
    return pessoasCadastradas
  }

  // listaObjeto.map(pessoa => {
  //   <CardPessoa 
  //   key={String(pessoa.id)} 
  //   nome={pessoa.nome} 
  //   sobrenome={pessoa.sobrenome} 
  //   nascimento={pessoa.nascimento}/>
  // }) 

  const [listaPessoas, setListaPessoas] = useState<Pessoa[]>([])
  
  useEffect(() => {
    pegaPessoasCadastradas().then((pessoasCadastradas) => {
      setListaPessoas(pessoasCadastradas)
    })
  }, [])
  
  useEffect((() => {
    listaPessoas
    })
  , [listaPessoas])
  

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
        
      </tbody>
    </table>
  )
}

export default ListaPessoas