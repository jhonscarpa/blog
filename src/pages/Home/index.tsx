import React from 'react'
import { Main, RowCenterBetween, Section } from './styled'
import homeImg from '../../assets/homeImg.jpg'
import { Footers } from '../../components/footer'
import { Headers } from '../../components/header'

export function Home() {
  return (
    <Main>
      <Headers />
      <Section>
        <RowCenterBetween>
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
        </RowCenterBetween>
      </Section>
      <Footers />
    </Main>
  )
}
