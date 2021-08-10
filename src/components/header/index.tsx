import React from 'react'
import { Header, Nav } from './styled'
import { Link } from 'react-router-dom'
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/trajectory">Trajetoria</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}
