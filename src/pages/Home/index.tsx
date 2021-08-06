import React from 'react'
import { Footer, Header, Icon, Main, Nav, Section } from './styled'
import homeImg from '../../assets/homeImg.jpg'
import { FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export function Home() {
  return (
    <Main>
      <Header>
        <h1>
          <a href="" className="logo">
            Jhonatan Scarpa
          </a>
        </h1>
        <Nav>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Trajetória</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </Nav>
      </Header>
      <Section id="home">
        <div className="spaceHome">
          <div>
            <img src={homeImg} alt="Jhonatan Scarpa" />
          </div>
          <div className="text">
            <h1>Jhonatan Scarpa</h1>
            <p>
              Conheci a programação em 2015 quando comecei um curso de designer
              de games, acabei estudando um pouco de C# para a montagem dos
              menus e ações do jogo. Não tive tanto interesse na época, mas
              algum tempo depois comecei a estudar um pouco sobre{' '}
              <a href="https://www.python.org/">Python</a> onde comecei a me
              incentivar a estudar e logo a seguir, comecei a estudar html e
              então já decidi que queria ser um progrador web, inicialmente meu
              foco é estudar o front-end, é algo que me chama muita atenção,
              cada vez que vejo as coisas funcionand me da vontade de continuar
              cada vez mais, é uma satisfação imensa, escrever algumas linhas e
              toda a tela mudar. Tenho me dedicado bastante a melhorar cada dia,
              meu objetivo é um dia ser full Stack e um dos melhores na área.
            </p>
          </div>
        </div>
      </Section>
      <Footer>
        <h1>
          <a href="#" className="logo">
            Jhonatan Scarpa
          </a>
        </h1>
        <br />
        <br />
        <p>Todos os direitos reservados 2021</p>
        <Icon>
          <a href="mailto:jhonatan.scarpa@outlook.com">
            <FiMail />
          </a>

          <a href="https://github.com/jhonscarpa" target="_blank">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/jhonscarpa/" target="_blank">
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/jhon_scarpa/" target="_blank">
            <FiInstagram />
          </a>
        </Icon>
      </Footer>
    </Main>
  )
}
