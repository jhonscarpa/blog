import React from 'react'
import { FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Icon, Footer } from './styled'
export function Footers() {
  return (
    <Footer>
      <h1>
        <a href="#" className="logo">
          Jhonatan Scarpa
        </a>
      </h1>

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
  )
}
