import React from 'react'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  

  }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    font: 700 1.5rem 'Playfair Display', sans-serif;
  }

  p {
      font: 300 1.3rem 'Open Sans Condensed', sans-serif;

      & a {
        color: red;
      }
    }
`
