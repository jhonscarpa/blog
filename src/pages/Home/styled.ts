import React from 'react'
import styled from 'styled-components'

export const Main = styled.main`
  background-color: #bdbdbd;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    font: 700 1.5rem 'Playfair Display', sans-serif;
  }
`

export const Section = styled.section`
  margin: 1.5rem;
  padding: 1.5rem;
  margin-top: 6rem;

  .spaceHome {
    display: inline-block;
    gap: 3rem;
    position: relative;
  }

  img {
    border-radius: 99999rem;
    width: 50vh;
    height: 50vh;
    position: relative;
  }

  div .text {
    position: relative;
    max-width: 40rem;
    left: 2rem;

    p {
      font: 300 1.3rem 'Open Sans Condensed', sans-serif;

      & a {
        color: blue;
      }
    }
  }
`
