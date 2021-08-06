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

export const Header = styled.header`
  border-bottom: 1px solid black;
  padding: 1.5rem;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: whitesmoke;

  gap: 2rem;

  a {
    transition: color 0.3s;
  }
  a:hover {
    color: gray;
  }
`
export const Nav = styled.nav`
  font: 300 1.5rem 'Open Sans Condensed', sans-serif;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
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

export const Footer = styled.footer`
  background: whitesmoke;
  border-top: 1px solid black;
  margin-top: 2.2rem;
  display: inline-block;
  width: 100%;

  h1 {
    box-sizing: border-box;
    height: 2rem;
  }
  p {
    font: 300 1.2rem 'Open Sans Condensed', sans-serif;
    box-sizing: border-box;
  }
`

export const Icon = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
  justify-content: flex-end;
  position: relative;
  transition: color 0.3s;
  &:hover {
    color: gray;
  }
`
