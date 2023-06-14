import styled from "styled-components"

export const BotaoHero = styled.button`
  background: var(--destaque-primario);
  border-radius: 32px;
  border: none;
  
  width: 300px;
  padding: 1em 0;

  display: inline-block;

  font-size: 24px;
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
  height: 80px;
`


  