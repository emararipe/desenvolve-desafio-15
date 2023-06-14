import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
import { TituloHero } from '../components/titulos'
import { BotaoHero } from '../components/botoes'
import './home.css'

function Home() {

  return (
    <Layout>
      <section className='main-home'>
        <div className='hero container'>
          <TituloHero className='chamada-hero'>
            Crie,<br />
            Veja,<br />
            e Edite
          </TituloHero>

          <div className='hero-texto'>
            <p>
              A melhor maneira de cadrastrar pessoas, visualizar e <br />
              controlar seus registros é com <span className='destaque-texto-hero'>.Pessoas</span>!
              <br /><br />
              Comece agora:
            </p>

            <div className='hero-botoes'>
              <Link to='/cadastro'>
                <BotaoHero>
                  Cadastrar <br />
                  novo usuário
                </BotaoHero>
              </Link>
              <Link to='/lista'>
                <BotaoHero>
                  Ver lista de <br />
                  usuários
                </BotaoHero>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
