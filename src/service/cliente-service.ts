import { FontDownloadOffSharp } from "@mui/icons-material"
import axios from "axios"
const baseUrl = "http://localhost:3001"

const listaPessoasCadastradas = async (): Promise<JSON> => {
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

const excluirPessoa = async (id: string) => {
  const resposta = await fetch(`${baseUrl}/pessoasCadastradas/${id}`, {
    method: "DELETE",
  })
  if (resposta.ok) {
    return resposta
  }
  throw new Error("Não foi possível excluir o cliente")
}

export const clienteService = {
  listaPessoasCadastradas,
  cadastraPessoa,
  excluirPessoa,
}
