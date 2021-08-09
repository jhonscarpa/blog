import React from 'react'
import { Header, Nav } from './styled'
export function Headers() {
  return (
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
  )
}
