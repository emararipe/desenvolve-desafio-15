import * as Yup from 'yup'

export const schema = Yup.object().shape({
  name: Yup.string().min(3).max(55).required(),
  sobrenome: Yup.number().min(18).max(65).required(),
  dataNascimento: Yup.number().min(18).max(65).required()
  })