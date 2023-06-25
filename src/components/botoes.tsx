import styled from "styled-components"
import IconEditar from '../assets/img/pencil-edit-svgrepo.svg'
import IconDeletar from '../assets/img/trash-can-svgrepo.svg'

export const BotaoHero = styled.button`
  background: var(--destaque-primario);
  border-radius: 32px;
  border: none;
  
  width: 300px;
  padding: 1em 0;

  display: inline-block;

  font-size: 1.5em;
  font-weight: 600;
  text-decoration: none;
  color: var(--branco);

  &:hover {
    background: var(--destaque-primario-forte);
    cursor: pointer;
  }
`
export const BotaoPadrao = styled(BotaoHero)`
  width: 346px;

`
export const BotaoDeletar = styled.button`
  background-image: url(${IconDeletar});
  background-color: var(--destaque-secundario);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 65%;
  width: 2.75em;
  height: 2.75em;
  border-radius: 2.75em;
  border: none;
  cursor: pointer;
`

export const BotaoEditar = styled.button`
  background-image: url(${IconEditar});
  background-color: var(--destaque-primario);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  width: 2.75em;
  height: 2.75em;
  border-radius: 2.75em;
  border: none;
  cursor: pointer;
`


