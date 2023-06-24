const baseUrl = 'http://localhost:3001'



 const listaPessoasCadastradas = async ():Promise<JSON> => {
   const resposta = await fetch(`${baseUrl}/pessoasCadastradas`)

   if(resposta.ok){
     return resposta.json()
   } 
     throw new Error('Não foi possível visualizar as pessoas cadastradas.')
  
 }

const cadastraPessoa = async (model:Record<string, string | null>) => {
  const resposta = await fetch(`${baseUrl}/pessoasCadastradas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( model )
  });
  if(resposta.ok){
    return resposta.json()
  } 
    throw new Error('Não foi possível realizar o cadastro')
}


export const clienteService = {
   listaPessoasCadastradas,
  cadastraPessoa
}