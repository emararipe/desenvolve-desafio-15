import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
import './home.css'

function Home(){
  
  return (
   <Layout>
      <section className='main'>
        <div className='hero'>
          <h1 className='chamada-hero'>
            Crie,<br/> 
            Veja,<br/>
            e Edite
          </h1>
          <div className='hero-texto'>
            <p>
              A melhor maneira de cadrastrar pessoas, visualizar e <br/>
              controlar seus registros é com <span className='destaque-texto-hero'>.Pessoas</span>! 
              <br/><br/> 
              Comece agora:
            </p>
            <div className='hero-botoes'>
              <p>
                <Link className='hero-botao' to='/cadastro'>
                  Cadastrar <br/>
                  novo usuário
                </Link>
              </p>
              <p><Link className='hero-botao' to='/lista'>
                  Ver lista de <br/>
                  usuários
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
   </Layout>
  )
}

export default Home
