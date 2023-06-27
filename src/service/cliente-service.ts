import axios from "axios"
import { Pessoa } from "../interfaces/pessoa"
const baseUrl = "http://localhost:3001"

const listaPessoasCadastradas = async (): Promise<Pessoa[]> => {
  try {
    const resposta = await axios.get(`${baseUrl}/pessoasCadastradas`)
    const dados = resposta.data
    return dados
  } catch (erro) {
    throw new Error(
      "Não foi possível encontrar as pessoas cadastradas no servidor."
    )
  }
}

const cadastraPessoa = async (model: Record<string, string | null>) => {
  const resposta = await fetch(`${baseUrl}/pessoasCadastradas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(model),
  })
  if (resposta.ok) {
    return resposta.json()
  }
  throw new Error("Não foi possível realizar o cadastro")
}

const excluiPessoa = async (id: string) => {
  const resposta = await fetch(`${baseUrl}/pessoasCadastradas/${id}`, {
    method: "DELETE",
  })
  if (resposta.ok) {
    return resposta
  }
  throw new Error("Não foi possível excluir o cliente")
}

const detalhaPessoa = async (id: string | undefined) => {
  const resposta = await axios.get(`${baseUrl}/pessoasCadastradas/${id}`)
  const dados = resposta.data
  return dados
}

const atualizaPessoa = async (
  pessoa: Record<string, string>,
  id: string | undefined
) => {
  const resposta = await fetch(`${baseUrl}/pessoasCadastradas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: pessoa.nome,
      sobrenome: pessoa.sobrenome,
      dataNascimento: pessoa.dataNascimento,
    }),
  })

  if (resposta.ok) {
    return resposta.json()
  }
  throw new Error("Não foi possível criar um cliente")
}

export const clienteService = {
  listaPessoasCadastradas,
  cadastraPessoa,
  excluiPessoa,
  detalhaPessoa,
  atualizaPessoa,
}
